import { motion } from "framer-motion";
import {
  Bot,
  MessageCircle,
  CalendarDays,
  Workflow,
  ArrowUpRight,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLanguageRoute } from "@/lib/languageRoutes";

export function AIServices() {
  const { language } = useLanguage();

  const services = [
    {
      icon: Bot,
      number: "01",
      title: language === "el" ? "AI Assistants" : "AI Assistants",
      description:
        language === "el"
          ? "Έξυπνοι ψηφιακοί βοηθοί που απαντούν σε ερωτήσεις και υποστηρίζουν την εξυπηρέτηση πελατών."
          : "Intelligent digital assistants that answer questions and support customer service.",
    },
    {
      icon: MessageCircle,
      number: "02",
      title: language === "el" ? "Messaging Automation" : "Messaging Automation",
      description:
        language === "el"
          ? "Αυτοματοποιημένες ροές επικοινωνίας για WhatsApp, Instagram και άλλα κανάλια, όπου υποστηρίζεται η διασύνδεση."
          : "Automated communication flows for WhatsApp, Instagram and other channels where integrations are supported.",
    },
    {
      icon: CalendarDays,
      number: "03",
      title: language === "el" ? "Booking Systems" : "Booking Systems",
      description:
        language === "el"
          ? "Οργάνωση αιτημάτων, ραντεβού και κρατήσεων με προσαρμοσμένες ψηφιακές ροές."
          : "Organise enquiries, appointments and bookings through tailored digital workflows.",
    },
    {
      icon: Workflow,
      number: "04",
      title: language === "el" ? "Business Automation" : "Business Automation",
      description:
        language === "el"
          ? "Συνδέστε εργαλεία και αυτοματοποιήστε επαναλαμβανόμενες εργασίες για να εξοικονομείτε χρόνο."
          : "Connect your tools and automate repetitive tasks to save time and reduce manual work.",
    },
  ];

  return (
    <section
      id="ai-services"
      className="relative overflow-hidden bg-[#F7F5EF] py-20 md:py-28"
    >
      <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-[#3155F5]/[0.07] blur-[110px]" />

      <div className="container relative z-10 mx-auto px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#3155F5]">
              <span className="h-px w-8 bg-[#3155F5]" />
              {language === "el" ? "AI & ΑΥΤΟΜΑΤΙΣΜΟΙ" : "AI & AUTOMATION"}
            </p>

            <h2 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-[#171717] md:text-6xl">
              {language === "el" ? (
                <>
                  Λιγότερη χειρωνακτική δουλειά.
                  <span className="text-[#3155F5]"> Περισσότερη εξέλιξη.</span>
                </>
              ) : (
                <>
                  Less manual work.
                  <span className="text-[#3155F5]"> More momentum.</span>
                </>
              )}
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="max-w-xl text-base leading-8 text-[#171717]/60 md:text-lg"
          >
            {language === "el"
              ? "Σχεδιάζουμε πρακτικές λύσεις τεχνητής νοημοσύνης και αυτοματισμού που προσαρμόζονται στις πραγματικές ανάγκες της επιχείρησής σας."
              : "We design practical AI and automation solutions tailored to the real needs of your business."}
          </motion.p>
        </div>

        <div className="mt-16 grid gap-px border border-[#171717]/10 bg-[#171717]/10 sm:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative min-h-[230px] bg-[#F7F5EF] p-7 transition-colors duration-300 hover:bg-white md:p-10"
              >
                <div className="mb-10 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#3155F5]/[0.09] text-[#3155F5] transition-colors duration-300 group-hover:bg-[#3155F5] group-hover:text-white">
                    <Icon size={22} strokeWidth={1.6} />
                  </div>

                  <span className="text-xs font-medium tracking-widest text-[#171717]/30">
                    / {service.number}
                  </span>
                </div>

                <h3 className="mb-3 text-xl font-bold tracking-tight text-[#171717] md:text-2xl">
                  {service.title}
                </h3>

                <p className="max-w-md text-sm leading-7 text-[#171717]/55">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col justify-between gap-6 border-t border-[#171717]/15 pt-8 md:flex-row md:items-center">
          <div>
            <p className="mb-2 text-xl font-semibold tracking-tight text-[#171717] md:text-2xl">
              {language === "el"
                ? "Δεν χρειάζεστε περισσότερα εργαλεία. Χρειάζεστε τη σωστή λύση."
                : "You don't need more tools. You need the right solution."}
            </p>
            <p className="text-sm text-[#171717]/50">
              {language === "el"
                ? "Ας συζητήσουμε τι μπορεί πραγματικά να αυτοματοποιηθεί."
                : "Let's discuss what can genuinely be automated."}
            </p>
          </div>

          <a
            href={getLanguageRoute("contact", language)}
            className="inline-flex shrink-0 items-center justify-center gap-3 bg-[#3155F5] px-7 py-4 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#2444D8]"
          >
            {language === "el" ? "Συζητήστε μαζί μας" : "Talk to our team"}
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
