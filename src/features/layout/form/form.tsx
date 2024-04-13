import { Button, ButtonVariant, Input, TextArea } from "@/features/ui";
import styles from "./form.module.scss";
import { contactFormText } from "@/constants";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Details from "./details";

interface FormProps {
  isSubmitted: boolean;
  submittedForm: () => void;
  color: "--ez-orange" | "--adobe-purple";
}

const formSchema = z.object({
  fullName: z.string().min(1),
  email: z.string().email().min(5).email("Please specify a valid email"),
  subject: z.string().min(1),
  message: z.string().min(3),
});

type FormValues = z.infer<typeof formSchema>;

export default function Form({ isSubmitted, submittedForm, color }: FormProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { control, handleSubmit } = useForm<FormValues>({
    mode: "onBlur",
    reValidateMode: "onBlur",
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
      await fetch("/api/mail", {
        method: "post",
        body: JSON.stringify(data),
      });
      setLoading(false);
      submittedForm();
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }

    // setTimeout(() => {
    //   console.log(data);
    //   setLoading(false);
    //   submittedForm();
    // }, 3000);
  };

  return (
    <AnimatePresence>
      {!isSubmitted && (
        <motion.div
          initial={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.3,
            },
          }}
        >
          <h1 className={styles.formTitle}>{contactFormText.title}</h1>
          <p className={styles.formDescription}>
            {contactFormText.description}
          </p>

          <form
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            className={styles.form}
          >
            {error && (
              <p className={styles.errorMsg}>{contactFormText.error}</p>
            )}
            <Controller
              name="fullName"
              control={control}
              render={({
                field: { value, onChange, onBlur, ref },
                fieldState: { error },
              }) => (
                <Input
                  placeholder="Full name"
                  type="text"
                  disabled={loading}
                  required
                  ref={ref}
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(error)}
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              render={({
                field: { value, onChange, onBlur, ref },
                fieldState: { error },
              }) => (
                <Input
                  placeholder="Email address"
                  type="email"
                  disabled={loading}
                  required
                  ref={ref}
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(error)}
                />
              )}
            />
            <Controller
              name="subject"
              control={control}
              render={({
                field: { value, onChange, onBlur, ref },
                fieldState: { error },
              }) => (
                <Input
                  placeholder="Subject"
                  type="text"
                  disabled={loading}
                  required
                  ref={ref}
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(error)}
                />
              )}
            />
            <Controller
              name="message"
              control={control}
              render={({
                field: { value, onChange, onBlur, ref },
                fieldState: { error },
              }) => (
                <TextArea
                  placeholder="Message"
                  disabled={loading}
                  required
                  ref={ref}
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(error)}
                />
              )}
            />
            <Button
              className={styles.formSubmitBtn}
              variant={ButtonVariant.gradient}
              type="submit"
              disabled={loading}
            >
              Share your vision
            </Button>
          </form>
          <Details color={color} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
