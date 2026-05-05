import { Header } from "@/components/Header";
import { Portfolio } from "@/components/Portfolio";
import { Footer } from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

export default function PortfolioPage() {
  useSEO({
    title: "Portfolio | CYDigital - Δείγματα Δουλειάς Κύπρος",
    description: "Δείτε τα δείγματα δουλειάς της CYDigital. Ιστοσελίδες, branding, social media και digital campaigns για επιχειρήσεις στην Κύπρο.",
    path: "/portfolio",
  });

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Hero */}
        <section className="pt-[88px] pb-10 bg-black text-center">
          <div className="container mx-auto px-4 md:px-6 pt-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Δείγματα Δουλειάς
            </h1>
            <div className="w-32 h-px mx-auto bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-4" />
            <p className="text-white/60 max-w-xl mx-auto font-display italic text-lg">
              Πραγματικά projects για πραγματικές επιχειρήσεις στην Κύπρο
            </p>
          </div>
        </section>

        <Portfolio showHeading={false} />

        {/* CTA */}
        <section className="py-14 bg-[#080808] text-center border-t border-white/5">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
              Έτοιμοι για το επόμενο project;
            </h2>
            <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-6" />
            <p className="text-white/60 mb-8 font-display italic">
              Επικοινωνήστε μαζί μας για δωρεάν αξιολόγηση χωρίς καμία δέσμευση.
            </p>
            <a
              href="/epikoinonia"
              className="inline-block bg-[#D4AF37] text-black font-semibold uppercase tracking-widest text-xs px-10 py-4 hover:bg-[#D4AF37]/90 transition-all duration-300 hover:shadow-[0_0_24px_rgba(212,175,55,0.3)]"
            >
              Ζητήστε Προσφορά
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
