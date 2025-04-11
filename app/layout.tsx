import { Inter, Poppins } from "next/font/google";
import { ThemeProvider } from "./_components/ThemeProvider";

import "../globals.css";

const font = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
      <body className=" bg-[hsl(214,8%,9%)]">
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
