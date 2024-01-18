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
    "Explore our range of EV chargers for home and commercial use. High-quality charging solutions for electric vehicles.",
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
        <meta property="og:title" content="EV Life" />
        <meta property="og:description" content="Explore our range of EV chargers for home and commercial use. High-quality charging solutions for electric vehicles." />
        <meta property="og:image" content="/logos/logo-ev-life.png" />
        <meta property="og:url" content="https://www.evlife.co.in/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="EV Life" />
        <meta name="twitter:description" content="Explore our range of EV chargers for home and commercial use. High-quality charging solutions for electric vehicles." />
        <meta name="twitter:image" content="/logos/logo-ev-life.png" />
        <link rel="shortcut icon" href="/logos/logo-ev-life.png" type="image/png" />
      </head>
      <body className={roboto.className}>
        <Layout>
          {/* <Navbar /> */}
          {children}
          <Footer />
          <FloatingWhatsapp />
        </Layout>
      </body >
    </html >
  );
}

