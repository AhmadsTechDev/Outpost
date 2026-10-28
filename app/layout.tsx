import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "radix-ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import AppShell from "@/components/AppShell";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Font display utama — Bricolage Grotesque dipakai untuk heading/judul agar beda dari body text
const bricolage = Bricolage_Grotesque({
  variable: "--font-display", // CSS var yang bisa dipanggil di Tailwind: `font-[var(--font-display)]` atau lewat config
  subsets: ["latin"], // muat subset Latin saja supaya ukuran bundle tetap kecil
  axes: ["opsz"], // optical size: font otomatis menyesuaikan ketebalan stroke sesuai ukuran render
});

export const metadata: Metadata = {
  title: "Outpost: Agentic Workspace",
  description:
    "An AI agent that draws and writes alongside you and your team, live.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <ClerkProvider appearance={{
      theme: dark,
      variables: { colorPrimary: "oklch(0.74 0.16 55)" }
    }}>
      <html
        lang="en"
        className={`${geistSans.variable} ${geistMono.variable} ${bricolage.variable} h-full antialiased`}
      >
        <body className="min-h-full flex flex-col">
          <TooltipProvider>
            <AppShell>{children}</AppShell>
          </TooltipProvider>
          <Toaster richColors />
        </body>
      </html>
    </ClerkProvider>
  );
}
