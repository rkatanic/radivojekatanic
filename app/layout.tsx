import { Inter } from "next/font/google";
import { ThemeProvider } from "./_components/ThemeProvider";

import "../globals.css";

const font = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Radivoje Katanic",
  description: "Software Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={font.className} suppressHydrationWarning>
      <body className="dark:bg-neutral-950">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <div className="relative min-h-screen overflow-hidden">
            <div className="absolute left-1/2 top-[-60%] -z-10 h-[2000px] w-[2000px] -translate-x-1/2 bg-[radial-gradient(#5EEAD4_0%,rgba(94,234,212,0)_60%)] opacity-5"></div>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
