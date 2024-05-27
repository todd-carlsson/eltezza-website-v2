import { contactFormText, privacyPolicy } from "@/constants";
import styles from "./privacy.module.scss";
import Link from "next/link";
import { Button, ButtonVariant } from "@/features/ui";
import { IoMdExit } from "react-icons/io";

export function Privacy() {
  return (
    <div className={styles.privacyPolicyContainer}>
      <div className={styles.privacyPolicy}>
        <div className={styles.intro}>
          <h1 className={styles.introTitle}>
            Eltezza Privacy <span className="textGradient">Policy</span>
          </h1>
          <Link href="/">
            <Button className={styles.homeButton} variant={ButtonVariant.main}>
              Go Home <IoMdExit size={24} />
            </Button>
          </Link>
        </div>
        {/* Intro */}
        <div className={styles.policySection}>
          <h2 className={styles.policySubTitle}>Introduction</h2>
          <p>{privacyPolicy.introduction}</p>
        </div>
        {/* Info we collect */}
        <div className={styles.policySection}>
          <h2 className={styles.policySubTitle}>
            {privacyPolicy.infoWeCollect.title}
          </h2>
          <p>{privacyPolicy.infoWeCollect.subTitle}</p>
          <ul className={styles.privacyList}>
            {privacyPolicy.infoWeCollect.info.map((item, i) => (
              <li className={styles.privacyListItem} key={i}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        {/* How we collect info */}
        <div className={styles.policySection}>
          <h2 className={styles.policySubTitle}>
            {privacyPolicy.howWeCollectInfo.title}
          </h2>
          <p>{privacyPolicy.howWeCollectInfo.subTitle}</p>
          <ul className={styles.privacyList}>
            {privacyPolicy.howWeCollectInfo.info.map((item, i) => (
              <li className={styles.privacyListItem} key={i}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        {/* Use of personal info */}
        <div className={styles.policySection}>
          <h2 className={styles.policySubTitle}>
            {privacyPolicy.useOfInfo.title}
          </h2>
          <p>{privacyPolicy.useOfInfo.subTitle}</p>
          <ul className={styles.privacyList}>
            {privacyPolicy.useOfInfo.info.map((item, i) => (
              <li className={styles.privacyListItem} key={i}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        {/* Sharing of personal info */}
        <div className={styles.policySection}>
          <h2 className={styles.policySubTitle}>
            {privacyPolicy.sharingOfInfo.title}
          </h2>
          <p>{privacyPolicy.sharingOfInfo.subTitle}</p>
          <ul className={styles.privacyList}>
            {privacyPolicy.sharingOfInfo.info.map((item, i) => (
              <li className={styles.privacyListItem} key={i}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        {/* Data security */}
        <div className={styles.policySection}>
          <h2 className={styles.policySubTitle}>
            {privacyPolicy.dataSecurity.title}
          </h2>
          <p>{privacyPolicy.dataSecurity.description}</p>
        </div>
        {/* Your rights */}
        <div className={styles.policySection}>
          <h2 className={styles.policySubTitle}>
            {privacyPolicy.yourRights.title}
          </h2>
          <p>{privacyPolicy.yourRights.subTitle}</p>
          <ul className={styles.privacyList}>
            {privacyPolicy.yourRights.info.map((item, i) => (
              <li className={styles.privacyListItem} key={i}>
                {item}
              </li>
            ))}
          </ul>
          <p>
            To exercise these rights, please contact us at{" "}
            <a
              className={styles.policyLink}
              href={`mailto:${contactFormText.email}`}
            >
              {contactFormText.email}
            </a>{" "}
            or call us at{" "}
            <a
              className={styles.policyLink}
              href={`tel:+${contactFormText.phone.replace(/\s/g, "")}`}
            >
              {contactFormText.phone}
            </a>
            .
          </p>
        </div>
        {/* Changes to Policy */}
        <div className={styles.policySection}>
          <h2 className={styles.policySubTitle}>
            {privacyPolicy.changesToPolicy.title}
          </h2>
          <p>{privacyPolicy.changesToPolicy.description}</p>
        </div>
        {/* Contact Us*/}
        <div className={styles.policySection}>
          <h2 className={styles.policySubTitle}>
            {privacyPolicy.contact.title}
          </h2>
          <p>{privacyPolicy.contact.subTitle}</p>
          <br />
          <h3>Eltezza</h3>
          <div>
            Email:{" "}
            <a
              className={styles.policyLink}
              href={`mailto:${contactFormText.email}`}
            >
              {contactFormText.email}
            </a>
          </div>
          <div>
            Phone:{" "}
            <a
              className={styles.policyLink}
              href={`mailto:${contactFormText.phone.replace(/\s/g, "")}`}
            >
              {contactFormText.phone}
            </a>
          </div>
          <br />
          <p>{privacyPolicy.contact.conclusion}</p>
        </div>
      </div>
    </div>
  );
}
