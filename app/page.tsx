const Home = () => (
  <div className="texxt-sm xitems-end flex min-h-screen bg-neutral-900 p-8 px-6 text-neutral-200 sm:p-12">
    <div className="prose prose-neutral prose-invert w-full max-w-xl sm:prose-lg">
      <h2>README.md</h2>

      <p>
        Born in 1996, Radivoje Katanic is Software Developer based in Doboj,
        Bosnia & Herzegovina, where he builds digital solutions for various
        clients at{" "}
        <a
          href="https://productdock.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ProductDock
        </a>
        .
      </p>
      <p>
        Even though he works as a full-stack developer, he is mostly front-end
        oriented, mainly building software with React and Next.js.
      </p>
      <p>Away from work, he spends his free time by doing sports.</p>
      <p></p>

      <table>
        <thead className="text-left">
          <tr>
            <th>Contact links</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/rkatanic"
              >
                GitHub
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/radivoje-katanic/"
              >
                LinkedIn
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:rkatanic@outlook.coms"
              >
                rkatanic@outlook.com
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default Home;
