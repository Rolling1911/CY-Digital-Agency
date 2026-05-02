import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Το όνομα πρέπει να έχει τουλάχιστον 2 χαρακτήρες" }),
  company: z.string().min(2, { message: "Το όνομα επιχείρησης είναι υποχρεωτικό" }),
  phone: z.string().min(8, { message: "Μη έγκυρος αριθμός τηλεφώνου" }),
  email: z.string().email({ message: "Μη έγκυρο email" }),
  city: z.string().min(2, { message: "Η περιοχή είναι υποχρεωτική" }),
  service: z.string().min(1, { message: "Επιλέξτε υπηρεσία" }),
  message: z.string().optional(),
});

const trustPoints = [
  "Δωρεάν αρχική αξιολόγηση",
  "Προτάσεις προσαρμοσμένες στις ανάγκες σας",
  "Καμία δέσμευση",
];

const inputClass = `
  w-full text-white placeholder-[#4a4a4a]
  border border-[rgba(212,175,55,0.14)] rounded-[10px]
  px-4 py-3.5 text-sm outline-none
  transition-all duration-250
  focus:border-[#D4AF37] focus:shadow-[0_0_14px_rgba(212,175,55,0.18)]
  hover:border-[rgba(212,175,55,0.28)]
`;

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "", company: "", phone: "", email: "",
      city: "", service: "", message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Server error");
      setIsSubmitted(true);
    } catch {
      setSubmitError("Κάτι πήγε στραβά. Δοκιμάστε ξανά ή επικοινωνήστε μαζί μας απευθείας.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="contact" className="py-14 md:py-16 bg-[#0B0B0B] relative">
      <div className="container mx-auto px-4 md:px-6">

        {/* Section title */}
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4"
          >
            Επικοινωνία
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-32 h-px mx-auto bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
          />
        </div>

        {/* 2-column layout */}
        <div
          style={{ maxWidth: "1100px", margin: "0 auto" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start"
        >

          {/* LEFT — context + trust */}
          <motion.div
            className="contact-left-col"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            style={{ paddingTop: "8px" }}
          >
            <h3
              className="font-display"
              style={{
                fontSize: "clamp(28px, 3vw, 40px)",
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 1.2,
                marginBottom: "20px",
              }}
            >
              Ας μιλήσουμε για{" "}
              <span style={{ color: "#D4AF37" }}>την επιχείρησή σας</span>
            </h3>

            <div style={{ width: "70px", height: "1px", background: "linear-gradient(to right, transparent, #D4AF37, transparent)", marginBottom: "24px" }} />

            <p
              style={{
                fontSize: "15px",
                color: "#BFBFBF",
                lineHeight: 1.8,
                marginBottom: "36px",
              }}
            >
              Συμπληρώστε τη φόρμα και θα επικοινωνήσουμε μαζί σας εντός
              24 ωρών για να συζητήσουμε τις ανάγκες σας.
            </p>

            {/* Trust points */}
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {trustPoints.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <div
                    style={{
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      background: "rgba(212,175,55,0.1)",
                      border: "1px solid rgba(212,175,55,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="#D4AF37" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.8)" }}>
                    {point}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — form card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="relative"
            style={{
              background: "linear-gradient(145deg, rgba(255,255,255,0.042) 0%, rgba(255,255,255,0.016) 100%)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(212,175,55,0.18)",
              borderRadius: "22px",
              padding: "38px 34px",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), 0 24px 80px rgba(0,0,0,0.35)",
            }}
          >
            {/* Top shimmer */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px" style={{ width: "55%", background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.5), transparent)", borderRadius: "99px" }} />
            {/* Corner accents */}
            <div className="absolute top-0 left-0 pointer-events-none" style={{ width: "20px", height: "20px", borderTop: "1px solid rgba(212,175,55,0.35)", borderLeft: "1px solid rgba(212,175,55,0.35)", borderTopLeftRadius: "22px" }} />
            <div className="absolute top-0 right-0 pointer-events-none" style={{ width: "20px", height: "20px", borderTop: "1px solid rgba(212,175,55,0.35)", borderRight: "1px solid rgba(212,175,55,0.35)", borderTopRightRadius: "22px" }} />
            <div className="absolute bottom-0 left-0 pointer-events-none" style={{ width: "20px", height: "20px", borderBottom: "1px solid rgba(212,175,55,0.35)", borderLeft: "1px solid rgba(212,175,55,0.35)", borderBottomLeftRadius: "22px" }} />
            <div className="absolute bottom-0 right-0 pointer-events-none" style={{ width: "20px", height: "20px", borderBottom: "1px solid rgba(212,175,55,0.35)", borderRight: "1px solid rgba(212,175,55,0.35)", borderBottomRightRadius: "22px" }} />
            {isSubmitted ? (
              <div style={{ textAlign: "center", padding: "48px 0" }}>
                <div
                  style={{
                    width: "72px", height: "72px", borderRadius: "50%",
                    background: "rgba(212,175,55,0.12)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 24px",
                  }}
                >
                  <CheckCircle style={{ width: "36px", height: "36px", color: "#D4AF37" }} />
                </div>
                <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#fff", marginBottom: "12px" }}>
                  Ευχαριστούμε!
                </h3>
                <p style={{ fontSize: "14px", color: "#BFBFBF", lineHeight: 1.7, marginBottom: "28px" }}>
                  Θα επικοινωνήσουμε σύντομα μαζί σας για να συζητήσουμε τις ανάγκες της επιχείρησής σας.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  style={{
                    padding: "11px 28px", fontSize: "12px", fontWeight: 700,
                    letterSpacing: "1.5px", textTransform: "uppercase",
                    background: "transparent", color: "#D4AF37",
                    border: "1px solid rgba(212,175,55,0.4)", borderRadius: "6px", cursor: "pointer",
                  }}
                >
                  Αποστολή Νέου Μηνύματος
                </button>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>

                  {/* Row 1: name + company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField control={form.control} name="name" render={({ field }) => (
                      <FormItem>
                        <FormLabel style={{ fontSize: "11.5px", color: "rgba(212,175,55,0.7)", letterSpacing: "1px", textTransform: "uppercase" }}>Το όνομά σας</FormLabel>
                        <FormControl>
                          <input className={inputClass} style={{ background: "rgba(0,0,0,0.25)" }} placeholder="π.χ. Γιάννης Παπαδόπουλος" {...field} data-testid="input-name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="company" render={({ field }) => (
                      <FormItem>
                        <FormLabel style={{ fontSize: "11.5px", color: "rgba(212,175,55,0.7)", letterSpacing: "1px", textTransform: "uppercase" }}>Επιχείρηση</FormLabel>
                        <FormControl>
                          <input className={inputClass} style={{ background: "rgba(0,0,0,0.25)" }} placeholder="π.χ. Το Καφέ μου" {...field} data-testid="input-company" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  {/* Row 2: phone + email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField control={form.control} name="phone" render={({ field }) => (
                      <FormItem>
                        <FormLabel style={{ fontSize: "11.5px", color: "rgba(212,175,55,0.7)", letterSpacing: "1px", textTransform: "uppercase" }}>Τηλέφωνο επικοινωνίας</FormLabel>
                        <FormControl>
                          <input className={inputClass} style={{ background: "rgba(0,0,0,0.25)" }} placeholder="π.χ. 99 123456" {...field} data-testid="input-phone" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="email" render={({ field }) => (
                      <FormItem>
                        <FormLabel style={{ fontSize: "11.5px", color: "rgba(212,175,55,0.7)", letterSpacing: "1px", textTransform: "uppercase" }}>Email</FormLabel>
                        <FormControl>
                          <input className={inputClass} style={{ background: "rgba(0,0,0,0.25)" }} placeholder="email@example.com" type="email" {...field} data-testid="input-email" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  {/* Row 3: city + service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField control={form.control} name="city" render={({ field }) => (
                      <FormItem>
                        <FormLabel style={{ fontSize: "11.5px", color: "rgba(212,175,55,0.7)", letterSpacing: "1px", textTransform: "uppercase" }}>Περιοχή</FormLabel>
                        <FormControl>
                          <input className={inputClass} style={{ background: "rgba(0,0,0,0.25)" }} placeholder="π.χ. Λευκωσία" {...field} data-testid="input-city" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="service" render={({ field }) => (
                      <FormItem>
                        <FormLabel style={{ fontSize: "11.5px", color: "rgba(212,175,55,0.7)", letterSpacing: "1px", textTransform: "uppercase" }}>Υπηρεσία που σας ενδιαφέρει</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger
                              className="focus:ring-[#D4AF37] h-[50px] text-sm rounded-[10px]"
                              style={{ background: "rgba(0,0,0,0.25)", border: "1px solid rgba(212,175,55,0.14)" }}
                              data-testid="select-service"
                            >
                              <SelectValue placeholder="Επιλέξτε..." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-[#0f0f0f] border-[rgba(212,175,55,0.2)]">
                            <SelectItem value="web">Δημιουργία Ιστοσελίδας</SelectItem>
                            <SelectItem value="social">Social Media Management</SelectItem>
                            <SelectItem value="graphics">Γραφιστικά & Δημιουργικά</SelectItem>
                            <SelectItem value="branding">Logo & Branding</SelectItem>
                            <SelectItem value="google">Google Business Profile</SelectItem>
                            <SelectItem value="ads">Διαφημίσεις Facebook & Instagram</SelectItem>
                            <SelectItem value="content">Δημιουργία Περιεχομένου</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  {/* Message */}
                  <FormField control={form.control} name="message" render={({ field }) => (
                    <FormItem>
                      <FormLabel style={{ fontSize: "11.5px", color: "rgba(212,175,55,0.7)", letterSpacing: "1px", textTransform: "uppercase" }}>Μήνυμα (Προαιρετικό)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Πείτε μας λίγα λόγια για τις ανάγκες σας..."
                          className="focus-visible:ring-[#D4AF37] min-h-[100px] resize-none rounded-[10px] text-sm placeholder-[#4a4a4a]"
                          style={{ background: "rgba(0,0,0,0.25)", border: "1px solid rgba(212,175,55,0.14)", color: "#fff" }}
                          {...field}
                          data-testid="input-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    data-testid="button-submit-contact"
                    style={{
                      width: "100%",
                      padding: "16px",
                      fontSize: "12px",
                      fontWeight: 700,
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      background: isLoading ? "#a88a2a" : "#D4AF37",
                      color: "#0B0B0B",
                      border: "none",
                      borderRadius: "8px",
                      cursor: isLoading ? "not-allowed" : "pointer",
                      boxShadow: "0 0 24px rgba(212,175,55,0.2)",
                      transition: "all 0.25s ease",
                      marginTop: "4px",
                      opacity: isLoading ? 0.75 : 1,
                    }}
                    onMouseEnter={e => {
                      if (!isLoading) {
                        e.currentTarget.style.background = "#c9a830";
                        e.currentTarget.style.boxShadow = "0 0 36px rgba(212,175,55,0.32)";
                      }
                    }}
                    onMouseLeave={e => {
                      if (!isLoading) {
                        e.currentTarget.style.background = "#D4AF37";
                        e.currentTarget.style.boxShadow = "0 0 24px rgba(212,175,55,0.2)";
                      }
                    }}
                  >
                    {isLoading ? "Αποστολή..." : "Ζητήστε Προσφορά"}
                  </button>

                  {/* Error message */}
                  {submitError && (
                    <p style={{ textAlign: "center", fontSize: "12px", color: "#e57373", letterSpacing: "0.3px" }}>
                      {submitError}
                    </p>
                  )}

                  {/* Trust note */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "7px" }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(212,175,55,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                    <p style={{ fontSize: "11.5px", color: "rgba(255,255,255,0.3)", letterSpacing: "0.4px", margin: 0 }}>
                      Τα στοιχεία σας παραμένουν απολύτως εμπιστευτικά.
                    </p>
                  </div>

                </form>
              </Form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
