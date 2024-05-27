import { metaData } from "@/constants";
import MetaData from "@/metadata";
import React from "react";

function PrivacyPolicy() {
  return (
    <>
      <MetaData data={metaData.privacy} />
      <div>PrivacyPolicy</div>
    </>
  );
}

export default PrivacyPolicy;
