import { Manrope} from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata = {
  title: "Navio - Software, effortless",
  description: "AI expert that lives in your product, guiding users and automating tasks.",
  icons: {
    icon: "/NAVIO.svg",
    apple: "/NAVIO.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/NAVIO.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/NAVIO.svg" />
      </head>
      <body
        className={`${manrope.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
