import { metaData } from "@/constants";
import { TermsConditions } from "@/features/layout";
import MetaData from "@/metadata";
import { Scroll } from "@/utils/scroll";
import React, { useEffect } from "react";

function TermsConditionsPage() {
  useEffect(() => {
    Scroll(0, "auto");
  }, []);
  return (
    <>
      <MetaData data={metaData.termsConditions} />
      <TermsConditions />
    </>
  );
}

export default TermsConditionsPage;
