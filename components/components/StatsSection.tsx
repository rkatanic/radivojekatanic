const StatsSection = () => (
  <section className="bg-background mx-auto grid max-w-5xl grid-cols-1 divide-x-0 border border-t-0 text-center sm:grid-cols-2 lg:grid-cols-3 lg:divide-x">
    <div className="col-span-1 py-16">
      <h3 className="mb-2 text-4xl font-bold">5+</h3>
      <p className="text-muted-foreground text-lg/relaxed">
        Years Of Experience
      </p>
    </div>
    <div className="col-span-1 py-16">
      <h3 className="mb-2 text-4xl font-bold">10+</h3>
      <p className="text-muted-foreground text-lg/relaxed">
        Technologies Mastered
      </p>
    </div>
    <div className="col-span-1 py-16">
      <h3 className="mb-2 text-4xl font-bold">100%</h3>
      <p className="text-muted-foreground text-lg/relaxed">
        Client Satisfaction Rating
      </p>
    </div>
  </section>
);

export default StatsSection;
