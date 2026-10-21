import ResultGrid from "../components/ResultGrid.jsx";
import SearchBar from "../components/SearchBar.jsx";
import Tabs from "../components/Tabs.jsx";

const HomePage = () => {
  return (
    <div className="w-full bg-gray-950 min-h-screen">
      <SearchBar />
      <Tabs />
      <ResultGrid />
    </div>
  );
};

export default HomePage;
