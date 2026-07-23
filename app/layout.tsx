import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Block Atlas | Crypto Without the Hype",
  description: "Clear, independent crypto education covering networks, security, risk, and digital ownership.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
