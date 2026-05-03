import { createContext, useContext, ReactNode } from "react";

export const translations = {
  nav_home: "Αρχική", nav_services: "Υπηρεσίες", nav_packages: "Πακέτα",
  nav_portfolio: "Portfolio", nav_why_us: "Γιατί Εμάς", nav_contact: "Επικοινωνία",
  nav_cta: "Ζητήστε Προσφορά",
  hero_label: "Cyprus Digital Agency",
  hero_headline: "Χτίζουμε ψηφιακές εμπειρίες που φέρνουν",
  hero_accent: "ΑΠΟΤΕΛΕΣΜΑΤΑ",
  hero_subtitle: "Premium ιστοσελίδες, branding και digital στρατηγική για επιχειρήσεις που θέλουν να ξεχωρίσουν.",
  hero_btn_primary: "Κλείστε μια Συνάντηση", hero_btn_secondary: "Δείτε τη Δουλειά μας",
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
  portfolio_heading: "Δείγματα δουλειάς",
  portfolio_item1_title: "Ιστοσελίδα Εστιατορίου", portfolio_item1_result: "+45% Αύξηση Πωλήσεων",
  portfolio_item3_result: "Brand Identity από Μηδέν",
  portfolio_item4_title: "Καμπάνια Διαφημίσεων Gym", portfolio_item4_result: "3x ROAS σε 30 Ημέρες",
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

interface LanguageContextType {
  t: typeof translations;
}

const LanguageContext = createContext<LanguageContextType>({ t: translations });

export function LanguageProvider({ children }: { children: ReactNode }) {
  return (
    <LanguageContext.Provider value={{ t: translations }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
