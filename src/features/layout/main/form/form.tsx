import { Button, ButtonVariant, Input, TextArea } from "@/features/ui";
import styles from "./form.module.scss";
import { contactFormText } from "@/constants";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MdError } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Details from "./details";

interface FormProps {
  isSubmitted: boolean;
  submittedForm: () => void;
  color: "--ez-orange" | "--adobe-purple";
}

const formSchema = z.object({
  fullName: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    })
    .min(1, { message: "Please enter a name" }),
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string",
    })
    .email({
      message: "Please enter an email",
    })
    .min(5),
  subject: z
    .string({
      required_error: "Subject is required",
      invalid_type_error: "Subject must be a string",
    })
    .min(1, { message: "Please enter a subject for your message" }),
  message: z
    .string({
      required_error: "Message is required",
      invalid_type_error: "Message must be a string",
    })
    .min(5, { message: "Please enter a message" }),
});

type FormValues = z.infer<typeof formSchema>;

export default function Form({ isSubmitted, submittedForm, color }: FormProps) {
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState(false);

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
      setFormError(false);
      setLoading(true);
      const res = await fetch("/api/mail", {
        method: "post",
        body: JSON.stringify(data),
      });
      if (res.status === 500) {
        setFormError(true);
      } else {
        setLoading(false);
        submittedForm();
      }
    } catch (error) {
      console.log(error);
      setFormError(true);
    } finally {
      setLoading(false);
    }
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
            {formError && (
              <p className={styles.errorMsg}>{contactFormText.error}</p>
            )}
            <Controller
              name="fullName"
              control={control}
              render={({
                field: { value, onChange, onBlur, ref },
                fieldState: { error, isTouched },
              }) => (
                <div className={styles.inputWrap}>
                  <Input
                    placeholder="Full name"
                    type="text"
                    aria-invalid={Boolean(error)}
                    aria-disabled={loading}
                    isValid={isTouched && !error}
                    aria-required
                    hasValue={!!value.length}
                    disabled={loading}
                    required
                    ref={ref}
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(error)}
                  />
                  {error && (
                    <div className={styles.formFeedback}>
                      <MdError size={18} color="red" />
                      <span role="alert">{error?.message}</span>
                    </div>
                  )}
                </div>
              )}
            />
            <Controller
              name="email"
              control={control}
              render={({
                field: { value, onChange, onBlur, ref },
                fieldState: { error, isTouched },
              }) => (
                <div className={styles.inputWrap}>
                  <Input
                    placeholder="Email address"
                    type="email"
                    aria-disabled={loading}
                    aria-invalid={Boolean(error)}
                    aria-required
                    required
                    isValid={isTouched && !error}
                    hasValue={!!value.length}
                    disabled={loading}
                    ref={ref}
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(error)}
                  />
                  {error && (
                    <div className={styles.formFeedback}>
                      <MdError size={18} color="red" />
                      <span role="alert">{error?.message}</span>
                    </div>
                  )}
                </div>
              )}
            />
            <Controller
              name="subject"
              control={control}
              render={({
                field: { value, onChange, onBlur, ref },
                fieldState: { error, isTouched },
              }) => (
                <div className={styles.inputWrap}>
                  <Input
                    placeholder="Subject"
                    type="text"
                    aria-invalid={Boolean(error)}
                    aria-disabled={loading}
                    aria-required
                    disabled={loading}
                    required
                    isValid={isTouched && !error}
                    hasValue={!!value.length}
                    ref={ref}
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(error)}
                  />
                  {error && (
                    <div className={styles.formFeedback}>
                      <MdError size={18} color="red" />
                      <span role="alert">{error?.message}</span>
                    </div>
                  )}
                </div>
              )}
            />
            <Controller
              name="message"
              control={control}
              render={({
                field: { value, onChange, onBlur, ref },
                fieldState: { error, isTouched },
              }) => (
                <div className={styles.inputWrap}>
                  <TextArea
                    placeholder="Message"
                    disabled={loading}
                    aria-invalid={Boolean(error)}
                    aria-disabled={loading}
                    aria-required
                    required
                    isValid={isTouched && !error}
                    hasValue={!!value.length}
                    ref={ref}
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(error)}
                  />
                  {error && (
                    <div className={styles.formFeedback}>
                      <MdError size={18} color="red" />
                      <span role="alert">{error?.message}</span>
                    </div>
                  )}
                </div>
              )}
            />
            <Button
              className={styles.formSubmitBtn}
              variant={ButtonVariant.gradient}
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <span className={styles.loader} />
              ) : (
                "Share your vision"
              )}
            </Button>
          </form>
          <Details color={color} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
