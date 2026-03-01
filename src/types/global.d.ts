export {};

declare global {
  interface Window {
    fbq?: (event: string, name: string, options?: object) => void;
  }
}
