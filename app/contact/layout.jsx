"use client"; // Zaroori hai kyunki Provider React Context use karta hai

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { Toaster } from "sonner"; // Toaster bhi yahin laga dete hain

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