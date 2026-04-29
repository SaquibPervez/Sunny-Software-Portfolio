"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { Toaster } from "sonner";

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