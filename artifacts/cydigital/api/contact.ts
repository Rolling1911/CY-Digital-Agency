import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

const serviceLabels: Record<string, string> = {
  web: "Δημιουργία Ιστοσελίδας",
  social: "Social Media Management",
  graphics: "Γραφιστικά & Δημιουργικά",
  branding: "Logo & Branding",
  google: "Google Business Profile",
  ads: "Διαφημίσεις Facebook & Instagram",
  content: "Δημιουργία Περιεχομένου",
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, company, phone, email, city, service, message } = req.body as {
    name: string;
    company: string;
    phone: string;
    email: string;
    city: string;
    service: string;
    message?: string;
  };

  if (!name || !company || !phone || !email || !city || !service) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const gmailUser = process.env.GMAIL_USER || "fanosafrica@gmail.com";
  const gmailPass = process.env.GMAIL_APP_PASSWORD;

  if (!gmailPass) {
    return res.status(500).json({ error: "Email service not configured" });
  }

  const serviceLabel = serviceLabels[service] || service;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: gmailUser, pass: gmailPass },
  });

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0B0B0B; color: #ffffff; padding: 32px; border-radius: 8px; border: 1px solid rgba(212,175,55,0.3);">
      <div style="text-align:center; margin-bottom: 28px;">
        <h1 style="color: #D4AF37; font-size: 22px; margin: 0;">CYDigital</h1>
        <p style="color: #888; font-size: 13px; margin: 6px 0 0;">Νέα υποβολή φόρμας επικοινωνίας</p>
      </div>
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 10px 0; color: #888; font-size: 13px; width: 140px; vertical-align: top;">Όνομα</td><td style="padding: 10px 0; color: #fff; font-size: 14px; font-weight: 600;">${name}</td></tr>
        <tr style="border-top: 1px solid rgba(255,255,255,0.06);"><td style="padding: 10px 0; color: #888; font-size: 13px; vertical-align: top;">Επιχείρηση</td><td style="padding: 10px 0; color: #fff; font-size: 14px; font-weight: 600;">${company}</td></tr>
        <tr style="border-top: 1px solid rgba(255,255,255,0.06);"><td style="padding: 10px 0; color: #888; font-size: 13px; vertical-align: top;">Τηλέφωνο</td><td style="padding: 10px 0; color: #D4AF37; font-size: 14px; font-weight: 600;">${phone}</td></tr>
        <tr style="border-top: 1px solid rgba(255,255,255,0.06);"><td style="padding: 10px 0; color: #888; font-size: 13px; vertical-align: top;">Email</td><td style="padding: 10px 0; color: #D4AF37; font-size: 14px;">${email}</td></tr>
        <tr style="border-top: 1px solid rgba(255,255,255,0.06);"><td style="padding: 10px 0; color: #888; font-size: 13px; vertical-align: top;">Περιοχή</td><td style="padding: 10px 0; color: #fff; font-size: 14px;">${city}</td></tr>
        <tr style="border-top: 1px solid rgba(255,255,255,0.06);"><td style="padding: 10px 0; color: #888; font-size: 13px; vertical-align: top;">Υπηρεσία</td><td style="padding: 10px 0; color: #fff; font-size: 14px;">${serviceLabel}</td></tr>
        ${message ? `<tr style="border-top: 1px solid rgba(255,255,255,0.06);"><td style="padding: 10px 0; color: #888; font-size: 13px; vertical-align: top;">Μήνυμα</td><td style="padding: 10px 0; color: #fff; font-size: 14px; white-space: pre-wrap;">${message}</td></tr>` : ""}
      </table>
      <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid rgba(212,175,55,0.2); text-align: center; color: #555; font-size: 11px;">
        Αποστολή από cydigital.agency
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"CYDigital Website" <${gmailUser}>`,
      to: "info@cydigital.agency",
      subject: `Νέα Επικοινωνία — ${name} (${company})`,
      html,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Failed to send contact email:", err);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
