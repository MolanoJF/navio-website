import { Manrope} from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata = {
  title: "Sail - AI-Powered Sales Intelligence",
  description: "Transform your sales process with AI-powered insights and automation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>    
          <script src="https://navio-three.vercel.app/embed.min.js"></script>
      </head>
      <body
        className={`${manrope.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
