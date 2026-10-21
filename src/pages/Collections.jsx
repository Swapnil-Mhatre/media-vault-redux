import { useSelector } from "react-redux";
import ResultCard from "../components/ResultCard";

const Collections = () => {
  const collections = useSelector((state) => state.collections.items);

  return (
    <div className="bg-gray-950 min-h-screen flex flex-wrap gap-3 p-4 ">
      {collections.map((collection) => (
        <ResultCard key={collection.id} item={collection} />
      ))}
    </div>
  );
};

export default Collections;
