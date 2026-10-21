import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/features/searchSlice";

const Tabs = () => {
  const tabs = ["photos", "gifs"];

  const activeTab = useSelector((state) => state.search.activeTab);
  const dipatch = useDispatch();

  return (
    <div className="flex gap-5 p-5">
      {tabs.map((tab, idx) => (
        <button
          onClick={(e) => {
            dipatch(setActiveTab(e.target.textContent));
          }}
          key={idx}
          className={`active:scale-95 ${activeTab === tab ? "bg-blue-500" : "bg-gray-700"} transition cursor-pointer text-white rounded-sm py-1 px-4`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
