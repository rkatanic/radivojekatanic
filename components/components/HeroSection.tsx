import { BackgroundLines } from "../ui/background-lines";

const HeroSection = () => (
  <section className="relative overflow-hidden border">
    <div
      className="absolute inset-0 z-0"
      style={{
        background: "var(--background)",
        backgroundImage:
          "radial-gradient(circle at 1px 1px, var(--border) 1px, transparent 0)",
        backgroundSize: "16px 16px",
      }}
    />

    <div className="relative w-full py-20">
      <BackgroundLines>
        <div className="relative mx-auto max-w-2xl space-y-6 text-center">
          <span
            data-slot="badge"
            className="bg-background focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground inline-flex w-fit shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full border px-3 py-1 text-sm font-medium whitespace-nowrap"
          >
            <div className="size-1.5 rounded-full bg-amber-500 dark:bg-amber-400"></div>
            Available for part-time opportunities
          </span>
          <h1 className="text-3xl font-bold tracking-tighter text-balance md:text-5xl">
            Driving excellence in all aspects of your business.
          </h1>
          <p className="text-muted-foreground text-lg/relaxed">
            From modern web solutions to tailored digital products, I help
            companies grow their businesses and enhance their user experiences.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button
              data-slot="button"
              className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-full px-6 text-base font-medium whitespace-nowrap shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
            >
              Lets connect
            </button>

            <button
              data-slot="button"
              className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-background hover:bg-accent hover:text-accent-foreground dark:bg-background dark:border-input dark:hover:bg-secondary inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-full border px-6 py-2 text-base font-medium whitespace-nowrap shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
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
