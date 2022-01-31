import {
  setGifListToLocalStorage,
  getGifListFromLocalStorage,
} from "./localStorage";
import { GiphyFetch } from "@giphy/js-fetch-api";

export const getGifList = async () => {
  const trendingGifList = await getTrendingGifList();
  let filteredGifList = [];
  let retrievedGifList = getGifListFromLocalStorage();

  for (let i = 0; i < trendingGifList.data.length; i++) {
    if (
      retrievedGifList !== [] &&
      retrievedGifList[i] &&
      retrievedGifList[i].isLocked
    ) {
      filteredGifList[i] = retrievedGifList[i];
    } else {
      filteredGifList[i] = {};
      filteredGifList[i].url = trendingGifList.data[i].images.downsized.url;
      filteredGifList[i].id = trendingGifList.data[i].id;
      filteredGifList[i].title = trendingGifList.data[i].title;
      filteredGifList[i].isLocked = false;
    }
  }
  setGifListToLocalStorage(filteredGifList);
  return filteredGifList;
};

export const getTrendingGifList = async () => {
  const gf = new GiphyFetch(process.env.REACT_APP_GIPHY_KEY);
  const offsetNumber = Math.floor(Math.random() * (1500 - 1) + 1);

  const res = await gf.trending({
    limit: 12,
    offset: offsetNumber,
    rating: "g",
  });
  return res;
};
