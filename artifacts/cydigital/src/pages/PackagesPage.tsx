import { Header } from "@/components/Header";
import { Packages } from "@/components/Packages";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

export default function PackagesPage() {
  useSEO({
    title: "Πακέτα & Τιμές | CYDigital Κύπρος",
    description: "Δείτε τα πακέτα ψηφιακών υπηρεσιών της CYDigital. Launch, Growth και Scale — βρείτε τη λύση που ταιριάζει στην επιχείρησή σας στην Κύπρο.",
    path: "/paketa",
  });

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Hero */}
        <section className="pt-[88px] pb-10 bg-black text-center">
          <div className="container mx-auto px-4 md:px-6 pt-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Πακέτα & Τιμές
            </h1>
            <div className="w-32 h-px mx-auto bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-4" />
            <p className="text-white/60 max-w-xl mx-auto font-display italic text-lg">
              Στρατηγικές λύσεις προσαρμοσμένες στις ανάγκες της επιχείρησής σας
            </p>
          </div>
        </section>

        <Packages />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
