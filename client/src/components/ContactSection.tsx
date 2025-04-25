import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },

        body: encode({
          "form-name": "contact",
          ...data,
        }),
      });

      if (!response.ok) {
        throw new Error(
          `Netlify form submission failed: ${response.status} ${response.statusText}`
        );
      }

      toast({
        title: t("contact.form.successTitle"),
        description: t("contact.form.successMessage"),
      });
      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        variant: "destructive",
        title: t("contact.form.errorTitle", "Submission Error"),
        description: t(
          "contact.form.errorMessage",
          "There was a problem submitting your form. Please try again later."
        ),
      });
    } finally {
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

          <Form {...form}>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4"
              noValidate
            >
              <input type="hidden" name="form-name" value="contact" />

              <p className="hidden">
                <label>
                  Don’t fill this out if you’re human:
                  <input name="bot-field" />
                </label>
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("contact.form.name")}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t("contact.form.namePlaceholder")}
                          {...field}
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
