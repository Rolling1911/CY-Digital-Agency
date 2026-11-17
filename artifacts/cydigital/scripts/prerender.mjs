import { chromium as playwright } from "playwright";
import sparticuzChromium from "@sparticuz/chromium";
import { preview } from "vite";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { languageRoutes } from "../src/lib/languageRoutes.ts";

const PORT = 4175;
const BASE_URL = `http://127.0.0.1:${PORT}`;
const DIST_DIR = path.resolve("dist");

const routes = Object.values(languageRoutes).flatMap((entry) => [
  { path: entry.el, language: "el" },
  { path: entry.en, language: "en" },
]);

let server;
let browser;
const failures = [];
let generated = 0;

try {
  server = await preview({
    configFile: path.resolve("vite.config.ts"),
    preview: {
      host: "127.0.0.1",
      port: PORT,
      strictPort: true,
    },
  });

  const isLinux = process.platform === "linux";

  browser = await playwright.launch(
    isLinux
      ? {
          args: sparticuzChromium.args,
          executablePath: await sparticuzChromium.executablePath(),
          headless: true,
        }
      : {
          headless: true,
        },
  );

  const page = await browser.newPage();

  for (const route of routes) {
    const requestPath = route.path === "/" ? "/" : `${route.path}/`;
    const url = BASE_URL + requestPath;

    try {
      const response = await page.goto(url, {
        waitUntil: "networkidle",
        timeout: 30000,
      });

      if (!response || !response.ok()) {
        throw new Error(`HTTP response was unsuccessful: ${response?.status() ?? "no response"}`);
      }

      await page.waitForFunction(
        (language) =>
          document.documentElement.lang === language &&
          document.querySelector("#root")?.innerText.trim().length > 100,
        route.language,
        { timeout: 15000 },
      );

      await page.waitForTimeout(500);

      const details = await page.evaluate(() => ({
        title: document.title,
        language: document.documentElement.lang,
        contentLength: document.querySelector("#root")?.innerHTML.length ?? 0,
      }));

      if (!details.title || details.language !== route.language || details.contentLength < 1000) {
        throw new Error("Page title, language, or rendered content is missing");
      }

      const relativePath =
        route.path === "/"
          ? "index.html"
          : path.join(
              route.path.slice(1).split("/").join(path.sep),
              "index.html",
            );

      const outputPath = path.join(DIST_DIR, relativePath);
      await mkdir(path.dirname(outputPath), { recursive: true });
      await writeFile(outputPath, await page.content(), "utf8");

      generated += 1;
      console.log(`OK ${route.language.toUpperCase()} ${route.path} — ${details.title}`);
    } catch (error) {
      failures.push({ path: route.path, error: error.message });
      console.error(`FAILED ${route.path}: ${error.message}`);
    }
  }
} catch (error) {
  console.error("PRERENDER SETUP FAILED:", error);
  process.exitCode = 1;
} finally {
  if (browser) {
    await browser.close().catch((error) => {
      console.error("Browser cleanup failed:", error.message);
      process.exitCode = 1;
    });
  }

  if (server) {
    await new Promise((resolve, reject) => {
      server.httpServer.close((error) => {
        if (error) reject(error);
        else resolve();
      });
    }).catch((error) => {
      console.error("Preview server cleanup failed:", error.message);
      process.exitCode = 1;
    });
  }
}

console.log("");
console.log(`Generated: ${generated}/${routes.length}`);

if (failures.length || generated !== routes.length) {
  console.error("Failures:", JSON.stringify(failures, null, 2));
  process.exitCode = 1;
}
