const Home = () => (
  <div className="prose mx-auto my-24 max-w-2xl px-4 dark:prose-invert prose-headings:font-semibold prose-headings:tracking-tight md:px-0">
    <h1 className="text-3xl leading-snug sm:text-4xl">
      Building digital spaces that are <br />
      highly performant and{" "}
      <span className="rounded-lg bg-teal-950/70 px-2 text-teal-500">
        functional
      </span>
    </h1>
    <p>
      Hello world, My name is Radivoje Katanic. I’m a web developer from Doboj,
      Bosnia and Herzegovina. That’s where I live and work developing software
      at ProductDock. Besides computer work, I like doing sports, or spending
      time in nature.
    </p>
    <div className="grid grid-cols-4">
      <div className="col-span-1">
        <h3>Experience</h3>
      </div>
      <div className="col-span-3">
        <div>
          <div className="space-y-2">
            <h3 className="mb-2">Software Developer</h3>
            <h5>ProductDock, Doboj BA</h5>
            <p className="text-sm">2020 - Now</p>
            <div>
              <p>
                In February 2020, I attended 3 month rookie boot camp program
                where I built with other rookies internal application for
                employee management. After successful boot camp, I got full time
                job offer.
              </p>
              <p>
                Currently focused on frontend, with my main frameworks being
                React and Next.js.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-4">
      <div className="col-span-1">
        <h3>Education</h3>
      </div>
      <div className="col-span-3">
        <div>
          <div className="space-y-2">
            <h3 className="mb-2">IT Engineer</h3>
            <h5 className="my-0">Slobomir P University, Doboj BA</h5>
            <p className="text-sm">2015 -2019</p>
          </div>
        </div>
        <div>
          <div className="space-y-2">
            <h3 className="mb-2">Computer Technician</h3>
            <h5>Electro-Technical High School, Doboj BA</h5>
            <p className="text-sm">2011 -2015</p>
          </div>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-4">
      <div className="col-span-1">
        <h3>Tech stack</h3>
      </div>
      <div className="col-span-3">
        <p className="pt-4">
          HTML, CSS, TypeScript, React, Next.js, Tailwind CSS, Angular, Java,
          Spring Boot
        </p>
      </div>
    </div>
  </div>
);
export default Home;
