import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
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
  city: z.string().min(2, { message: "Η πόλη είναι υποχρεωτική" }),
  service: z.string().min(1, { message: "Επιλέξτε υπηρεσία" }),
  message: z.string().optional(),
});

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Simulate API call
    console.log(values);
    setIsSubmitted(true);
  }

  return (
    <section id="contact" className="py-24 bg-card relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold text-foreground mb-4"
            >
              Επικοινωνία
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-24 h-1 bg-primary mx-auto rounded-full" 
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0D0D0D] p-8 md:p-12 rounded-3xl border border-white/5 shadow-lg"
          >
            {isSubmitted ? (
              <div className="text-center py-16 flex flex-col items-center justify-center">
                <div className="w-20 h-20 bg-[#D4AF37]/20 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-[#D4AF37]" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Ευχαριστούμε!</h3>
                <p className="text-muted-foreground text-lg max-w-md mx-auto">
                  Θα επικοινωνήσουμε σύντομα μαζί σας για να συζητήσουμε τις ανάγκες της επιχείρησής σας.
                </p>
                <Button 
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                  className="mt-8 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10"
                >
                  Αποστολή Νέου Μηνύματος
                </Button>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Όνομα</FormLabel>
                          <FormControl>
                            <Input placeholder="π.χ. Γιάννης Παπαδόπουλος" className="bg-[#0D0D0D] border-white/10 focus-visible:ring-[#D4AF37] h-12" {...field} data-testid="input-name" />
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
                          <FormLabel className="text-foreground">Όνομα Επιχείρησης</FormLabel>
                          <FormControl>
                            <Input placeholder="π.χ. Το Καφέ μου" className="bg-[#0D0D0D] border-white/10 focus-visible:ring-[#D4AF37] h-12" {...field} data-testid="input-company" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Τηλέφωνο</FormLabel>
                          <FormControl>
                            <Input placeholder="π.χ. 99 123456" className="bg-[#0D0D0D] border-white/10 focus-visible:ring-[#D4AF37] h-12" {...field} data-testid="input-phone" />
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
                          <FormLabel className="text-foreground">Email</FormLabel>
                          <FormControl>
                            <Input placeholder="π.χ. email@example.com" type="email" className="bg-[#0D0D0D] border-white/10 focus-visible:ring-[#D4AF37] h-12" {...field} data-testid="input-email" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Πόλη</FormLabel>
                          <FormControl>
                            <Input placeholder="π.χ. Λευκωσία" className="bg-[#0D0D0D] border-white/10 focus-visible:ring-[#D4AF37] h-12" {...field} data-testid="input-city" />
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
                          <FormLabel className="text-foreground">Υπηρεσία που σας ενδιαφέρει</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-[#0D0D0D] border-white/10 focus-visible:ring-[#D4AF37] h-12 text-left" data-testid="select-service">
                                <SelectValue placeholder="Επιλέξτε..." />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-[#0D0D0D] border-white/10">
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
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Μήνυμα (Προαιρετικό)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Πείτε μας λίγα λόγια για τις ανάγκες σας..." 
                            className="bg-[#0D0D0D] border-white/10 focus-visible:ring-[#D4AF37] min-h-[120px] resize-y" 
                            {...field} 
                            data-testid="input-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full h-14 text-lg font-semibold bg-[#D4AF37] text-black hover:bg-[#D4AF37]/90 mt-4 rounded-xl transition-all"
                    data-testid="button-submit-contact"
                  >
                    Αποστολή Μηνύματος
                  </Button>
                </form>
              </Form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
