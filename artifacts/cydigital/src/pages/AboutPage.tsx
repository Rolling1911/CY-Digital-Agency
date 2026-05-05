import { Header } from "@/components/Header";
import { WhyUs } from "@/components/WhyUs";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

export default function AboutPage() {
  useSEO({
    title: "Γιατί CYDigital | Premium Digital Agency Κύπρος",
    description: "Μάθετε γιατί επιχειρήσεις στην Κύπρο επιλέγουν την CYDigital. Strategy-first προσέγγιση, premium εκτέλεση και αποδεδειγμένα αποτελέσματα.",
    path: "/giati-emas",
  });

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Hero */}
        <section className="pt-[88px] pb-10 bg-black text-center">
          <div className="container mx-auto px-4 md:px-6 pt-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Γιατί CYDigital
            </h1>
            <div className="w-32 h-px mx-auto bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-4" />
            <p className="text-white/60 max-w-xl mx-auto font-display italic text-lg">
              Strategy-first προσέγγιση, premium εκτέλεση, αποδεδειγμένα αποτελέσματα
            </p>
          </div>
        </section>

        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
