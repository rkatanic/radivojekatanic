import { Inter } from "next/font/google";
import "../globals.css";
import Link from "next/link";

const font = Inter({ subsets: ["latin"] });

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
    <html lang="en" className={font.className}>
      <body>
        <div className="min-h-screen bg-zinc-900 text-zinc-400">
          <div className="mx-auto flex w-full max-w-2xl items-center justify-between px-4 py-8 sm:pb-8 sm:pt-16">
            <div className="flex gap-6 font-medium">
              <Link href="/" className="font-medium text-zinc-200">
                About
              </Link>
            </div>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
