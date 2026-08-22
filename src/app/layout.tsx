import type { Metadata } from "next";
import { DM_Sans, Lora } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components/site-shell";

const sans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});
const serif = Lora({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Safe-Lynk Nursing and Care Agency",
  description: "Healthcare Recruitment. Reliable People. The Right Fit.",
  icons: { icon: "/icon.jpeg" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body><Header /><main>{children}</main><Footer /></body>
    </html>
  );
}
