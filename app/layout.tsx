import { Inter, Red_Hat_Display } from "next/font/google";
import { ThemeProvider } from "./_components/ThemeProvider";

import "../globals.css";

const font = Inter({
  subsets: ["latin"],
});

const headingFont = Red_Hat_Display({
  subsets: ["latin"],
  variable: "--font-red-hat-display",
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
    <html
      lang="en"
      className={`${font.className} ${headingFont.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-neutral-900 text-neutral-200">
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
