import { contactFormText, privacyPolicy } from "@/constants";
import styles from "./privacyTerms.module.scss";
import Link from "next/link";
import { useIsPresent, motion } from "framer-motion";
import { useRouter } from "next/router";
import Image from "next/image";

export function Privacy() {
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
            Privacy <span className="textGradient">Policy</span>
          </h1>
        </div>
        {/* Intro */}
        <div className={styles.section}>
          <h2 className={styles.subTitle}>Introduction</h2>
          <p>{privacyPolicy.introduction}</p>
        </div>
        {/* Info we collect */}
        <div className={styles.section}>
          <h2 className={styles.subTitle}>
            {privacyPolicy.infoWeCollect.title}
          </h2>
          <p>{privacyPolicy.infoWeCollect.subTitle}</p>
          <ul className={styles.list}>
            {privacyPolicy.infoWeCollect.info.map((item, i) => (
              <li className={styles.listItem} key={i}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        {/* How we collect info */}
        <div className={styles.section}>
          <h2 className={styles.subTitle}>
            {privacyPolicy.howWeCollectInfo.title}
          </h2>
          <p>{privacyPolicy.howWeCollectInfo.subTitle}</p>
          <ul className={styles.list}>
            {privacyPolicy.howWeCollectInfo.info.map((item, i) => (
              <li className={styles.listItem} key={i}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        {/* Use of personal info */}
        <div className={styles.section}>
          <h2 className={styles.subTitle}>{privacyPolicy.useOfInfo.title}</h2>
          <p>{privacyPolicy.useOfInfo.subTitle}</p>
          <ul className={styles.list}>
            {privacyPolicy.useOfInfo.info.map((item, i) => (
              <li className={styles.listItem} key={i}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        {/* Sharing of personal info */}
        <div className={styles.section}>
          <h2 className={styles.subTitle}>
            {privacyPolicy.sharingOfInfo.title}
          </h2>
          <p>{privacyPolicy.sharingOfInfo.subTitle}</p>
          <ul className={styles.list}>
            {privacyPolicy.sharingOfInfo.info.map((item, i) => (
              <li className={styles.listItem} key={i}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        {/* Data security */}
        <div className={styles.section}>
          <h2 className={styles.subTitle}>
            {privacyPolicy.dataSecurity.title}
          </h2>
          <p>{privacyPolicy.dataSecurity.description}</p>
        </div>
        {/* Your rights */}
        <div className={styles.section}>
          <h2 className={styles.subTitle}>{privacyPolicy.yourRights.title}</h2>
          <p>{privacyPolicy.yourRights.subTitle}</p>
          <ul className={styles.list}>
            {privacyPolicy.yourRights.info.map((item, i) => (
              <li className={styles.listItem} key={i}>
                {item}
              </li>
            ))}
          </ul>
          <p>
            To exercise these rights, please contact us at{" "}
            <a className={styles.link} href={`mailto:${contactFormText.email}`}>
              {contactFormText.email}
            </a>{" "}
            or call us at{" "}
            <a
              className={styles.link}
              href={`tel:+${contactFormText.phone.replace(/\s/g, "")}`}
            >
              {contactFormText.phone}
            </a>
            .
          </p>
        </div>
        {/* Changes to Policy */}
        <div className={styles.section}>
          <h2 className={styles.subTitle}>
            {privacyPolicy.changesToPolicy.title}
          </h2>
          <p>{privacyPolicy.changesToPolicy.description}</p>
        </div>
        {/* Contact Us*/}
        <div className={styles.section}>
          <h2 className={styles.subTitle}>{privacyPolicy.contact.title}</h2>
          <p>{privacyPolicy.contact.subTitle}</p>
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
          <p>{privacyPolicy.contact.conclusion}</p>
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
