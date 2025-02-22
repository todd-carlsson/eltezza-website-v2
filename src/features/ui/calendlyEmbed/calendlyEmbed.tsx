import { Portal } from "@/features/layout";
import { CalendlyScreen } from "./calendlyScreen";

interface CalendlyEmbedProps {
  url: string;
}

export const CalendlyEmbed = ({ url }: CalendlyEmbedProps) => {
  return (
    <Portal root="calendly-root">
      <CalendlyScreen url={url} />
    </Portal>
  );
};
