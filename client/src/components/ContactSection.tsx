import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// Usunięto import Label, bo używamy FormLabel z react-hook-form
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

/**
 * Helper function to encode form data for Netlify submission.
 * @param data - An object containing form data.
 * @returns A URL-encoded string.
 */
const encode = (data: { [key: string]: string }) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const ContactForm = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactFormSchema = z.object({
    name: z.string().min(2, { message: t("contact.form.nameError") }),
    email: z.string().email({ message: t("contact.form.emailError") }),
    subject: z.string().min(2, { message: t("contact.form.subjectError") }),
    message: z.string().min(10, { message: t("contact.form.messageError") }),
    // Możesz dodać pole 'bot-field' do schemy jeśli chcesz je walidować,
    // ale zwykle dla honeypota nie jest to konieczne.
  });

  type ContactFormValues = z.infer<typeof contactFormSchema>;

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  /**
   * Handles form submission by sending data to Netlify Forms.
   * @param data - Validated form data from react-hook-form.
   */
  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);

    try {
      // Wysłanie danych do Netlify Forms
      const response = await fetch("/", {
        // Wysyłamy POST na ten sam adres URL strony
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        // Zakoduj dane, dodając nazwę formularza zgodną z atrybutem 'name' i ukrytym polem
        body: encode({
          "form-name": "contact", // Musi zgadzać się z <form name="contact"> i ukrytym polem
          ...data, // Rozprowadź resztę zwalidowanych danych formularza
        }),
      });

      if (!response.ok) {
        // Jeśli Netlify zwróci błąd (np. 4xx, 5xx)
        throw new Error(
          `Netlify form submission failed: ${response.status} ${response.statusText}`
        );
      }

      // Sukces - Netlify przyjęło dane
      toast({
        title: t("contact.form.successTitle"),
        description: t("contact.form.successMessage"),
      });
      form.reset(); // Wyczyszczenie formularza po pomyślnym wysłaniu
    } catch (error) {
      // Obsługa błędów (np. problem z siecią lub błąd zwrócony przez Netlify)
      console.error("Form submission error:", error);
      toast({
        variant: "destructive", // Użyj wariantu błędu (jeśli zdefiniowany w Twoim systemie toastów)
        title: t("contact.form.errorTitle", "Submission Error"), // Dodaj tłumaczenie
        description: t(
          "contact.form.errorMessage",
          "There was a problem submitting your form. Please try again later."
        ), // Dodaj tłumaczenie
      });
    } finally {
      // Niezależnie od sukcesu czy błędu, zakończ stan ładowania
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4 text-center">
            {t("contact.title")}
          </h2>
          <div className="h-1 w-20 bg-accent mx-auto mb-6"></div>
          <p className="mb-8 text-center text-gray-600 dark:text-gray-300">
            {t("contact.description")}
          </p>

          {/* Komponent Form z react-hook-form zarządza stanem i walidacją */}
          <Form {...form}>
            {/* Natywny tag form z atrybutami dla Netlify */}
            <form
              name="contact" // Nazwa formularza dla Netlify (musi pasować do ukrytego pola i 'form-name' w encode)
              method="POST" // Metoda wymagana przez Netlify Forms
              data-netlify="true" // Włącza obsługę formularza przez Netlify
              data-netlify-honeypot="bot-field" // Opcjonalne: Nazwa pola-pułapki na boty
              onSubmit={form.handleSubmit(onSubmit)} // Użyj handlera z react-hook-form, który wywoła naszą funkcję onSubmit
              className="space-y-4"
              noValidate // Wyłącz domyślną walidację przeglądarki, bo używamy react-hook-form/zod
            >
              {/* --- Pola wymagane przez Netlify --- */}
              {/* 1. Ukryte pole informujące Netlify o nazwie formularza */}
              <input type="hidden" name="form-name" value="contact" />
              {/* 2. Opcjonalne: Pole honeypot (pułapka na boty). Powinno być ukryte dla użytkowników. */}
              {/*    Stylizacja 'hidden' z Tailwind ukrywa je wizualnie i przed czytnikami ekranu */}
              <p className="hidden">
                <label>
                  Don’t fill this out if you’re human:{" "}
                  <input name="bot-field" />
                </label>
              </p>
              {/* --- Koniec pól Netlify --- */}

              {/* --- Pola formularza widoczne dla użytkownika (renderowane przez react-hook-form) --- */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("contact.form.name")}</FormLabel>
                      <FormControl>
                        {/* Atrybut 'name' w Input jest automatycznie dodawany przez {...field} */}
                        <Input
                          placeholder={t("contact.form.namePlaceholder")}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage /> {/* Wyświetla błędy walidacji */}
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("contact.form.email")}</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder={t("contact.form.emailPlaceholder")}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("contact.form.subject")}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("contact.form.subjectPlaceholder")}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("contact.form.message")}</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={t("contact.form.messagePlaceholder")}
                        rows={5}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* --- Koniec pól użytkownika --- */}

              <div className="flex justify-center pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3"
                >
                  {isSubmitting
                    ? t("contact.form.sending", "Sending...")
                    : t("contact.form.send")}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
