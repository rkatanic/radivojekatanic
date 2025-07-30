import Header from "./_components/Header";
import HeroSection from "@/components/components/HeroSection";
import StatsSection from "@/components/components/StatsSection";
import ServicesSection from "@/components/components/ServicesSection";
import TechnologiesSection from "@/components/TechnologiesSection";

const Home = () => (
  <div className="mx-auto min-h-screen max-w-5xl px-4 py-4 md:py-16 xl:px-0">
    {/* <Header /> */}
    <HeroSection
      title="Driving excellence in all aspects of your business."
      description="From modern web solutions to tailored digital products, I help
            companies grow their businesses and enhance their user experiences."
      badge={
        <span
          data-slot="badge"
          className="bg-background focus-visible:border-ring focus-visible:ring-ring/50 inline-flex w-fit shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full border px-3 py-1 text-xs font-medium whitespace-nowrap sm:text-sm"
        >
          <div className="size-1.5 rounded-full bg-amber-500 dark:bg-amber-400"></div>
          Available for part-time opportunities
        </span>
      }
    />
    <StatsSection />
    <ServicesSection />
    <TechnologiesSection />

    <HeroSection
      className="border-t-0"
      title=" Lets build something cool together."
      description="Have a question, or just want to say hello? Feel free to send me an email."
    />
  </div>
);

export default Home;
