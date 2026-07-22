import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maya Brooks Real Estate | Portland, Oregon",
  description: "Thoughtful, expert real estate guidance for Portland home buyers and sellers.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
