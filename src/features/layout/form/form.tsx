import { Button, ButtonVariant, Input } from "@/features/ui";
import styles from "./form.module.scss";
import { contactFormText } from "@/constants";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Image from "next/image";
import { useState } from "react";

const formSchema = z.object({
  fullName: z.string().min(1),
  email: z.string().email().min(5),
  subject: z.string().min(1),
  message: z.string().min(3),
});

type FormValues = z.infer<typeof formSchema>;

export default function Form() {
  const [loading, setLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async () => {
    try {
      setLoading(true);
      console.log("SUBMITEDDD");
    } catch (error) {
      console.log("error!!!!!!!!!!!!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className={styles.formTitle}>{contactFormText.title}</h1>
      <p className={styles.formDescription}>{contactFormText.description}</p>
      <form onSubmit={form.handleSubmit(onSubmit)} className={styles.form}>
        <Input
          placeholder="Full name"
          type="text"
          disabled={loading}
          required
        />
        <Input
          placeholder="Email address"
          type="email"
          disabled={loading}
          required
        />
        <Input placeholder="Subject" type="text" disabled={loading} required />
        <Input placeholder="Message" type="text" disabled={loading} required />
        <Button
          className={styles.formSubmitBtn}
          variant={ButtonVariant.gradient}
          type="submit"
        >
          Share your vision
        </Button>
      </form>
      <div>
        <p className={styles.formDescription}>{contactFormText.email}</p>
        <p className={styles.formDescription}>{contactFormText.phone}</p>
        <Image
          src="/images/facebook.svg"
          alt="Facebook"
          width={32}
          height={32}
        />
        <Image
          src="/images/instagram.svg"
          alt="Instagram"
          width={32}
          height={32}
        />
        <Image
          src="/images/linkedin.svg"
          alt="Linkedin"
          width={20}
          height={20}
        />
      </div>
    </>
  );
}
