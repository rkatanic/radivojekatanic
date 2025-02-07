import { Inter, Nunito } from "next/font/google";
import { ThemeProvider } from "./_components/ThemeProvider";

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
      className={`${font.className} ${interFont.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-white antialiased dark:bg-zinc-900">
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
