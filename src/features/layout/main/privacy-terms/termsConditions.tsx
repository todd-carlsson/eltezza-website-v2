import Link from "next/link";
import styles from "./privacyTerms.module.scss";
import { contactFormText, termsAndConditions } from "@/constants";
import { useIsPresent, motion } from "framer-motion";
import { useRouter } from "next/router";
import Image from "next/image";

export function TermsConditions() {
  const isPresent = useIsPresent();
  const router = useRouter();
  return (
    <motion.div className={styles.container}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <Image
            src="/images/eltezza-home-logo.png"
            alt="Eltezza"
            width={131}
            height={22}
            className={styles.logo}
          />
        </Link>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.intro}>
          <h1 className={styles.introTitle}>
            Terms & <span className="textGradient">Conditions</span>
          </h1>
        </div>
        {/* Intro */}
        <div className={styles.section}>
          <h2 className={styles.subTitle}>Introduction</h2>
          <p>{termsAndConditions.introduction}</p>
        </div>
        {/* Services */}
        <div className={styles.section}>
          <h2 className={styles.subTitle}>
            {termsAndConditions.services.title}
          </h2>
          <p>{termsAndConditions.services.description}</p>
        </div>
        {/* Use of website */}
        <div className={styles.section}>
          <h2 className={styles.subTitle}>
            {termsAndConditions.useOfWebsite.title}
          </h2>
          <p>{termsAndConditions.useOfWebsite.subTitle}</p>
          <ul className={styles.list}>
            {termsAndConditions.useOfWebsite.info.map((item, i) => (
              <li className={styles.listItem} key={i}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        {/* Intellectual Property */}
        <div className={styles.section}>
          <h2 className={styles.subTitle}>
            {termsAndConditions.intellectualProperty.title}
          </h2>
          <p>{termsAndConditions.intellectualProperty.description}</p>
        </div>
        {/* User Content */}
        <div className={styles.section}>
          <h2 className={styles.subTitle}>
            {termsAndConditions.userContent.title}
          </h2>
          <p>{termsAndConditions.userContent.description}</p>
        </div>
        {/* Confidentiality */}
        <div className={styles.section}>
          <h2 className={styles.subTitle}>
            {termsAndConditions.confidentiality.title}
          </h2>
          <p>{termsAndConditions.confidentiality.description}</p>
        </div>
        {/* Payment Terms*/}
        <div className={styles.section}>
          <h2 className={styles.subTitle}>
            {termsAndConditions.paymentTerms.title}
          </h2>
          <p>{termsAndConditions.paymentTerms.description}</p>
        </div>
        {/* Limitation of Liability */}
        <div className={styles.section}>
          <h2 className={styles.subTitle}>
            {termsAndConditions.limitationLiability.title}
          </h2>
          <p>{termsAndConditions.limitationLiability.description}</p>
        </div>
        {/* Warranties and Disclaimers */}
        <div className={styles.section}>
          <h2 className={styles.subTitle}>
            {termsAndConditions.warranties.title}
          </h2>
          <p>{termsAndConditions.warranties.description}</p>
        </div>
        {/* Termination */}
        <div className={styles.section}>
          <h2 className={styles.subTitle}>
            {termsAndConditions.termination.title}
          </h2>
          <p>{termsAndConditions.termination.description}</p>
        </div>
        {/* Governing Law */}
        <div className={styles.section}>
          <h2 className={styles.subTitle}>
            {termsAndConditions.governingLaw.title}
          </h2>
          <p>{termsAndConditions.governingLaw.description}</p>
        </div>
        {/* Changes to These Terms*/}
        <div className={styles.section}>
          <h2 className={styles.subTitle}>
            {termsAndConditions.changesToTerms.title}
          </h2>
          <p>{termsAndConditions.changesToTerms.description}</p>
        </div>
        {/* Contact Us*/}
        <div className={styles.section}>
          <h2 className={styles.subTitle}>
            {termsAndConditions.contact.title}
          </h2>
          <p>{termsAndConditions.contact.subTitle}</p>
          <br />
          <h3>Eltezza</h3>
          <div>
            Email:{" "}
            <a className={styles.link} href={`mailto:${contactFormText.email}`}>
              {contactFormText.email}
            </a>
          </div>
          <div>
            Phone:{" "}
            <a
              className={styles.link}
              href={`tel:+${contactFormText.phone.replace(/\s/g, "")}`}
            >
              {contactFormText.phone}
            </a>
          </div>
          <br />
          <p>{termsAndConditions.contact.conclusion}</p>
        </div>
      </div>
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{
          scaleX: 0,
          transition: { duration: 0.5, ease: "circOut" },
        }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
        style={{
          originX: isPresent ? 0 : 1,
          backgroundColor:
            router.pathname === "/creative"
              ? "var(--adobe-purple)"
              : "var(--ez-orange)",
        }}
        className={styles.privacyScreen}
      />
    </motion.div>
  );
}
