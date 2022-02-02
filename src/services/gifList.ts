import {
  setGifListToLocalStorage,
  getGifListFromLocalStorage,
} from "./localStorage";
import { GiphyFetch } from "@giphy/js-fetch-api";

export const getGifList = async () => {
  const trendingGifList = await getTrendingGifList();
  trendingGifList.sort((a, b) =>
    a.import_datetime > b.import_datetime
      ? 1
      : b.import_datetime > a.import_datetime
      ? -1
      : 0
  );
  let filteredGifList = [];
  let retrievedGifList = getGifListFromLocalStorage();

  for (let i = 0; i < trendingGifList.length; i++) {
    if (
      retrievedGifList !== [] &&
      retrievedGifList[i] &&
      retrievedGifList[i].isLocked
    ) {
      filteredGifList[i] = retrievedGifList[i];
    } else {
      filteredGifList[i] = {};
      filteredGifList[i].url = trendingGifList[i].images.downsized.url;
      filteredGifList[i].id = trendingGifList[i].id;
      filteredGifList[i].title = trendingGifList[i].title;
      filteredGifList[i].isLocked = false;
    }
  }
  setGifListToLocalStorage(filteredGifList);
  return filteredGifList;
};

export const getTrendingGifList = async () => {
  const apiAddress: any | undefined = process.env.REACT_APP_GIPHY_KEY;
  const gf = new GiphyFetch(apiAddress);
  const offsetNumber = Math.floor(Math.random() * (1500 - 1) + 1);

  const res = await gf.trending({
    limit: 12,
    offset: offsetNumber,
    rating: "g",
  });

  return res.data;
};
