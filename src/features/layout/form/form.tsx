import { Button, ButtonVariant, Input } from "@/features/ui";
import styles from "./form.module.scss";
import { contactFormText } from "@/constants";
import { Controller, useForm } from "react-hook-form";
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

  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      setLoading(true);
      setTimeout(() => {
        console.log(data);
      }, 3000);
    } catch (error) {
      console.log("Form Error, ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className={styles.formTitle}>{contactFormText.title}</h1>
      <p className={styles.formDescription}>{contactFormText.description}</p>
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className={styles.form}
      >
        <Controller
          name="fullName"
          control={control}
          render={({
            field: { value, onChange, ref },
            fieldState: { error },
          }) => (
            <Input
              placeholder="Full name"
              type="text"
              disabled={loading}
              required
              ref={ref}
              value={value}
              onChange={onChange}
              error={Boolean(error)}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({
            field: { value, onChange, ref },
            fieldState: { error },
          }) => (
            <Input
              placeholder="Email address"
              type="email"
              disabled={loading}
              required
              ref={ref}
              value={value}
              onChange={onChange}
              error={Boolean(error)}
            />
          )}
        />
        <Controller
          name="subject"
          control={control}
          render={({
            field: { value, onChange, ref },
            fieldState: { error },
          }) => (
            <Input
              placeholder="Subject"
              type="text"
              disabled={loading}
              required
              ref={ref}
              value={value}
              onChange={onChange}
              error={Boolean(error)}
            />
          )}
        />
        <Controller
          name="message"
          control={control}
          render={({
            field: { value, onChange, ref },
            fieldState: { error },
          }) => (
            <Input
              placeholder="Message"
              type="text"
              disabled={loading}
              required
              ref={ref}
              value={value}
              onChange={onChange}
              error={Boolean(error)}
            />
          )}
        />
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
