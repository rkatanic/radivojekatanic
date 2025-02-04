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
    <html lang="en" className={`${font.className}`} suppressHydrationWarning>
      <body className="">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <div className="">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
