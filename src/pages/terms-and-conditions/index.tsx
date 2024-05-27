import { metaData } from "@/constants";
import TermsConditions from "@/features/layout/privacy-terms/termsConditions";
import MetaData from "@/metadata";
import React from "react";

function TermsConditionsPage() {
  return (
    <>
      <MetaData data={metaData.termsConditions} />
      <TermsConditions />
    </>
  );
}

export default TermsConditionsPage;
