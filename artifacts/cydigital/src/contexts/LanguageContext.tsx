import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

export const translations = {
  nav_home: "Αρχική", nav_services: "Υπηρεσίες", nav_packages: "Πακέτα", nav_why_us: "Γιατί Εμάς", nav_contact: "Επικοινωνία",
  nav_cta: "Ζητήστε Προσφορά",
  hero_label: "Cyprus Digital Agency",
  hero_headline: "Χτίζουμε ψηφιακές εμπειρίες που φέρνουν",
  hero_accent: "ΑΠΟΤΕΛΕΣΜΑΤΑ",
  hero_subtitle: "Premium ιστοσελίδες, branding και digital στρατηγική για επιχειρήσεις που θέλουν να ξεχωρίσουν.",
  hero_btn_primary: "Κλείστε μια Συνάντηση",
  trust_years: "Χρόνια Εμπειρίας", trust_dedication: "Αφοσίωση στον Πελάτη", trust_communication: "Γρήγορη Επικοινωνία",
  services_heading: "Οι Υπηρεσίες μας",
  service_web_title: "Δημιουργία Ιστοσελίδας", service_web_desc: "Σχεδιάζουμε γρήγορες, επαγγελματικές ιστοσελίδες που μετατρέπουν επισκέπτες σε πελάτες.",
  service_social_title: "Social Media Management", service_social_desc: "Δημιουργούμε περιεχόμενο που αυξάνει το engagement και χτίζει κοινότητα.",
  service_graphics_title: "Γραφιστικά & Δημιουργικά", service_graphics_desc: "Οπτικό υλικό υψηλής αισθητικής για κάθε ψηφιακό κανάλι.",
  service_logo_title: "Logo & Branding", service_logo_desc: "Χτίζουμε ταυτότητα μάρκας που μένει αξέχαστη.",
  service_google_title: "Google Business Profile", service_google_desc: "Κάνουμε την επιχείρησή σας ορατή στις τοπικές αναζητήσεις.",
  service_ads_title: "Διαφημίσεις Facebook & Instagram", service_ads_desc: "Στοχευμένες καμπάνιες που φέρνουν πραγματικά αποτελέσματα.",
  how_heading_1: "Πώς μπορούμε να", how_heading_2: "σας βοηθήσουμε",
  how_step1_title: "Στρατηγική", how_step1_desc: "Αναλύουμε τους στόχους σας και χτίζουμε το σωστό πλάνο ανάπτυξης.",
  how_step2_title: "Σχεδιασμός", how_step2_desc: "Δημιουργούμε οπτική ταυτότητα και εμπειρίες που μένουν αξέχαστες.",
  how_step3_title: "Ανάπτυξη", how_step3_desc: "Υλοποιούμε τη λύση με ακρίβεια, ταχύτητα και προσοχή στη λεπτομέρεια.",
  how_step4_title: "Launch & Scale", how_step4_desc: "Ξεκινάμε, παρακολουθούμε και αναπτύσσουμε τα αποτελέσματά σας.",
  packages_heading: "Στρατηγικές λύσεις για την ανάπτυξή σας",
  packages_customized: "Προσαρμοσμένο στις ανάγκες σας",
  packages_footer_note: "Τα πακέτα προσαρμόζονται ανάλογα με τις ανάγκες της επιχείρησής σας.",
  pkg_launch_tagline: "Ιδανικό για επιχειρήσεις που ξεκινούν την ψηφιακή τους παρουσία.",
  pkg_growth_tagline: "Για επιχειρήσεις που είναι έτοιμες να αναπτυχθούν και να αποκτήσουν leads.",
  pkg_scale_tagline: "Για brands που θέλουν πλήρη ψηφιακή κυριαρχία στην αγορά τους.",
  pkg_cta_quote: "Ζητήστε Προσφορά", pkg_cta_talk: "Μιλήστε Μαζί Μας", pkg_cta_meeting: "Κλείστε Συνάντηση",
  content_heading: "Δημιουργία Περιεχομένου",
  content_subtitle: "Επαγγελματικές φωτογραφίες & βίντεο που αναδεικνύουν το brand σας",
  content_samples: "Δείγματα Δουλειάς", content_cta_question: "Θέλετε περιεχόμενο που ξεχωρίζει;",
  content_cta_btn: "Ζητήστε Προσφορά",
  content_f1_title: "Φωτογράφιση χώρου & προϊόντων", content_f1_desc: "Επαγγελματικές λήψεις που αναδεικνύουν την ταυτότητα της επιχείρησής σας.",
  content_f2_title: "Βίντεο για social media & διαφημίσεις", content_f2_desc: "Cinematic βίντεο σχεδιασμένα για engagement, αναγνωρισιμότητα και αύξηση πωλήσεων.",
  content_f3_title: "Reels & short-form περιεχόμενο", content_f3_desc: "Δυναμικά short videos για Instagram, TikTok και Facebook που αυξάνουν το reach.",
  content_f4_title: "Brand storytelling videos", content_f4_desc: "Αφηγηματικά βίντεο που χτίζουν εμπιστοσύνη και ενισχύουν το brand image σας.",
  content_p1_title: "Φωτογράφιση Προϊόντων", content_p3_title: "Προϊόντα & Branding",
  whyus_label: "Γιατί CYDigital", whyus_heading_1: "Γιατί να επιλέξετε την",
  whyus_paragraph: "Συνδυάζουμε στρατηγική, αισθητική και τεχνολογία για να δημιουργούμε digital παρουσίες που ξεχωρίζουν και φέρνουν πραγματικά αποτελέσματα.",
  whyus_cta: "Μιλήστε μαζί μας",
  whyus_r1_title: "Strategy-First Προσέγγιση", whyus_r1_desc: "Κάθε απόφαση βασίζεται σε στόχο, δεδομένα και ανάπτυξη.",
  whyus_r2_title: "Premium Εκτέλεση", whyus_r2_desc: "Custom λύσεις με προσεγμένο design και καθαρή εμπειρία χρήστη.",
  whyus_r3_title: "Results-Driven Νοοτροπία", whyus_r3_desc: "Δεν σχεδιάζουμε απλά όμορφα. Σχεδιάζουμε για αποτέλεσμα.",
  whyus_r4_title: "Κλιμακωτή Ανάπτυξη", whyus_r4_desc: "Συστήματα που μεγαλώνουν μαζί με την επιχείρησή σας.",
  whyus_r5_title: "Τοπική Γνώση", whyus_r5_desc: "Κατανοούμε την αγορά, την κουλτούρα και τις ανάγκες της Κύπρου.",
  whyus_r6_title: "Αποκλειστική Εξυπηρέτηση", whyus_r6_desc: "Δουλεύουμε με περιορισμένο αριθμό πελατών για καλύτερη ποιότητα.",
  testimonials_heading: "Τι Λένε οι Πελάτες μας",
  t1_quote: "Η CYDigital αναβάθμισε πλήρως την online παρουσία μας. Το website είναι γρήγορο, premium και μας φέρνει περισσότερες κρατήσεις.",
  t1_role: "Ιδιοκτήτης Εστιατορίου", t1_result: "+60% κρατήσεις",
  t2_quote: "Το branding και το περιεχόμενο μας πλέον δείχνουν επαγγελματικά. Οι πελάτες καταλαβαίνουν αμέσως την αξία μας.",
  t2_role: "Beauty Salon Owner", t2_result: "Premium brand image",
  t3_quote: "Οι καμπάνιες μας έγιναν πιο στοχευμένες και αποδοτικές. Είδαμε καλύτερα leads και χαμηλότερο κόστος διαφήμισης.",
  t3_role: "Γυμναστήριο FitLife", t3_result: "2x καλύτερα leads",
  cta_label: "Ξεκινήστε Σήμερα", cta_heading_1: "Ας χτίσουμε την επόμενη", cta_heading_2: "ψηφιακή σας επιτυχία",
  cta_subtitle: "Premium ιστοσελίδες, branding και digital στρατηγική για επιχειρήσεις που θέλουν να ξεχωρίσουν.",
  cta_btn_primary: "Κλείστε Συνάντηση", cta_btn_secondary: "Δείτε τις Λύσεις μας",
  contact_heading: "Επικοινωνία", contact_subheading_1: "Ας μιλήσουμε για", contact_subheading_2: "την επιχείρησή σας",
  contact_desc: "Συμπληρώστε τη φόρμα και θα επικοινωνήσουμε μαζί σας εντός 24 ωρών για να συζητήσουμε τις ανάγκες σας.",
  contact_trust1: "Δωρεάν αρχική αξιολόγηση", contact_trust2: "Προτάσεις προσαρμοσμένες στις ανάγκες σας", contact_trust3: "Καμία δέσμευση",
  contact_label_name: "Το όνομά σας", contact_label_company: "Επιχείρηση",
  contact_label_phone: "Τηλέφωνο επικοινωνίας", contact_label_email: "Email",
  contact_label_city: "Περιοχή", contact_label_service: "Υπηρεσία που σας ενδιαφέρει",
  contact_label_message: "Μήνυμα (Προαιρετικό)",
  contact_placeholder_name: "π.χ. Γιάννης Παπαδόπουλος", contact_placeholder_company: "π.χ. Το Καφέ μου",
  contact_placeholder_phone: "π.χ. 99 123456", contact_placeholder_city: "π.χ. Λευκωσία",
  contact_select_placeholder: "Επιλέξτε...",
  contact_service_web: "Δημιουργία Ιστοσελίδας", contact_service_social: "Social Media Management",
  contact_service_graphics: "Γραφιστικά & Δημιουργικά", contact_service_branding: "Logo & Branding",
  contact_service_google: "Google Business Profile", contact_service_ads: "Διαφημίσεις Facebook & Instagram",
  contact_service_content: "Δημιουργία Περιεχομένου",
  contact_message_placeholder: "Πείτε μας λίγα λόγια για τις ανάγκες σας...",
  contact_submit_loading: "Αποστολή...", contact_submit: "Ζητήστε Προσφορά",
  contact_privacy: "Τα στοιχεία σας παραμένουν απολύτως εμπιστευτικά.",
  contact_error: "Κάτι πήγε στραβά. Δοκιμάστε ξανά ή επικοινωνήστε μαζί μας απευθείας.",
  contact_success_title: "Ευχαριστούμε!",
  contact_success_desc: "Θα επικοινωνήσουμε σύντομα μαζί σας για να συζητήσουμε τις ανάγκες της επιχείρησής σας.",
  contact_send_new: "Αποστολή Νέου Μηνύματος",
  val_name: "Το όνομα πρέπει να έχει τουλάχιστον 2 χαρακτήρες", val_company: "Το όνομα επιχείρησης είναι υποχρεωτικό",
  val_phone: "Μη έγκυρος αριθμός τηλεφώνου", val_email: "Μη έγκυρο email",
  val_city: "Η περιοχή είναι υποχρεωτική", val_service: "Επιλέξτε υπηρεσία",
  footer_menu: "Μενού", footer_contact: "Επικοινωνία", footer_follow: "Ακολουθήστε Μας",
  footer_desc: "Premium Digital Agency για επιχειρήσεις που θέλουν να ξεχωρίζουν.",
  footer_response_title: "Απαντάμε Συνήθως", footer_response_desc: "Μέσα σε 24 ώρες",
  footer_rights: "Με επιφύλαξη παντός δικαιώματος.", footer_terms: "Όροι Χρήσης", footer_privacy_link: "Πολιτική Απορρήτου",
  floating_cta: "Ζητήστε Προσφορά",
};

const englishTranslations: Partial<typeof translations> = {
  nav_home: "Home", nav_services: "Services", nav_packages: "Packages", nav_why_us: "Why Us", nav_contact: "Contact",
  nav_cta: "Request a Quote",
  hero_label: "Cyprus Digital Agency",
  hero_headline: "We build digital experiences that deliver",
  hero_accent: "RESULTS",
  hero_subtitle: "Premium websites, branding and digital strategy for businesses that want to stand out.",
  hero_btn_primary: "Book a Meeting",
  trust_years: "Years of Experience", trust_dedication: "Client Commitment", trust_communication: "Fast Communication",
  services_heading: "Our Services",
  service_web_title: "Website Development", service_web_desc: "We design fast, professional websites that turn visitors into customers.",
  service_social_title: "Social Media Management", service_social_desc: "We create content that increases engagement and builds communities.",
  service_graphics_title: "Graphic Design & Creative", service_graphics_desc: "High-quality visual assets for every digital channel.",
  service_logo_title: "Logo & Branding", service_logo_desc: "We build memorable brand identities.",
  service_google_title: "Google Business Profile", service_google_desc: "We make your business visible in local searches.",
  service_ads_title: "Facebook & Instagram Ads", service_ads_desc: "Targeted campaigns designed to deliver measurable results.",
  how_heading_1: "How we can", how_heading_2: "help you",
  how_step1_title: "Strategy", how_step1_desc: "We analyse your goals and build the right growth plan.",
  how_step2_title: "Design", how_step2_desc: "We create visual identities and experiences that leave a lasting impression.",
  how_step3_title: "Development", how_step3_desc: "We deliver solutions with precision, speed and attention to detail.",
  how_step4_title: "Launch & Scale", how_step4_desc: "We launch, monitor and grow your results.",
  packages_heading: "Strategic solutions for your growth",
  packages_customized: "Tailored to your needs",
  packages_footer_note: "Packages are tailored to your business needs.",
  pkg_launch_tagline: "Ideal for businesses building their digital presence.",
  pkg_growth_tagline: "For businesses ready to grow and generate leads.",
  pkg_scale_tagline: "For brands seeking a stronger position in their market.",
  pkg_cta_quote: "Request a Quote", pkg_cta_talk: "Talk to Us", pkg_cta_meeting: "Book a Meeting",
  content_heading: "Content Creation",
  content_subtitle: "Professional photography and video that bring your brand to life",
  content_samples: "Selected Work", content_cta_question: "Want content that stands out?",
  content_cta_btn: "Request a Quote",
  content_f1_title: "Location & Product Photography", content_f1_desc: "Professional photography that showcases your business identity.",
  content_f2_title: "Social Media & Advertising Videos", content_f2_desc: "Cinematic videos designed for engagement, brand awareness and sales.",
  content_f3_title: "Reels & Short-Form Content", content_f3_desc: "Dynamic short videos for Instagram, TikTok and Facebook.",
  content_f4_title: "Brand Storytelling Videos", content_f4_desc: "Story-led videos that build trust and strengthen your brand image.",
  content_p1_title: "Product Photography", content_p3_title: "Products & Branding",
  whyus_label: "Why CYDigital", whyus_heading_1: "Why choose",
  whyus_paragraph: "We combine strategy, design and technology to create digital experiences that help businesses stand out.",
  whyus_cta: "Talk to Us",
  whyus_r1_title: "Strategy-First Approach", whyus_r1_desc: "Every decision is guided by goals, data and growth.",
  whyus_r2_title: "Premium Execution", whyus_r2_desc: "Custom solutions with thoughtful design and a clear user experience.",
  whyus_r3_title: "Results-Driven Mindset", whyus_r3_desc: "We don't just design for looks. We design with purpose.",
  whyus_r4_title: "Scalable Growth", whyus_r4_desc: "Systems that grow alongside your business.",
  whyus_r5_title: "Local Knowledge", whyus_r5_desc: "We understand the Cyprus market, culture and business needs.",
  whyus_r6_title: "Dedicated Service", whyus_r6_desc: "We work with a limited number of clients to maintain quality.",
  testimonials_heading: "What Our Clients Say",
  t1_quote: "CYDigital transformed our online presence. The website is fast, polished and brings us more bookings.",
  t1_role: "Restaurant Owner", t1_result: "Booking increase claim — verify before publishing",
  t2_quote: "Our branding and content now look professional. Customers immediately understand our value.",
  t2_role: "Beauty Salon Owner", t2_result: "Premium brand image",
  t3_quote: "Our campaigns became more targeted and efficient. We saw better leads and lower advertising costs.",
  t3_role: "FitLife Gym", t3_result: "Lead improvement claim — verify before publishing",
  cta_label: "Start Today", cta_heading_1: "Let's build your next", cta_heading_2: "digital success",
  cta_subtitle: "Premium websites, branding and digital strategy for businesses that want to stand out.",
  cta_btn_primary: "Book a Meeting", cta_btn_secondary: "Explore Our Solutions",
  contact_heading: "Contact", contact_subheading_1: "Let's talk about", contact_subheading_2: "your business",
  contact_desc: "Complete the form and we'll contact you within 24 hours to discuss your needs.",
  contact_trust1: "Free initial consultation", contact_trust2: "Recommendations tailored to your needs", contact_trust3: "No obligation",
  contact_label_name: "Your Name", contact_label_company: "Business",
  contact_label_phone: "Phone Number", contact_label_email: "Email",
  contact_label_city: "Location", contact_label_service: "Service You're Interested In",
  contact_label_message: "Message (Optional)",
  contact_placeholder_name: "e.g. John Smith", contact_placeholder_company: "e.g. My Cafe",
  contact_placeholder_phone: "e.g. 99 123456", contact_placeholder_city: "e.g. Nicosia",
  contact_select_placeholder: "Select...",
  contact_service_web: "Website Development", contact_service_social: "Social Media Management",
  contact_service_graphics: "Graphic Design & Creative", contact_service_branding: "Logo & Branding",
  contact_service_google: "Google Business Profile", contact_service_ads: "Facebook & Instagram Ads",
  contact_service_content: "Content Creation",
  contact_message_placeholder: "Tell us a little about what you need...",
  contact_submit_loading: "Sending...", contact_submit: "Request a Quote",
  contact_privacy: "Your details will remain strictly confidential.",
  contact_error: "Something went wrong. Please try again or contact us directly.",
  contact_success_title: "Thank You!",
  contact_success_desc: "We'll be in touch soon to discuss your business needs.",
  contact_send_new: "Send Another Message",
  val_name: "Name must contain at least 2 characters", val_company: "Business name is required",
  val_phone: "Invalid phone number", val_email: "Invalid email address",
  val_city: "Location is required", val_service: "Please select a service",
  footer_menu: "Menu", footer_contact: "Contact", footer_follow: "Follow Us",
  footer_desc: "A premium digital agency for businesses that want to stand out.",
  footer_response_title: "Typical Response Time", footer_response_desc: "Within 24 hours",
  footer_rights: "All rights reserved.", footer_terms: "Terms of Use", footer_privacy_link: "Privacy Policy",
  floating_cta: "Request a Quote",
};

type Language = "el" | "en";
type TranslationSet = typeof translations;

interface LanguageContextType {
  t: TranslationSet;
  language: Language;
  setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  t: translations,
  language: "el",
  setLanguage: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === "undefined") return "el";
    return window.localStorage.getItem("cydigital-language") === "en" ? "en" : "el";
  });

  function setLanguage(nextLanguage: Language) {
    setLanguageState(nextLanguage);
    window.localStorage.setItem("cydigital-language", nextLanguage);
    document.documentElement.lang = nextLanguage;
  }

  const t = (language === "en"
    ? { ...translations, ...englishTranslations }
    : translations) as TranslationSet;

  return (
    <LanguageContext.Provider value={{ t, language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
