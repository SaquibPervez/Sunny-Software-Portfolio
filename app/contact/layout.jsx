import QueryProvider from "../../providers/QueryProvider";
import { Toaster } from "sonner";

export const metadata = {
  title: "Sunny Software Inc - Contact Us",
  description:
    "Get in touch with Sunny Software Inc. Let's start a conversation about your custom software development needs.",
  verification: {
    google: "fyxAHon1CukGSkN3Bc2_bf0zvC27zuDReGfOUSwC0NU",
  },
};

export default function ContactLayout({ children }) {
  return (
    <QueryProvider>
      {children}
      <Toaster position="bottom-right" richColors theme="dark" />
    </QueryProvider>
  );
}