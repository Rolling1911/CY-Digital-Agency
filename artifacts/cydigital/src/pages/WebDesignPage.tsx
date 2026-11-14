import { MonitorSmartphone } from "lucide-react";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";

export default function WebDesignPage() {
  return (
    <ServiceDetailPage
      icon={MonitorSmartphone}
      path="/ypiresies/kataskevi-istoselidas"
      greek={{
        title: "Κατασκευή Ιστοσελίδας στην Κύπρο",
        subtitle: "Custom websites που μετατρέπουν επισκέπτες σε πελάτες",
        heading: "Ιστοσελίδες που φέρνουν αποτελέσματα",
        paragraphs: [
          "Σχεδιάζουμε γρήγορες, επαγγελματικές ιστοσελίδες που μετατρέπουν επισκέπτες σε πελάτες. Κάθε project είναι custom-designed, πλήρως responsive και βελτιστοποιημένο για SEO.",
          "Δεν φτιάχνουμε απλά όμορφες ιστοσελίδες. Φτιάχνουμε ψηφιακά εργαλεία που υποστηρίζουν την ανάπτυξη της επιχείρησής σας.",
        ],
        featuresHeading: "Τι περιλαμβάνει",
        features: [
          "Responsive design για κινητά, tablet & desktop",
          "Βελτιστοποίηση ταχύτητας & Core Web Vitals",
          "Custom UI/UX σχεδιασμός",
          "SEO-friendly δομή & structured data",
          "SSL, ασφάλεια & αξιόπιστο hosting",
          "Google Analytics & conversion tracking",
        ],
        seoTitle: "Κατασκευή Ιστοσελίδας Κύπρος | CYDigital",
        seoDescription: "Επαγγελματική κατασκευή ιστοσελίδων στην Κύπρο. Custom design, responsive ανάπτυξη, ταχύτητα και SEO για να μετατρέπετε επισκέπτες σε πελάτες.",
      }}
      english={{
        title: "Website Design & Development in Cyprus",
        subtitle: "Custom websites that turn visitors into customers",
        heading: "Websites built to deliver results",
        paragraphs: [
          "We design fast, professional websites that turn visitors into customers. Every project is custom-designed, fully responsive and optimised for search engines.",
          "We don't just build attractive websites. We create digital tools that support your business growth.",
        ],
        featuresHeading: "What's included",
        features: [
          "Responsive design for mobile, tablet and desktop",
          "Speed optimisation and Core Web Vitals",
          "Custom UI/UX design",
          "SEO-friendly structure and structured data",
          "SSL, security and reliable hosting",
          "Google Analytics and conversion tracking",
        ],
        seoTitle: "Website Design & Development Cyprus | CYDigital",
        seoDescription: "Professional website design and development in Cyprus. Custom design, responsive development, speed optimisation and SEO to turn visitors into customers.",
      }}
      relatedServices={[
        { href: "/ypiresies/social-media", el: "Social Media Management", en: "Social Media Management" },
        { href: "/ypiresies/grafistika", el: "Γραφιστικά & Branding", en: "Graphic Design & Branding" },
        { href: "/ypiresies/dimioyrgia-periekhomenou", el: "Δημιουργία Περιεχομένου", en: "Content Creation" },
      ]}
    />
  );
}
