import GifCard from "../GifCard/GifCard";
import { useSelector } from "react-redux";
import { GifItems, GifItem } from "../../interfaces/GifListType";
import { RootState } from "../../redux/store";

const GifCardList = () => {
  const gifList: GifItems = useSelector(
    (state: RootState) => state.gifList.gifList
  );
  return (
    <div className="container">
      {gifList.map((gif: GifItem) => (
        <GifCard
          key={gif.id}
          url={gif.url}
          isLocked={gif.isLocked}
          title={gif.title}
          id={gif.id}
        />
      ))}
    </div>
  );
};

export default GifCardList;
