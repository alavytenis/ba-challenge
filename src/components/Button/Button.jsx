import { GiphyFetch } from "@giphy/js-fetch-api";
import { useDispatch } from "react-redux";
import { loadGifs } from "../../redux/slices/gifSlice";
import {
  setGifListToLocalStorage,
  getGifListFromLocalStorage,
} from "../../services/localStorage";

const Button = () => {
  const dispatch = useDispatch();

  const gf = new GiphyFetch(process.env.REACT_APP_GIPHY_KEY);

  const getGifs = async (offsetNumber) => {
    const res = await gf.trending({
      limit: 12,
      offset: offsetNumber,
      rating: "g",
    });

    let filteredGifList = [];
    let retrievedGifList = getGifListFromLocalStorage();

    for (let i = 0; i < res.data.length; i++) {
      if (
        retrievedGifList !== [] &&
        retrievedGifList[i] &&
        retrievedGifList[i].isLocked
      ) {
        filteredGifList[i] = retrievedGifList[i];
      } else {
        filteredGifList[i] = {};
        filteredGifList[i].url = res.data[i].images.downsized.url;
        filteredGifList[i].id = res.data[i].id;
        filteredGifList[i].title = res.data[i].title;
        filteredGifList[i].isLocked = false;
      }
    }
    setGifListToLocalStorage(filteredGifList);
    dispatch(loadGifs(filteredGifList));
  };

  const handleSubmit = async () => {
    getGifs(Math.floor(Math.random() * (1500 - 1) + 1));
  };
  return <button onClick={handleSubmit}>Submit</button>;
};

export default Button;
