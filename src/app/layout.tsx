import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Footer, Layout, Navbar } from "@/components";
import { GlobalContextProvider } from "./Context/store";


const roboto = Roboto({
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
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={roboto.className}>
        <GlobalContextProvider>
        <Layout>
          <Navbar />
          {children}
          <Footer />
        </Layout>
        </GlobalContextProvider>
      </body >
    </html >
  );
}
