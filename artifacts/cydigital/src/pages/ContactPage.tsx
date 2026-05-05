import { Header } from "@/components/Header";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

export default function ContactPage() {
  useSEO({
    title: "Επικοινωνία | CYDigital Κύπρος",
    description: "Επικοινωνήστε με την CYDigital για να συζητήσουμε τις ψηφιακές ανάγκες της επιχείρησής σας. Δωρεάν αρχική αξιολόγηση χωρίς δέσμευση.",
    path: "/epikoinonia",
  });

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Hero */}
        <section className="pt-[88px] pb-10 bg-black text-center">
          <div className="container mx-auto px-4 md:px-6 pt-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Επικοινωνία
            </h1>
            <div className="w-32 h-px mx-auto bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-4" />
            <p className="text-white/60 max-w-xl mx-auto font-display italic text-lg">
              Συμπληρώστε τη φόρμα και θα επικοινωνήσουμε εντός 24 ωρών
            </p>
          </div>
        </section>

        <Contact showHeading={false} />
      </main>
      <Footer />
    </div>
  );
}
