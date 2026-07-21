"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { Toaster } from "sonner";

export const metadata = {
  title: "Sunny Software Inc - Custom Software Development",
  description:
    "Sunny Software Inc specializes in custom software development, delivering tailored solutions to meet your business needs.",
  verification: {
    google: "fyxAHon1CukGSkN3Bc2_bf0zvC27zuDReGfOUSwC0NU",
  },
};

export default function ContactLayout({ children }) {
  // QueryClient instance create karein
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* Toast notifications bhi sirf isi route par dikhenge */}
      <Toaster position="bottom-right" richColors theme="dark" />
    </QueryClientProvider>
  );
}