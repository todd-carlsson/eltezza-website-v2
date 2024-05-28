import { metaData } from "@/constants";
import { Privacy } from "@/features/layout";
import MetaData from "@/metadata";
import { Scroll } from "@/utils/scroll";
import React, { useEffect } from "react";

function PrivacyPolicy() {
  useEffect(() => {
    Scroll(0, "auto");
  }, []);
  return (
    <>
      <MetaData data={metaData.privacy} />
      <Privacy />
    </>
  );
}

export default PrivacyPolicy;
