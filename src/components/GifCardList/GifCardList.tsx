import GifCard from "../GifCard/GifCard";
import { useSelector } from "react-redux";

const GifCardList = () => {
  const gifList = useSelector((state: any) => state.gifList.gifList);
  return (
    <div className="container">
      {gifList.map((gif: any) => (
        <GifCard
          key={gif.id}
          url={gif.url}
          isLocked={gif.isLocked}
          alt={gif.title}
        />
      ))}
    </div>
  );
};

export default GifCardList;
