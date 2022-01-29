import { GiphyFetch } from "@giphy/js-fetch-api";
import GifCard from "../GifCard/GifCard";
import { useState } from "react";

const GifCardList = () => {
  const [gifList, setGifList] = useState([]);
  const gf = new GiphyFetch(process.env.REACT_APP_GIPHY_KEY);
  const getGifs = async () => {
    const res = await gf.trending({ limit: 12, offset: 25, rating: "g" });
    setGifList(res.data);
  };
  const handleSubmit = (e) => {
    getGifs();
  };
  return (
    <div className="container">
      <button onClick={handleSubmit}>Submit</button>
      {gifList.map((gif) => (
        <GifCard key={gif.id} url={gif.images.downsized.url} alt={gif.title} />
      ))}
    </div>
  );
};

export default GifCardList;
