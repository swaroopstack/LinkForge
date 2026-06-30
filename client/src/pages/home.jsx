import Hero from "../components/home/hero";
import LeftPanel from "../components/home/leftpanel";
import RightPanel from "../components/home/rightpanel";

function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="grid lg:grid-cols-[250px_1fr_250px] min-h-screen">
        <LeftPanel />
        <Hero />
        <RightPanel />
      </section>
    </main>
  );
}

export default Home;