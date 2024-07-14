import DetailsSection from "./_components/DetailsSection";
import Navigation from "./_components/Navigation";

const Home = () => (
  <div className="mx-auto min-h-screen max-w-5xl bg-white p-6 dark:bg-zinc-900">
    <Navigation />
    <DetailsSection />
    <Navigation />
  </div>
);
export default Home;
