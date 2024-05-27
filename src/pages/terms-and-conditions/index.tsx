import { metaData } from "@/constants";
import { TermsConditions } from "@/features/layout";
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
