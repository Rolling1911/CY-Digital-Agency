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
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight, CheckCircle, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const inputClass =
  "w-full rounded-sm border border-[#171717]/15 bg-[#F7F5EF] px-4 py-3.5 text-sm text-[#171717] placeholder:text-[#171717]/35 outline-none transition-all duration-200 hover:border-[#171717]/30 focus:border-[#3155F5] focus:ring-2 focus:ring-[#3155F5]/10";

export function Contact({ showHeading = true }: { showHeading?: boolean }) {
  const { t, language } = useLanguage();

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
    defaultValues: {
      name: "",
      company: "",
      phone: "",
      email: "",
      city: "",
      service: "",
      message: "",
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
      setSubmitError(t.contact_error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-[#F7F5EF] py-20 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#3155F5]/[0.06] blur-[110px]"
      />

      <div className="relative mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12 xl:px-16">
        {showHeading && (
          <div className="mb-14 max-w-3xl md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#FF6633]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#171717]/55">
                  {t.contact_heading}
                </span>
              </div>

              <h2 className="text-4xl font-semibold leading-[1.08] tracking-[-0.05em] text-[#171717] md:text-6xl">
                {t.contact_heading}
                <span className="text-[#3155F5]">.</span>
              </h2>
            </motion.div>
          </div>
        )}

        <div className="grid items-start gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-16 lg:gap-24">
          <motion.div
            className="pt-2"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="mb-6 inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-[#3155F5]">
              {language === "en" ? "LET'S TALK" : "ΑΣ ΜΙΛΗΣΟΥΜΕ"}
            </span>

            <h3 className="max-w-lg text-4xl font-semibold leading-[1.12] tracking-[-0.045em] text-[#171717] md:text-5xl">
              {t.contact_subheading_1}{" "}
              <span className="text-[#3155F5]">
                {t.contact_subheading_2}
              </span>
              <span className="text-[#FF6633]">.</span>
            </h3>

            <div className="mt-7 h-1 w-16 bg-[#FF6633]" />

            <p className="mt-7 max-w-md text-sm leading-7 text-[#171717]/65 md:text-base">
              {t.contact_desc}
            </p>

            <div className="mt-10 space-y-5">
              {trustPoints.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#3155F5]/10 text-[#3155F5]">
                    <CheckCircle size={15} strokeWidth={2} />
                  </div>
                  <span className="pt-1 text-sm leading-6 text-[#171717]/75">
                    {point}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 flex items-center gap-3 border-t border-[#171717]/10 pt-6">
              <div className="flex h-10 w-10 items-center justify-center bg-[#171717] text-white">
                <ShieldCheck size={19} strokeWidth={1.6} />
              </div>
              <p className="max-w-xs text-xs leading-5 text-[#171717]/50">
                {t.contact_privacy}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="relative border border-[#171717]/10 bg-white p-6 shadow-[0_20px_70px_rgba(23,23,23,0.06)] sm:p-9 md:p-10"
          >
            <div className="absolute right-0 top-0 h-1.5 w-24 bg-[#3155F5]" />

            {isSubmitted ? (
              <div className="flex min-h-[480px] flex-col items-center justify-center px-3 py-12 text-center">
                <div className="mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-[#3155F5]/10 text-[#3155F5]">
                  <CheckCircle size={40} strokeWidth={1.5} />
                </div>

                <h3 className="mb-4 text-2xl font-semibold tracking-tight text-[#171717]">
                  {t.contact_success_title}
                </h3>

                <p className="mb-8 max-w-sm text-sm leading-7 text-[#171717]/60">
                  {t.contact_success_desc}
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    form.reset();
                  }}
                  className="inline-flex items-center gap-3 bg-[#3155F5] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#2445DC]"
                >
                  {t.contact_send_new}
                  <ArrowRight size={16} />
                </button>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h3 className="text-xl font-semibold tracking-tight text-[#171717]">
                    {language === "en" ? "Tell us about your project" : "Πείτε μας για το project σας"}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-[#171717]/50">
                    {language === "en"
                      ? "Fill in the details below and we'll get back to you."
                      : "Συμπληρώστε τα στοιχεία σας και θα επικοινωνήσουμε μαζί σας."}
                  </p>
                </div>

                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex flex-col gap-5"
                  >
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#171717]/65">
                              {t.contact_label_name}
                            </FormLabel>
                            <FormControl>
                              <input
                                className={inputClass}
                                placeholder={t.contact_placeholder_name}
                                {...field}
                                data-testid="input-name"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#171717]/65">
                              {t.contact_label_company}
                            </FormLabel>
                            <FormControl>
                              <input
                                className={inputClass}
                                placeholder={t.contact_placeholder_company}
                                {...field}
                                data-testid="input-company"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#171717]/65">
                              {t.contact_label_phone}
                            </FormLabel>
                            <FormControl>
                              <input
                                type="tel"
                                className={inputClass}
                                placeholder={t.contact_placeholder_phone}
                                {...field}
                                data-testid="input-phone"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#171717]/65">
                              {t.contact_label_email}
                            </FormLabel>
                            <FormControl>
                              <input
                                type="email"
                                className={inputClass}
                                placeholder="email@example.com"
                                {...field}
                                data-testid="input-email"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#171717]/65">
                              {t.contact_label_city}
                            </FormLabel>
                            <FormControl>
                              <input
                                className={inputClass}
                                placeholder={t.contact_placeholder_city}
                                {...field}
                                data-testid="input-city"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#171717]/65">
                              {t.contact_label_service}
                            </FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              value={field.value}
                            >
                              <FormControl>
                                <SelectTrigger
                                  className="h-[50px] rounded-sm border-[#171717]/15 bg-[#F7F5EF] text-sm text-[#171717] focus:ring-[#3155F5]"
                                  data-testid="select-service"
                                >
                                  <SelectValue placeholder={t.contact_select_placeholder} />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="border-[#171717]/15 bg-white text-[#171717]">
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
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#171717]/65">
                            {t.contact_label_message}
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder={t.contact_message_placeholder}
                              className="min-h-[120px] resize-y rounded-sm border-[#171717]/15 bg-[#F7F5EF] text-sm text-[#171717] placeholder:text-[#171717]/35 focus-visible:ring-[#3155F5]"
                              {...field}
                              data-testid="input-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <button
                      type="submit"
                      disabled={isLoading}
                      data-testid="button-submit-contact"
                      className="group mt-2 flex min-h-14 w-full items-center justify-center gap-4 bg-[#3155F5] px-6 py-4 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:bg-[#2445DC] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isLoading ? t.contact_submit_loading : t.contact_submit}
                      {!isLoading && (
                        <ArrowRight
                          size={17}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      )}
                    </button>

                    {submitError && (
                      <p
                        role="alert"
                        className="text-center text-xs leading-5 text-red-600"
                      >
                        {submitError}
                      </p>
                    )}

                    <div className="flex items-center justify-center gap-2 text-[#171717]/40">
                      <ShieldCheck size={13} />
                      <p className="text-[10px] leading-5">
                        {t.contact_privacy}
                      </p>
                    </div>
                  </form>
                </Form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
