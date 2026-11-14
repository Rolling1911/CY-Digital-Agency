import { Palette } from "lucide-react";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";

export default function GraphicDesignPage() {
  return (
    <ServiceDetailPage
      icon={Palette}
      path="/ypiresies/grafistika"
      greek={{
        title: "Γραφιστικά & Branding στην Κύπρο",
        subtitle: "Οπτική ταυτότητα που αναδεικνύει το brand σας σε κάθε σημείο επαφής",
        heading: "Ταυτότητες που μένουν αξέχαστες",
        paragraphs: [
          "Οπτικό υλικό υψηλής αισθητικής που αναδεικνύει το brand σας σε κάθε ψηφιακό κανάλι. Από logo design έως πλήρη brand guidelines, δημιουργούμε ταυτότητες που μένουν αξέχαστες.",
          "Κάθε design αντικατοπτρίζει την ουσία της επιχείρησής σας και μεταφέρει το σωστό μήνυμα στο σωστό κοινό.",
        ],
        featuresHeading: "Τι περιλαμβάνει",
        features: [
          "Logo & brand identity design",
          "Business cards & εταιρικά έντυπα",
          "Social media templates & visuals",
          "Διαφημιστικά banners & posters",
          "Brand guidelines & style guide",
          "Print & digital υλικά",
        ],
        seoTitle: "Γραφιστικά & Branding Κύπρος | CYDigital",
        seoDescription: "Γραφιστικές υπηρεσίες και branding στην Κύπρο. Δημιουργία λογοτύπου, εταιρική ταυτότητα και ψηφιακό υλικό που ξεχωρίζει.",
      }}
      english={{
        title: "Graphic Design & Branding in Cyprus",
        subtitle: "A visual identity that elevates your brand at every touchpoint",
        heading: "Brand identities people remember",
        paragraphs: [
          "We create high-quality visual assets that elevate your brand across every digital channel. From logo design to complete brand guidelines, we build identities that stand out and stay memorable.",
          "Every design reflects the essence of your business and communicates the right message to the right audience.",
        ],
        featuresHeading: "What's included",
        features: [
          "Logo and brand identity design",
          "Business cards and corporate stationery",
          "Social media templates and visuals",
          "Advertising banners and posters",
          "Brand guidelines and style guide",
          "Print and digital assets",
        ],
        seoTitle: "Graphic Design & Branding Cyprus | CYDigital",
        seoDescription: "Graphic design and branding services in Cyprus. Logo creation, corporate identity and digital creative assets that help your business stand out.",
      }}
      relatedServices={[
        { href: "/ypiresies/kataskevi-istoselidas", el: "Κατασκευή Ιστοσελίδων", en: "Website Design" },
        { href: "/ypiresies/social-media", el: "Social Media Management", en: "Social Media Management" },
        { href: "/ypiresies/dimioyrgia-periekhomenou", el: "Δημιουργία Περιεχομένου", en: "Content Creation" },
      ]}
    />
  );
}
