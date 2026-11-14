import { Share2 } from "lucide-react";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";

export default function SocialMediaPage() {
  return (
    <ServiceDetailPage
      icon={Share2}
      path="/ypiresies/social-media"
      greek={{
        title: "Social Media Management στην Κύπρο",
        subtitle: "Περιεχόμενο που αυξάνει το engagement και χτίζει κοινότητα",
        heading: "Social Media που φέρνουν πελάτες",
        paragraphs: [
          "Δημιουργούμε στρατηγικό περιεχόμενο που αυξάνει το engagement και χτίζει κοινότητα γύρω από το brand σας. Από τη στρατηγική έως τη δημοσίευση, αναλαμβάνουμε τα πάντα.",
          "Κάθε post, reel και story σχεδιάζεται με στόχο την αύξηση της αναγνωρισιμότητας και την προσέλκυση νέων πελατών για την επιχείρησή σας.",
        ],
        featuresHeading: "Τι περιλαμβάνει",
        features: [
          "Μηνιαία content strategy & πλάνο δημοσιεύσεων",
          "Δημιουργία custom γραφιστικών & reels",
          "Διαχείριση Facebook & Instagram",
          "Community management & replies",
          "Αύξηση followers & organic reach",
          "Μηνιαία αναφορά αποτελεσμάτων",
        ],
        seoTitle: "Social Media Management Κύπρος | CYDigital",
        seoDescription: "Social media management στην Κύπρο με στρατηγική περιεχομένου, δημιουργικά posts, reels και διαχείριση κοινότητας για την ανάπτυξη της επιχείρησής σας.",
      }}
      english={{
        title: "Social Media Management in Cyprus",
        subtitle: "Content that increases engagement and builds a community",
        heading: "Social media that helps attract customers",
        paragraphs: [
          "We create strategic content that increases engagement and builds a community around your brand. From planning to publishing, we manage the entire process.",
          "Every post, reel and story is designed to increase brand awareness and attract new customers to your business.",
        ],
        featuresHeading: "What's included",
        features: [
          "Monthly content strategy and publishing calendar",
          "Custom graphics and reels",
          "Facebook and Instagram management",
          "Community management and replies",
          "Audience growth and organic reach",
          "Monthly performance reporting",
        ],
        seoTitle: "Social Media Management Cyprus | CYDigital",
        seoDescription: "Social media management in Cyprus, including content strategy, creative posts, reels and community management to help grow your business.",
      }}
      relatedServices={[
        { href: "/ypiresies/kataskevi-istoselidas", el: "Κατασκευή Ιστοσελίδων", en: "Website Design" },
        { href: "/ypiresies/grafistika", el: "Γραφιστικά & Branding", en: "Graphic Design & Branding" },
        { href: "/ypiresies/dimioyrgia-periekhomenou", el: "Δημιουργία Περιεχομένου", en: "Content Creation" },
      ]}
    />
  );
}
