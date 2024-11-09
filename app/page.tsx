import Navigation from "./_components/Navigation";
import ThreeJs from "./_components/ThreeJs";

const Home = () => (
  <div className="prose prose-neutral relative dark:prose-invert prose-headings:tracking-tight">
    <ThreeJs />

    <h1>Building highly performant and functional digital spaces.</h1>
    <p>
      Hello world, My name is Radivoje Katanic. I’m a web developer from Doboj,
      Bosnia and Herzegovina. That’s where I live and work developing software
      at ProductDock. Besides computer work, I like doing sports, or spending
      time in nature.
    </p>

    <h3>Short Bio</h3>
    <ul>
      <li>
        <p>
          <strong>2020 - Started my web development career</strong>
        </p>
        <p>Started career as a Software Developer at ProductDock.</p>
        <p>
          In February 2020, I attended 3 month rookie boot camp program where I
          built with other candidates internal application for employee
          management. Main tech stack was Angular, Spring Boot and MySQL.
        </p>
        <p>
          After successful boot camp, I got full time job offer. Currently
          focused on frontend, with my main frameworks being React and Next.js.
        </p>
      </li>
      <li>
        <p>
          <strong>2019 - Graduated as an IT Engineer</strong>
        </p>
        <p>
          Graduated as an IT Engineer at Slobomir P University in Doboj, Bosnia
          and Herzegovina.
        </p>
      </li>
      <li>
        <p>
          <strong>1996 - Born in Doboj, Bosnia & Herzegovina</strong>
        </p>
      </li>
    </ul>

    <h3>Interests</h3>
    <p>Sports, nature, technology, art, architecture, and more.</p>
  </div>
);
export default Home;
