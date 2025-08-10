import { Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-context";

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
      <body
        className={`${manrope.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
