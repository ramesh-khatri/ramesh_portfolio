import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Ramesh Khatri | Principal Software QA Engineer",
  description:
    "Portfolio for Ramesh Khatri, a Principal Software QA Engineer focused on test automation, regression strategy, API validation, and quality leadership.",
  keywords: [
    "Ramesh Khatri",
    "Software QA Engineer",
    "Principal QA Engineer",
    "Test Automation",
    "Playwright",
    "Selenium",
    "API Testing",
  ],
  openGraph: {
    title: "Ramesh Khatri | Principal Software QA Engineer",
    description:
      "Quality-focused portfolio covering QA leadership, automation frameworks, accessibility, and product delivery.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ramesh Khatri | Principal Software QA Engineer",
    description:
      "QA portfolio covering automation, testing strategy, and hands-on delivery experience across multiple products.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
