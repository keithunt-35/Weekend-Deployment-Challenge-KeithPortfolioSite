import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://keiths-site-gamma.vercel.app"),
  title: {
    default: "Keith Tugume — Software Engineer, Web3 & IoT Developer · Kampala, Uganda",
    template: "%s · Keith Tugume",
  },
  description:
    "Keith Tugume is a software engineering student at Makerere University building at the intersection of Web3, IoT, and machine learning. Open to internships, collabs, and ambitious projects.",
  keywords: [
    "Keith Tugume",
    "Software Engineer Uganda",
    "Web3 developer Uganda",
    "IoT developer Makerere",
    "Blockchain developer Africa",
    "Full-stack developer Kampala",
    "Next.js portfolio",
    "Smart contract developer East Africa",
  ],
  authors: [{ name: "Keith Tugume", url: "https://github.com/keithunt-35" }],
  creator: "Keith Tugume",
  openGraph: {
    type: "website",
    siteName: "Keith Tugume",
    locale: "en_US",
    url: "https://keiths-site-gamma.vercel.app",
    title: "Keith Tugume — Software Engineer, Web3 & IoT Developer · Kampala, Uganda",
    description:
      "Building at the intersection of Web3, IoT, and machine learning. BSc Software Engineering student at Makerere University, Uganda.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Keith Tugume — Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@keithunt_35",
    title: "Keith Tugume — Software Engineer, Web3 & IoT Developer",
    description:
      "Building the tech Africa deserves. Web3 · IoT · ML · Full-Stack. Kampala, Uganda 🇺🇬",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
