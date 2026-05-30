import { Inter } from "next/font/google";
import { ThemeProvider } from "../components/ThemeProvider";

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
    <html lang="en" className={`${font.className}`} suppressHydrationWarning>
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
