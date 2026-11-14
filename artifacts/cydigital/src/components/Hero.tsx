import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Hero() {
  const { language } = useLanguage();
  const isGreek = language === "el";

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#F7F5EF] text-[#171717]"
      style={{
        minHeight: "min(850px, calc(100svh - 76px))",
        paddingTop: "clamp(118px, 15vh, 165px)",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(23,23,23,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(23,23,23,0.045) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "linear-gradient(to bottom, black, transparent 85%)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-12 px-5 pb-16 md:px-8 lg:grid-cols-[1.04fr_0.96fr] lg:gap-8 lg:px-12 xl:px-16">
        {/* LEFT: MESSAGE */}
        <div className="relative z-10 max-w-[720px]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex items-center gap-3"
          >
            <span className="h-[2px] w-8 bg-[#FF6633]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#3155F5]">
              {isGreek
                ? "ΑΝΕΞΑΡΤΗΤΟ DIGITAL STUDIO · ΚΥΠΡΟΣ"
                : "INDEPENDENT DIGITAL STUDIO · CYPRUS"}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12 }}
            className="max-w-[760px] text-[clamp(2.8rem,6.3vw,6.1rem)] font-extrabold leading-[0.99] tracking-[-0.075em]"
          >
            {isGreek ? (
              <>
                Η επόμενη
                <br />
                ψηφιακή σας
                <br />
                <span className="relative inline-block text-[#3155F5]">
                  κίνηση.
                  <span className="absolute -bottom-1 left-0 h-[7px] w-[72%] bg-[#FF6633]" />
                </span>
              </>
            ) : (
              <>
                Your next
                <br />
                digital
                <br />
                <span className="relative inline-block text-[#3155F5]">
                  move.
                  <span className="absolute -bottom-1 left-0 h-[7px] w-[72%] bg-[#FF6633]" />
                </span>
              </>
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 max-w-[510px] text-[15px] leading-[1.85] text-[#171717]/65 md:text-[17px]"
          >
            {isGreek
              ? "Σχεδιάζουμε και δημιουργούμε ιστοσελίδες, e-commerce, branding και digital εμπειρίες που δίνουν στην επιχείρησή σας ξεκάθαρη ταυτότητα και ουσιαστική παρουσία."
              : "We design and build websites, e-commerce experiences, branding and digital platforms that give your business a distinctive identity and a stronger online presence."}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <button
              type="button"
              onClick={() => scrollTo("contact")}
              data-testid="button-hero-primary"
              className="group inline-flex min-h-[54px] items-center gap-5 rounded-full bg-[#3155F5] px-7 text-[11px] font-bold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#2444D8] hover:shadow-[0_12px_30px_rgba(49,85,245,0.22)]"
            >
              {isGreek ? "Ας μιλήσουμε" : "Let's talk"}
              <ArrowUpRight size={17} />
            </button>

            <button
              type="button"
              onClick={() => scrollTo("portfolio")}
              data-testid="button-hero-secondary"
              className="group inline-flex min-h-[54px] items-center gap-3 rounded-full border border-[#171717]/20 px-7 text-[11px] font-bold uppercase tracking-[0.12em] text-[#171717] transition-all duration-300 hover:border-[#171717] hover:bg-white"
            >
              {isGreek ? "Δείτε τα έργα μας" : "Explore our work"}
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="mt-14 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-[#171717]/15 pt-5"
          >
            {["STRATEGY", "DESIGN", "DEVELOPMENT", "GROWTH"].map((item) => (
              <span
                key={item}
                className="text-[9px] font-bold tracking-[0.17em] text-[#171717]/45"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>

        {/* RIGHT: ORIGINAL BRAND COMPOSITION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, x: 24 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-[590px] lg:ml-auto"
        >
          <div className="relative aspect-[1.02/1] w-full">
            {/* Main blue canvas */}
            <div className="absolute inset-[5%_3%_7%_8%] overflow-hidden bg-[#3155F5]">
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)",
                  backgroundSize: "38px 38px",
                }}
              />

              <div className="absolute -right-[10%] -top-[8%] h-[62%] w-[62%] rounded-full border border-white/25" />
              <div className="absolute -right-[2%] top-[1%] h-[47%] w-[47%] rounded-full border border-white/25" />

              <div className="absolute bottom-[7%] left-[8%] text-white">
                <div className="text-[10px] font-bold tracking-[0.25em] text-white/65">
                  CY DIGITAL
                </div>
                <div className="mt-2 text-[clamp(3.8rem,9vw,7.5rem)] font-extrabold leading-[0.8] tracking-[-0.1em]">
                  MOVE
                  <span className="text-[#FF6633]">.</span>
                </div>
                <div className="mt-5 text-[9px] font-semibold tracking-[0.2em] text-white/65">
                  {isGreek ? "ΙΔΕΕΣ ΣΕ ΚΙΝΗΣΗ" : "IDEAS IN MOTION"}
                </div>
              </div>

              <div className="absolute right-[9%] top-[9%] flex h-16 w-16 items-center justify-center rounded-full bg-[#FF6633] text-white">
                <ArrowUpRight size={29} strokeWidth={1.5} />
              </div>
            </div>

            {/* Floating website preview */}
            <div className="absolute left-0 top-[17%] w-[55%] overflow-hidden rounded-[3px] border border-[#171717]/10 bg-white shadow-[0_24px_70px_rgba(23,23,23,0.18)]">
              <div className="flex h-8 items-center gap-1.5 border-b border-[#171717]/10 px-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF6633]" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#3155F5]/50" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#171717]/15" />
                <div className="ml-3 h-2 w-[42%] rounded-full bg-[#171717]/[0.07]" />
              </div>
              <div className="p-4 md:p-5">
                <div className="flex items-center justify-between">
                  <div className="h-2 w-12 bg-[#171717]" />
                  <div className="h-2 w-8 bg-[#3155F5]" />
                </div>
                <div className="mt-7 text-[clamp(1.1rem,2.5vw,2rem)] font-extrabold leading-[0.98] tracking-[-0.07em] text-[#171717]">
                  {isGreek ? (
                    <>
                      Σχεδίασε
                      <br />
                      το μέλλον.
                    </>
                  ) : (
                    <>
                      Design
                      <br />
                      what's next.
                    </>
                  )}
                </div>
                <div className="mt-3 h-1.5 w-[85%] bg-[#171717]/10" />
                <div className="mt-1.5 h-1.5 w-[65%] bg-[#171717]/10" />
                <div className="mt-5 flex items-center justify-between">
                  <div className="h-6 w-[43%] rounded-full bg-[#3155F5]" />
                  <div className="h-6 w-[43%] bg-[#F7F5EF]" />
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  <div className="h-12 bg-[#F7F5EF]" />
                  <div className="h-12 bg-[#FF6633]/20" />
                  <div className="h-12 bg-[#3155F5]/10" />
                </div>
              </div>
            </div>

            {/* Orange graphic block */}
            <div className="absolute bottom-[2%] right-[1%] flex h-[27%] w-[29%] items-end justify-end overflow-hidden bg-[#FF6633] p-4 text-white">
              <span className="text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-none tracking-[-0.1em]">
                +
              </span>
              <div className="absolute left-4 top-4 text-[8px] font-bold tracking-[0.18em]">
                THINK
                <br />
                BIGGER
              </div>
            </div>

            {/* Small caption */}
            <div className="absolute -bottom-1 left-[9%] text-[9px] font-bold uppercase tracking-[0.18em] text-[#171717]/45">
              {isGreek ? "ΣΤΡΑΤΗΓΙΚΗ · ΔΗΜΙΟΥΡΓΙΑ · ΕΞΕΛΙΞΗ" : "STRATEGY · CREATIVITY · PROGRESS"}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom brand line */}
      <div className="relative border-t border-[#171717]/10">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-5 py-5 md:px-8 lg:px-12 xl:px-16">
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#171717]/45">
            CY DIGITAL AGENCY
          </span>
          <span className="text-right text-[9px] font-bold uppercase tracking-[0.16em] text-[#171717]/45">
            {isGreek ? "ΚΥΠΡΟΣ · ΠΑΓΚΟΣΜΙΑ ΠΡΟΣΕΓΓΙΣΗ" : "CYPRUS · GLOBAL PERSPECTIVE"}
          </span>
        </div>
      </div>
    </section>
  );
}
