import { useDispatch, useSelector } from "react-redux";
import {
  addCollection,
  removeCollection,
} from "../redux/features/collectionSlice";
import { customizeToast } from "../utils/toast";

const ResultCard = ({ item }) => {
  const collections = useSelector((state) => state.collections.items);
  const dispatch = useDispatch();

  const isSaved = collections.find((collection) => collection.id === item.id);

  function handleAdd() {
    dispatch(addCollection(item));
    customizeToast("added to collections");
  }

  function handleRemove() {
    dispatch(removeCollection(item));
    customizeToast("removed from collections");
  }

  return (
    <li className="relative border w-[23vw] h-80">
      <a
        href={item.src}
        target="_blank"
        className="overflow-hidden inline-block w-full h-full"
      >
        <img
          src={item.thumbnail}
          alt=""
          className="h-full w-full object-cover"
        />
      </a>
      <div
        id="bottom"
        className=" flex items-start gap-1 justify-between absolute text-white left-0 px-2 py-2 bottom-0 w-full bg-[#00000050]"
      >
        <h3 className="h-12 overflow-hidden text-ellipsis font-semibold">
          {item.title}
        </h3>
        <button
          onClick={() => {
            Boolean(isSaved) ? handleRemove() : handleAdd();
          }}
          className={`active:scale-95 ${Boolean(isSaved) ? "bg-red-500" : "bg-green-500"} text-white rounded px-3 py-1 font-medium cursor-pointer`}
        >
          {Boolean(isSaved) ? "Remove" : "Save"}
        </button>
      </div>
    </li>
  );
};

export default ResultCard;
