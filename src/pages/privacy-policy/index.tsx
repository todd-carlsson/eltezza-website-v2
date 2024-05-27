import { metaData } from "@/constants";
import { Privacy } from "@/features/layout";
import MetaData from "@/metadata";
import React from "react";

function PrivacyPolicy() {
  return (
    <>
      <MetaData data={metaData.privacy} />
      <Privacy />
    </>
  );
}

export default PrivacyPolicy;
