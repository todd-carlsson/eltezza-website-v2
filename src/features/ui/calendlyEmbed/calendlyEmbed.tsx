import { Portal } from "@/features/layout";
import { CalendlyScreen } from "./calendlyScreen";

export const CalendlyEmbed = (url: string) => {
  return (
    <Portal root="calendly-root">
      <CalendlyScreen url={url} />
    </Portal>
  );
};
