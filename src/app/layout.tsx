import "./globals.css";
import type { Metadata } from "next";
import { Nunito_Sans, Montserrat } from "next/font/google";
import { Footer, Layout, Navbar } from "@/components";
import FloatingWhatsapp from "./whatsapp";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-nunito",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

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
        {/* Facebook Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '872008484611145');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=872008484611145&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Facebook Pixel Code */}
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
      <body className={`${nunito.className} ${nunito.variable} ${montserrat.variable}`}>
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

