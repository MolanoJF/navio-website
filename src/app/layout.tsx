import { Manrope} from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata = {
  title: "Navio - Software, effortless",
  description: "AI expert that lives in your product, guiding users and automating tasks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>    
      </head>
      <body
        className={`${manrope.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
