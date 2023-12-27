import "./globals.css";
import type { Metadata } from "next";
import { Roboto, Montserrat } from "next/font/google";
import { Footer, Layout, Navbar } from "@/components";
import FloatingWhatsapp from "./whatsapp";

const roboto = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "EV Life",
  description:
    "Introducing Tailwind Campaign Page, an all-inclusive and visually captivating campaign landing page template built on the foundation of Tailwind CSS and Material Tailwind.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          data-site="YOUR_DOMAIN_HERE"
          src="https://api.nepcha.com/js/nepcha-analytics.js"
        ></script>
        <link rel="shortcut icon" href="/logos/logo-ev-life.png" type="image/png" />
      </head>
      <body className={roboto.className}>
          <Layout>
            <Navbar />
            {children}
            <Footer />
            <FloatingWhatsapp />
          </Layout>
      </body >
    </html >
  );
}

