import { ReactElement } from "react";
import { BackgroundLines } from "../ui/background-lines";
import Link from "next/link";
import { cn } from "../lib/utils";

interface Props {
  title: string;
  description: string;
  badge?: ReactElement;
  className?: string;
}

const HeroSection = ({ title, description, badge, className }: Props) => (
  <section className={cn("relative overflow-hidden border", className)}>
    <div
      className="absolute inset-0 z-0"
      style={{
        background: "var(--background)",
        backgroundImage:
          "radial-gradient(circle at 1px 1px, var(--border) 1px, transparent 0)",
        backgroundSize: "16px 16px",
      }}
    />

    <div className="relative w-full py-16 sm:py-20">
      <BackgroundLines>
        <div className="relative mx-auto max-w-2xl space-y-6 px-6 text-center">
          {badge}
          <h1 className="text-3xl font-bold tracking-tighter text-balance md:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="text-muted-foreground max-w-2xl text-base text-balance sm:text-lg/relaxed">
            {description}
          </p>
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <Link
              href="mailto:rkatanic@outlook.com"
              className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-9 shrink-0 items-center justify-center gap-2 rounded-full px-6 text-sm font-medium whitespace-nowrap shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-4 sm:h-10 sm:text-base [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
            >
              Lets connect
            </Link>

            <button
              data-slot="button"
              className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-background hover:bg-accent hover:text-accent-foreground dark:bg-background dark:border-input dark:hover:bg-secondary inline-flex h-9 shrink-0 items-center justify-center gap-2 rounded-full border px-6 py-2 text-sm font-medium whitespace-nowrap shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-3 sm:h-10 sm:text-base [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
            >
              Read more
            </button>
          </div>
        </div>
      </BackgroundLines>
    </div>
  </section>
);

export default HeroSection;
