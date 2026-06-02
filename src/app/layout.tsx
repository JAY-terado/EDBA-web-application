import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EDBA | AI-Powered Education Management Platform",
  description: "Transform your institute with EDBA, the next-generation intelligent Institute LMS. Modern admin portal, AI proctoring, parent messaging, real-time safety, and student insights in one premium SaaS dashboard.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body className="min-h-screen bg-[#fcfcfd] text-zinc-900 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
