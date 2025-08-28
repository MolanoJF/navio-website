import { Manrope, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant-garamond",
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                  if(!window.navio || window.navio("getState") !== "initialized"){
                      // Load CSS first
                      const loadCSS = function(){
                          if (!document.querySelector('link[href*="naviowidget.vercel.app/widget.css"]')) {
                              const link = document.createElement('link');
                              link.rel = 'stylesheet';
                              link.href = 'https://naviowidget.vercel.app/widget.css';
                              document.head.appendChild(link);
                              console.log('✅ NavioWidget CSS loaded');
                          }
                      };

                      // Create proxy for early calls
                      window.navio = (...arguments) => {
                          if(!window.navio.q){ window.navio.q = [] }
                          window.navio.q.push(arguments)
                      };
                      window.navio = new Proxy(window.navio, {
                          get(target, prop){
                              if(prop === "q"){ return target.q }
                              return (...args) => target(prop, ...args)
                          }
                      });

                      // Load CSS immediately
                      loadCSS();

                      // Load script and auto-create widget
                      const onLoad = function(){
                          const script = document.createElement("script");
                          script.src = "https://naviowidget.vercel.app/widget.js";
                          script.onload = function() {
                              if (window.NavioWidget) {
                                  const widgetInstance = new window.NavioWidget();
                                  // Process queued calls...
                                  window.navio = widgetInstance;
                              }
                          };
                          document.body.appendChild(script);
                      };

                      if(document.readyState === "complete"){
                          onLoad();
                      } else {
                          window.addEventListener("load", onLoad);
                      }
                  }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${manrope.variable} ${cormorantGaramond.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
