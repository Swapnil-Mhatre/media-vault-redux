import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, fetchGifs } from "../api/mediaApi.js";
import {
  setResults,
  setLoading,
  setError,
} from "../redux/features/searchSlice.js";
import { useEffect } from "react";
import ResultCard from "./ResultCard.jsx";

const ResultGrid = () => {
  const { query, results, activeTab, loading, error } = useSelector(
    (state) => state.search,
  );
  const disptach = useDispatch();

  async function getData(query) {
    try {
      let data = [];

      if (activeTab === "photos") {
        let response = await fetchPhotos(query);
        data = response.map((item) => ({
          id: item.id,
          title: item.description || `${query} ${activeTab}`,
          type: "photo",
          thumbnail: item.urls.small,
          src: item.links.html,
        }));
      }
      if (activeTab === "gifs") {
        let response = await fetchGifs(query);
        data = response.map((item) => ({
          id: item.id,
          title: item.title,
          type: "gif",
          thumbnail: item.images.downsized.url,
          src: item.url,
        }));
      }

      disptach(setResults(data));
    } catch (err) {
      disptach(setError(err.message));
    }
  }

  useEffect(() => {
    if (!query) return;
    disptach(setLoading());
    getData(query);
  }, [query, activeTab]);

  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading...</h1>;

  return results.length !== 0 ? (
    <ul className="flex flex-wrap gap-3 px-4 justify-evenly">
      {results.map((item) => (
        <ResultCard key={item.id} item={item} />
      ))}
    </ul>
  ) : (
    <h1 className="text-white px-5 text-2xl">Search for any {activeTab}</h1>
  );
};

export default ResultGrid;
