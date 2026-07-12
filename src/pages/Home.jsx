import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import SearchBar from "../components/SearchBar";
import TrendingGroups from "../components/TrendingGroups";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <SearchBar />
      <TrendingGroups />
    </>
  );
}

export default Home;