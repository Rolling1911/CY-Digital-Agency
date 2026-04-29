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
  w-full bg-transparent text-white placeholder-[#666]
  border border-white/10 rounded-[10px]
  px-4 py-3.5 text-sm outline-none
  transition-all duration-200
  focus:border-[#D4AF37] focus:shadow-[0_0_10px_rgba(212,175,55,0.2)]
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
    <section id="contact" className="py-24 bg-[#0B0B0B] relative">
      <div className="container mx-auto px-4 md:px-6">

        {/* Section title */}
        <div className="text-center mb-16">
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
            className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full"
          />
        </div>

        {/* 2-column layout */}
        <div
          style={{ maxWidth: "1100px", margin: "0 auto" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start"
        >

          {/* LEFT — context + trust */}
          <motion.div
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

            <div style={{ width: "40px", height: "3px", background: "#D4AF37", borderRadius: "2px", marginBottom: "24px" }} />

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
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(212,175,55,0.15)",
              borderRadius: "16px",
              padding: "36px 32px",
            }}
          >
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
                        <FormLabel style={{ fontSize: "12px", color: "#888", letterSpacing: "0.5px" }}>Το όνομά σας</FormLabel>
                        <FormControl>
                          <input className={inputClass} placeholder="π.χ. Γιάννης Παπαδόπουλος" {...field} data-testid="input-name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="company" render={({ field }) => (
                      <FormItem>
                        <FormLabel style={{ fontSize: "12px", color: "#888", letterSpacing: "0.5px" }}>Επιχείρηση</FormLabel>
                        <FormControl>
                          <input className={inputClass} placeholder="π.χ. Το Καφέ μου" {...field} data-testid="input-company" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  {/* Row 2: phone + email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField control={form.control} name="phone" render={({ field }) => (
                      <FormItem>
                        <FormLabel style={{ fontSize: "12px", color: "#888", letterSpacing: "0.5px" }}>Τηλέφωνο επικοινωνίας</FormLabel>
                        <FormControl>
                          <input className={inputClass} placeholder="π.χ. 99 123456" {...field} data-testid="input-phone" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="email" render={({ field }) => (
                      <FormItem>
                        <FormLabel style={{ fontSize: "12px", color: "#888", letterSpacing: "0.5px" }}>Email</FormLabel>
                        <FormControl>
                          <input className={inputClass} placeholder="email@example.com" type="email" {...field} data-testid="input-email" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  {/* Row 3: city + service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField control={form.control} name="city" render={({ field }) => (
                      <FormItem>
                        <FormLabel style={{ fontSize: "12px", color: "#888", letterSpacing: "0.5px" }}>Περιοχή</FormLabel>
                        <FormControl>
                          <input className={inputClass} placeholder="π.χ. Λευκωσία" {...field} data-testid="input-city" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="service" render={({ field }) => (
                      <FormItem>
                        <FormLabel style={{ fontSize: "12px", color: "#888", letterSpacing: "0.5px" }}>Υπηρεσία που σας ενδιαφέρει</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-transparent border-white/10 focus:ring-[#D4AF37] h-[50px] text-sm rounded-[10px]" data-testid="select-service">
                              <SelectValue placeholder="Επιλέξτε..." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-[#111] border-white/10">
                            <SelectItem value="web">Δημιουργία Ιστοσελίδας</SelectItem>
                            <SelectItem value="social">Social Media Management</SelectItem>
                            <SelectItem value="graphics">Γραφιστικά & Δημιουργικά</SelectItem>
                            <SelectItem value="branding">Logo & Branding</SelectItem>
                            <SelectItem value="google">Google Business Profile</SelectItem>
                            <SelectItem value="ads">Διαφημίσεις Facebook & Instagram</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  {/* Message */}
                  <FormField control={form.control} name="message" render={({ field }) => (
                    <FormItem>
                      <FormLabel style={{ fontSize: "12px", color: "#888", letterSpacing: "0.5px" }}>Μήνυμα (Προαιρετικό)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Πείτε μας λίγα λόγια για τις ανάγκες σας..."
                          className="bg-transparent border-white/10 focus-visible:ring-[#D4AF37] min-h-[100px] resize-none rounded-[10px] text-sm"
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
                  <p style={{ textAlign: "center", fontSize: "11.5px", color: "#666", letterSpacing: "0.3px" }}>
                    🔒 Τα στοιχεία σας παραμένουν απολύτως εμπιστευτικά.
                  </p>

                </form>
              </Form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
