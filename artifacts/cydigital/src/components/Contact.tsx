import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const inputClass = `
  w-full text-white placeholder-[#4a4a4a]
  border border-[rgba(212,175,55,0.14)] rounded-[10px]
  px-4 py-3.5 text-sm outline-none
  transition-all duration-250
  focus:border-[#D4AF37] focus:shadow-[0_0_14px_rgba(212,175,55,0.18)]
  hover:border-[rgba(212,175,55,0.28)]
`;

export function Contact({ showHeading = true }: { showHeading?: boolean }) {
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const formSchema = z.object({
    name: z.string().min(2, { message: t.val_name }),
    company: z.string().min(2, { message: t.val_company }),
    phone: z.string().min(8, { message: t.val_phone }),
    email: z.string().email({ message: t.val_email }),
    city: z.string().min(2, { message: t.val_city }),
    service: z.string().min(1, { message: t.val_service }),
    message: z.string().optional(),
  });

  const trustPoints = [t.contact_trust1, t.contact_trust2, t.contact_trust3];

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", company: "", phone: "", email: "", city: "", service: "", message: "" },
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
      setSubmitError(t.contact_error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="contact" className="py-9 md:py-16 bg-[#0B0B0B] relative">
      <div className="container mx-auto px-4 md:px-6">

        {showHeading && (
          <div className="text-center mb-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4"
            >
              {t.contact_heading}
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-32 h-px mx-auto bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
            />
          </div>
        )}

        <div style={{ maxWidth: "1100px", margin: "0 auto" }} className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">

          <motion.div
            className="contact-left-col"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            style={{ paddingTop: "8px" }}
          >
            <h3 className="font-display" style={{ fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 700, color: "#ffffff", lineHeight: 1.2, marginBottom: "20px" }}>
              {t.contact_subheading_1}{" "}
              <span style={{ color: "#D4AF37" }}>{t.contact_subheading_2}</span>
            </h3>
            <div style={{ width: "70px", height: "1px", background: "linear-gradient(to right, transparent, #D4AF37, transparent)", marginBottom: "24px" }} />
            <p style={{ fontSize: "15px", color: "#BFBFBF", lineHeight: 1.8, marginBottom: "36px" }}>
              {t.contact_desc}
            </p>

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
                  <div style={{ width: "22px", height: "22px", borderRadius: "50%", background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="#D4AF37" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.8)" }}>{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="relative"
            style={{ background: "linear-gradient(145deg, rgba(255,255,255,0.042) 0%, rgba(255,255,255,0.016) 100%)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(212,175,55,0.18)", borderRadius: "22px", padding: "38px 34px", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), 0 24px 80px rgba(0,0,0,0.35)" }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px" style={{ width: "55%", background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.5), transparent)", borderRadius: "99px" }} />
            <div className="absolute top-0 left-0 pointer-events-none" style={{ width: "20px", height: "20px", borderTop: "1px solid rgba(212,175,55,0.35)", borderLeft: "1px solid rgba(212,175,55,0.35)", borderTopLeftRadius: "22px" }} />
            <div className="absolute top-0 right-0 pointer-events-none" style={{ width: "20px", height: "20px", borderTop: "1px solid rgba(212,175,55,0.35)", borderRight: "1px solid rgba(212,175,55,0.35)", borderTopRightRadius: "22px" }} />
            <div className="absolute bottom-0 left-0 pointer-events-none" style={{ width: "20px", height: "20px", borderBottom: "1px solid rgba(212,175,55,0.35)", borderLeft: "1px solid rgba(212,175,55,0.35)", borderBottomLeftRadius: "22px" }} />
            <div className="absolute bottom-0 right-0 pointer-events-none" style={{ width: "20px", height: "20px", borderBottom: "1px solid rgba(212,175,55,0.35)", borderRight: "1px solid rgba(212,175,55,0.35)", borderBottomRightRadius: "22px" }} />

            {isSubmitted ? (
              <div style={{ textAlign: "center", padding: "48px 0" }}>
                <div style={{ width: "72px", height: "72px", borderRadius: "50%", background: "rgba(212,175,55,0.12)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                  <CheckCircle style={{ width: "36px", height: "36px", color: "#D4AF37" }} />
                </div>
                <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#fff", marginBottom: "12px" }}>{t.contact_success_title}</h3>
                <p style={{ fontSize: "14px", color: "#BFBFBF", lineHeight: 1.7, marginBottom: "28px" }}>{t.contact_success_desc}</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  style={{ padding: "11px 28px", fontSize: "12px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", background: "transparent", color: "#D4AF37", border: "1px solid rgba(212,175,55,0.4)", borderRadius: "6px", cursor: "pointer" }}
                >
                  {t.contact_send_new}
                </button>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField control={form.control} name="name" render={({ field }) => (
                      <FormItem>
                        <FormLabel style={{ fontSize: "11.5px", color: "rgba(212,175,55,0.7)", letterSpacing: "1px", textTransform: "uppercase" }}>{t.contact_label_name}</FormLabel>
                        <FormControl>
                          <input className={inputClass} style={{ background: "rgba(0,0,0,0.25)" }} placeholder={t.contact_placeholder_name} {...field} data-testid="input-name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="company" render={({ field }) => (
                      <FormItem>
                        <FormLabel style={{ fontSize: "11.5px", color: "rgba(212,175,55,0.7)", letterSpacing: "1px", textTransform: "uppercase" }}>{t.contact_label_company}</FormLabel>
                        <FormControl>
                          <input className={inputClass} style={{ background: "rgba(0,0,0,0.25)" }} placeholder={t.contact_placeholder_company} {...field} data-testid="input-company" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField control={form.control} name="phone" render={({ field }) => (
                      <FormItem>
                        <FormLabel style={{ fontSize: "11.5px", color: "rgba(212,175,55,0.7)", letterSpacing: "1px", textTransform: "uppercase" }}>{t.contact_label_phone}</FormLabel>
                        <FormControl>
                          <input className={inputClass} style={{ background: "rgba(0,0,0,0.25)" }} placeholder={t.contact_placeholder_phone} {...field} data-testid="input-phone" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="email" render={({ field }) => (
                      <FormItem>
                        <FormLabel style={{ fontSize: "11.5px", color: "rgba(212,175,55,0.7)", letterSpacing: "1px", textTransform: "uppercase" }}>{t.contact_label_email}</FormLabel>
                        <FormControl>
                          <input className={inputClass} style={{ background: "rgba(0,0,0,0.25)" }} placeholder="email@example.com" type="email" {...field} data-testid="input-email" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField control={form.control} name="city" render={({ field }) => (
                      <FormItem>
                        <FormLabel style={{ fontSize: "11.5px", color: "rgba(212,175,55,0.7)", letterSpacing: "1px", textTransform: "uppercase" }}>{t.contact_label_city}</FormLabel>
                        <FormControl>
                          <input className={inputClass} style={{ background: "rgba(0,0,0,0.25)" }} placeholder={t.contact_placeholder_city} {...field} data-testid="input-city" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="service" render={({ field }) => (
                      <FormItem>
                        <FormLabel style={{ fontSize: "11.5px", color: "rgba(212,175,55,0.7)", letterSpacing: "1px", textTransform: "uppercase" }}>{t.contact_label_service}</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="focus:ring-[#D4AF37] h-[50px] text-sm rounded-[10px]" style={{ background: "rgba(0,0,0,0.25)", border: "1px solid rgba(212,175,55,0.14)" }} data-testid="select-service">
                              <SelectValue placeholder={t.contact_select_placeholder} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-[#0f0f0f] border-[rgba(212,175,55,0.2)]">
                            <SelectItem value="web">{t.contact_service_web}</SelectItem>
                            <SelectItem value="social">{t.contact_service_social}</SelectItem>
                            <SelectItem value="graphics">{t.contact_service_graphics}</SelectItem>
                            <SelectItem value="branding">{t.contact_service_branding}</SelectItem>
                            <SelectItem value="google">{t.contact_service_google}</SelectItem>
                            <SelectItem value="ads">{t.contact_service_ads}</SelectItem>
                            <SelectItem value="content">{t.contact_service_content}</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  <FormField control={form.control} name="message" render={({ field }) => (
                    <FormItem>
                      <FormLabel style={{ fontSize: "11.5px", color: "rgba(212,175,55,0.7)", letterSpacing: "1px", textTransform: "uppercase" }}>{t.contact_label_message}</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={t.contact_message_placeholder}
                          className="focus-visible:ring-[#D4AF37] min-h-[100px] resize-none rounded-[10px] text-sm placeholder-[#4a4a4a]"
                          style={{ background: "rgba(0,0,0,0.25)", border: "1px solid rgba(212,175,55,0.14)", color: "#fff" }}
                          {...field}
                          data-testid="input-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <button
                    type="submit"
                    disabled={isLoading}
                    data-testid="button-submit-contact"
                    style={{ width: "100%", padding: "16px", fontSize: "12px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", background: isLoading ? "#a88a2a" : "#D4AF37", color: "#0B0B0B", border: "none", borderRadius: "8px", cursor: isLoading ? "not-allowed" : "pointer", boxShadow: "0 0 24px rgba(212,175,55,0.2)", transition: "all 0.25s ease", marginTop: "4px", opacity: isLoading ? 0.75 : 1 }}
                    onMouseEnter={e => { if (!isLoading) { e.currentTarget.style.background = "#c9a830"; e.currentTarget.style.boxShadow = "0 0 36px rgba(212,175,55,0.32)"; } }}
                    onMouseLeave={e => { if (!isLoading) { e.currentTarget.style.background = "#D4AF37"; e.currentTarget.style.boxShadow = "0 0 24px rgba(212,175,55,0.2)"; } }}
                  >
                    {isLoading ? t.contact_submit_loading : t.contact_submit}
                  </button>

                  {submitError && (
                    <p style={{ textAlign: "center", fontSize: "12px", color: "#e57373", letterSpacing: "0.3px" }}>
                      {submitError}
                    </p>
                  )}

                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "7px" }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(212,175,55,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                    <p style={{ fontSize: "11.5px", color: "rgba(255,255,255,0.3)", letterSpacing: "0.4px", margin: 0 }}>
                      {t.contact_privacy}
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
