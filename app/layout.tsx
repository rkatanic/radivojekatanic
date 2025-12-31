import { Inter, Nunito } from "next/font/google";
import { ThemeProvider } from "./_components/ThemeProvider";
import { GeistSans } from "geist/font/sans";

import "../globals.css";

const font = Nunito({
  subsets: ["latin"],
});

export const metadata = {
  title: "Radivoje Katanic",
  description: "Software Developer",
};

const interFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.className} [font-feature-settings:"ss02"]`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <div className="min-h-screen">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
