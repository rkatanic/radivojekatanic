const StatsSection = () => (
  <section className="bg-background mx-auto grid max-w-5xl grid-cols-1 divide-y border border-t-0 text-center md:grid-cols-3 md:divide-x md:divide-y-0">
    <div className="col-span-1 py-8 md:py-16">
      <h3 className="mb-2 text-3xl font-bold sm:text-4xl">5+</h3>
      <p className="text-muted-foreground text-base sm:text-lg/relaxed">
        Years Of Experience
      </p>
    </div>
    <div className="col-span-1 py-8 md:py-16">
      <h3 className="mb-2 text-3xl font-bold sm:text-4xl">10+</h3>
      <p className="text-muted-foreground text-base sm:text-lg/relaxed">
        Technologies Mastered
      </p>
    </div>
    <div className="col-span-1 py-8 md:py-16">
      <h3 className="mb-2 text-3xl font-bold sm:text-4xl">100%</h3>
      <p className="text-muted-foreground text-base sm:text-lg/relaxed">
        Client Satisfaction Rating
      </p>
    </div>
  </section>
);

export default StatsSection;
