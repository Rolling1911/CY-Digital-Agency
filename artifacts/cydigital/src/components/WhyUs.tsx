import { motion } from "framer-motion";
import {
  Lightbulb,
  Palette,
  Code2,
  Target,
  Globe2,
  Handshake,
  ArrowUpRight,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function WhyUs() {
  const { language } = useLanguage();

  const reasons = [
    {
      icon: Lightbulb,
      number: "01",
      title: language === "el" ? "Στρατηγική πρώτα" : "Strategy first",
      desc:
        language === "el"
          ? "Ξεκινάμε κατανοώντας την επιχείρηση, το κοινό και τους στόχους σας. Μετά επιλέγουμε τη σωστή ψηφιακή λύση."
          : "We start by understanding your business, audience and goals. Then we choose the right digital solution.",
    },
    {
      icon: Palette,
      number: "02",
      title: language === "el" ? "Σχεδιασμός με σκοπό" : "Design with purpose",
      desc:
        language === "el"
          ? "Δημιουργούμε ξεχωριστές οπτικές εμπειρίες που εκφράζουν την ταυτότητα της επιχείρησής σας."
          : "We create distinctive visual experiences that communicate your business identity.",
    },
    {
      icon: Code2,
      number: "03",
      title: language === "el" ? "Τεχνολογία που δουλεύει" : "Technology that works",
      desc:
        language === "el"
          ? "Από ιστοσελίδες μέχρι αυτοματισμούς, επιλέγουμε τεχνολογίες με βάση τις πραγματικές σας ανάγκες."
          : "From websites to automation, we choose technology based on what your business actually needs.",
    },
    {
      icon: Target,
      number: "04",
      title: language === "el" ? "Εστίαση στους στόχους" : "Focused on your goals",
      desc:
        language === "el"
          ? "Κάθε ενέργεια έχει συγκεκριμένο σκοπό — από την ενίσχυση της παρουσίας σας μέχρι τη δημιουργία νέων ευκαιριών."
          : "Every activity has a clear purpose — from strengthening your presence to creating new opportunities.",
    },
    {
      icon: Globe2,
      number: "05",
      title: language === "el" ? "Κύπρος και εξωτερικό" : "Cyprus and beyond",
      desc:
        language === "el"
          ? "Συνδυάζουμε κατανόηση της τοπικής αγοράς με σχεδιασμό για επιχειρήσεις που θέλουν να απευθυνθούν διεθνώς."
          : "We combine an understanding of the local market with a perspective for businesses looking to reach international audiences.",
    },
    {
      icon: Handshake,
      number: "06",
      title: language === "el" ? "Συνεργασία με διαφάνεια" : "Straightforward collaboration",
      desc:
        language === "el"
          ? "Καθαρή επικοινωνία, συγκεκριμένα παραδοτέα και συνεργασία με ξεκάθαρα επόμενα βήματα."
          : "Clear communication, defined deliverables and a collaborative process with clear next steps.",
    },
  ];

  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-[#F7F5EF] py-20 md:py-28"
    >
      <div className="pointer-events-none absolute -left-48 top-1/4 h-[500px] w-[500px] rounded-full bg-[#3155F5]/[0.045] blur-[130px]" />

      <div className="container relative z-10 mx-auto px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <p className="mb-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#FF6633]">
              <span className="h-px w-8 bg-[#FF6633]" />
              {language === "el" ? "ΓΙΑΤΙ CY DIGITAL" : "WHY CY DIGITAL"}
            </p>

            <h2 className="mb-7 text-4xl font-bold leading-[1.08] tracking-tight text-[#171717] md:text-6xl">
              {language === "el" ? (
                <>
                  Δεν δημιουργούμε απλώς.
                  <span className="text-[#3155F5]"> Δημιουργούμε με κατεύθυνση.</span>
                </>
              ) : (
                <>
                  We don't just create.
                  <span className="text-[#3155F5]"> We create with direction.</span>
                </>
              )}
            </h2>

            <p className="mb-9 max-w-lg text-base leading-8 text-[#171717]/65 md:text-lg">
              {language === "el"
                ? "Η ψηφιακή παρουσία μιας επιχείρησης πρέπει να κάνει περισσότερα από το να δείχνει όμορφη. Πρέπει να επικοινωνεί σωστά, να λειτουργεί αποτελεσματικά και να υποστηρίζει τους στόχους της."
                : "A business's digital presence should do more than look good. It should communicate clearly, work effectively and support real business objectives."}
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-4 border border-[#171717]/25 px-6 py-4 text-xs font-bold uppercase tracking-widest text-[#171717] transition-all hover:border-[#3155F5] hover:bg-[#3155F5] hover:text-white"
            >
              {language === "el" ? "Ας συζητήσουμε" : "Let's talk"}
              <ArrowUpRight size={16} />
            </a>

            <div className="mt-14 hidden border-t border-[#171717]/15 pt-6 sm:block">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#171717]/40">
                CY DIGITAL AGENCY
              </p>
              <p className="mt-2 text-sm text-[#171717]/60">
                {language === "el"
                  ? "Στρατηγική. Δημιουργικότητα. Ψηφιακή ανάπτυξη."
                  : "Strategy. Creativity. Digital growth."}
              </p>
            </div>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <motion.div
                  key={reason.number}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.5, delay: index * 0.07 }}
                  className="group min-h-[225px] border border-[#171717]/[0.08] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#3155F5]/30 hover:shadow-[0_14px_40px_rgba(23,23,23,0.06)] md:p-8"
                >
                  <div className="mb-9 flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#3155F5]/[0.09] text-[#3155F5] transition-colors duration-300 group-hover:bg-[#3155F5] group-hover:text-white">
                      <Icon size={21} strokeWidth={1.6} />
                    </div>

                    <span className="text-xs tracking-widest text-[#171717]/30">
                      / {reason.number}
                    </span>
                  </div>

                  <h3 className="mb-3 text-lg font-bold text-[#171717] md:text-xl">
                    {reason.title}
                  </h3>

                  <p className="text-sm leading-7 text-[#171717]/60">
                    {reason.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
