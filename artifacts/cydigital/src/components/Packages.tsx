import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Packages() {
  const { language } = useLanguage();
  const isGreek = language === "el";

  const packages = [
    {
      id: "starter",
      name: isGreek ? "Ιστοσελίδα Εκκίνησης" : "Starter Website",
      price: "€390",
      description: isGreek
        ? "Όλες οι βασικές πληροφορίες της επιχείρησής σας σε μία σελίδα, με μοντέρνο σχεδιασμό και φόρμα επικοινωνίας. Ένας απλός και αποτελεσματικός τρόπος για να αποκτήσετε επαγγελματική παρουσία στο διαδίκτυο."
        : "All your essential business information on a single page, with a modern design and a contact form. A simple and effective way to establish your online presence.",
      features: isGreek
        ? [
            "Μία σελίδα με όλες τις βασικές ενότητες",
            "Προσαρμοσμένος σχεδιασμός για όλες τις συσκευές",
            "Βασική βελτιστοποίηση SEO",
          ]
        : [
            "One page with all the key sections",
            "Responsive design across devices",
            "Basic SEO",
          ],
    },
    {
      id: "professional",
      name: isGreek ? "Επαγγελματική Ιστοσελίδα" : "Professional Website",
      price: "€690",
      description: isGreek
        ? "Για επαγγελματίες που θέλουν να παρουσιάσουν το βιογραφικό, την εμπειρία, τις υπηρεσίες και τα στοιχεία επικοινωνίας τους μέσα από μια προσεγμένη και επαγγελματική ιστοσελίδα."
        : "For professionals who want to showcase their bio, experience, services, and contact information through a polished and professional website.",
      features: isGreek
        ? [
            "Έως 5 σελίδες",
            "Σελίδες βιογραφικού, υπηρεσιών και επικοινωνίας",
            "Δημιουργία και ρύθμιση Google Business Profile",
            "Βελτιστοποίηση SEO σε κάθε σελίδα",
          ]
        : [
            "Up to 5 pages",
            "Bio, services, and contact pages",
            "Google Business Profile setup",
            "SEO on every page",
          ],
    },
    {
      id: "business",
      name: isGreek ? "Εταιρική Ιστοσελίδα" : "Business Website",
      price: "€1,090",
      description: isGreek
        ? "Για επιχειρήσεις που χρειάζονται μια ολοκληρωμένη διαδικτυακή παρουσία, με οργανωμένη παρουσίαση της εταιρείας, της ομάδας, της τοποθεσίας και των υπηρεσιών τους."
        : "For businesses that need a complete online presence to present their company, team, location, and services in a clear and organised way.",
      features: isGreek
        ? [
            "Έως 10 σελίδες περιεχομένου",
            "Ξεχωριστές σελίδες για την εταιρεία, την ομάδα και τις υπηρεσίες",
            "Ενότητα νέων ή ιστολογίου για τακτικές ενημερώσεις",
            "Φωτογραφικές συλλογές του χώρου και των έργων σας",
          ]
        : [
            "Up to 10 pages of content",
            "Dedicated pages for your company, team, and services",
            "News or blog section for regular updates",
            "Photo galleries of your space and projects",
          ],
    },
    {
      id: "ecommerce",
      name: isGreek ? "Ηλεκτρονικό Κατάστημα" : "E-commerce Website",
      price: "€1,090",
      description: isGreek
        ? "Για επιχειρήσεις που θέλουν να ξεκινήσουν τις ηλεκτρονικές πωλήσεις με ένα σύγχρονο και εύχρηστο ηλεκτρονικό κατάστημα, που διευκολύνει την περιήγηση, τις αγορές και τη διαχείριση παραγγελιών."
        : "For businesses ready to sell online with a modern, user-friendly e-commerce store that makes browsing, purchasing, and managing orders simple.",
      features: isGreek
        ? [
            "Κατάλογος προϊόντων οργανωμένος ανά κατηγορία",
            "Πληρωμές με κάρτα και αντικαταβολή",
            "Διαχείριση παραγγελιών και αποστολών",
            "Εύκολη διαχείριση προϊόντων μέσα από τον πίνακα ελέγχου",
          ]
        : [
            "Product catalogue organised by category",
            "Credit card payments and cash on delivery",
            "Order and shipping management",
            "Easy product management through your dashboard",
          ],
    },
    {
      id: "custom",
      name: isGreek ? "Εξατομικευμένη Ιστοσελίδα" : "Custom Website",
      price: null,
      description: isGreek
        ? "Για έργα που απαιτούν ξεχωριστό σχεδιασμό, προηγμένες λειτουργίες και εξατομικευμένες ψηφιακές λύσεις. Συνεργαζόμαστε στενά μαζί σας για να δημιουργήσουμε μια ιστοσελίδα προσαρμοσμένη στους στόχους και τις ανάγκες σας."
        : "For projects that require a distinctive design, advanced functionality, and tailored digital solutions. We work closely with you to create a website built around your specific goals and requirements.",
      features: isGreek
        ? [
            "Σχεδιασμός από το μηδέν",
            "Εξειδικευμένες λειτουργίες, όπως online κρατήσεις ή δεύτερη γλώσσα",
            "Διαδραστικά στοιχεία",
            "Προσωπική συνεργασία σε κάθε στάδιο του έργου",
          ]
        : [
            "Designed from scratch",
            "Custom features, such as online booking or a second language",
            "Interactive elements",
            "One-on-one collaboration at every stage",
          ],
    },
  ];

  const [selectedId, setSelectedId] = useState("starter");
  const selectedPackage =
    packages.find((pkg) => pkg.id === selectedId) ?? packages[0];

  const selectPackageAndContact = () => {
    window.dispatchEvent(
      new CustomEvent("cy-digital-package-selected", {
        detail: {
          name: selectedPackage.name,
          price: selectedPackage.price
            ? `${isGreek ? "Από" : "From"} ${selectedPackage.price}`
            : isGreek
              ? "Κατόπιν επικοινωνίας"
              : "Contact us",
        },
      }),
    );

    document.querySelector("#contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section id="packages" className="bg-[#F7F5EF] py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12 xl:px-16">
        <div className="mb-12 text-center md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-5 flex items-center justify-center gap-3"
          >
            <span className="h-[2px] w-7 bg-[#FF6633]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3155F5]">
              {isGreek ? "ΣΥΝΕΡΓΑΣΙΑ" : "WORK WITH US"}
            </span>
            <span className="h-[2px] w-7 bg-[#FF6633]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-[clamp(2.4rem,5vw,4.7rem)] font-extrabold leading-[1.04] tracking-[-0.07em] text-[#171717]"
          >
            {isGreek ? "Πακέτα Ιστοσελίδων" : "Website Packages"}
            <span className="text-[#3155F5]">.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mx-auto mt-5 max-w-[560px] text-[14px] leading-[1.9] text-[#171717]/55"
          >
            {isGreek
              ? "Επιλέξτε το πακέτο που ανταποκρίνεται στις ανάγκες της επιχείρησής σας."
              : "Choose the website package that matches your business needs."}
          </motion.p>
        </div>

        <div className="mb-7 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
          {packages.map((pkg, index) => {
            const isSelected = selectedId === pkg.id;

            return (
              <button
                key={pkg.id}
                type="button"
                onClick={() => setSelectedId(pkg.id)}
                aria-pressed={isSelected}
                className={`flex min-h-[104px] flex-col justify-between border p-4 text-left transition-all duration-300 md:p-5 ${
                  isSelected
                    ? "border-[#3155F5] bg-[#171717] text-white shadow-[0_12px_30px_rgba(49,85,245,0.12)]"
                    : "border-[#171717]/10 bg-white text-[#171717] hover:border-[#3155F5]"
                }`}
              >
                <span
                  className={`text-[9px] font-bold uppercase tracking-[0.16em] ${
                    isSelected ? "text-[#8FA2FF]" : "text-[#3155F5]"
                  }`}
                >
                  {isGreek ? "ΠΑΚΕΤΟ" : "PACKAGE"} 0{index + 1}
                </span>
                <span className="mt-4 text-[14px] font-bold leading-snug tracking-[-0.02em] md:text-[15px]">
                  {pkg.name}
                </span>
                <span
                  className={`mt-2 h-[2px] w-8 ${
                    isSelected ? "bg-[#FF6633]" : "bg-[#3155F5]"
                  }`}
                />
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.article
            key={selectedPackage.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="grid gap-9 border border-[#171717]/10 bg-white p-7 md:p-10 lg:grid-cols-[1fr_0.9fr] lg:gap-14 lg:p-14"
          >
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#3155F5]">
                {isGreek ? "Η ΕΠΙΛΟΓΗ ΣΑΣ" : "YOUR SELECTED PACKAGE"}
              </span>

              <h3 className="mt-5 text-[clamp(2rem,4vw,3.4rem)] font-extrabold leading-[1.08] tracking-[-0.06em] text-[#171717]">
                {selectedPackage.name}
                <span className="text-[#3155F5]">.</span>
              </h3>

              <p className="mt-5 max-w-[600px] text-[14px] leading-[1.9] text-[#171717]/60">
                {selectedPackage.description}
              </p>

              <div className="mt-8 border-t border-[#171717]/10 pt-7">
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#3155F5]">
                  {isGreek ? "ΕΝΔΕΙΚΤΙΚΗ ΤΙΜΗ" : "STARTING PRICE"}
                </span>

                <div className="mt-2 text-[clamp(2.4rem,5vw,3.6rem)] font-extrabold tracking-[-0.07em] text-[#171717]">
                  {selectedPackage.price
                    ? `${isGreek ? "Από " : "From "}${selectedPackage.price}`
                    : isGreek
                      ? "Κατόπιν επικοινωνίας"
                      : "Contact us"}
                </div>

                {selectedPackage.price && (
                  <p className="mt-2 text-[11px] text-[#171717]/45">
                    {isGreek
                      ? "+ ΦΠΑ, όπου εφαρμόζεται"
                      : "+ VAT, where applicable"}
                  </p>
                )}
              </div>

              <button
                type="button"
                onClick={selectPackageAndContact}
                className="group mt-8 flex w-full max-w-[360px] items-center justify-between gap-3 bg-[#3155F5] px-6 py-5 text-left text-[10px] font-bold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-[#2445DC]"
              >
                <span>
                  {isGreek
                    ? "ΕΠΙΚΟΙΝΩΝΗΣΤΕ ΜΑΖΙ ΜΑΣ"
                    : "GET STARTED"}
                </span>
                <ArrowUpRight
                  size={18}
                  className="shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </button>
            </div>

            <div className="border-t border-[#171717]/10 pt-7 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <h4 className="mb-7 text-[10px] font-bold uppercase tracking-[0.16em] text-[#3155F5]">
                {isGreek ? "ΤΙ ΠΕΡΙΛΑΜΒΑΝΕΤΑΙ" : "WHAT'S INCLUDED"}
              </h4>

              <ul className="flex flex-col gap-5">
                {selectedPackage.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      size={17}
                      strokeWidth={2}
                      className="mt-[2px] shrink-0 text-[#FF6633]"
                    />
                    <span className="text-[13px] leading-[1.7] text-[#171717]/75">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        </AnimatePresence>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-9 text-center text-[11px] leading-[1.8] text-[#171717]/45"
        >
          {isGreek
            ? "Οι τιμές είναι ενδεικτικές τιμές εκκίνησης και δεν περιλαμβάνουν ΦΠΑ, όπου εφαρμόζεται. Η τελική τιμή εξαρτάται από τις απαιτήσεις και το συμφωνημένο εύρος του έργου."
            : "All prices are starting prices and exclude VAT, where applicable. Final pricing depends on project requirements and agreed scope."}
        </motion.p>
      </div>
    </section>
  );
}
