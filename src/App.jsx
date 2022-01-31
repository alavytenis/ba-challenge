import "./App.scss";
import GifCardList from "./components/GifCardList/GifCardList";
import Header from "./components/Header/Header";
import { useEffect } from "react";
import { getGifList } from "./services/gif";
import { useDispatch } from "react-redux";
import { loadGifs } from "./redux/slices/gifSlice";

function App() {
  const dispatch = useDispatch();

  const spaceEventListener = async () => {
    document.addEventListener("keyup", async (event) => {
      if (event.code === "Space") {
        const filteredGifList = await getGifList();
        await dispatch(loadGifs(filteredGifList));
      }
    });
  };

  const loadGifListOnStart = async () => {
    const filteredGifList = await getGifList();
    await dispatch(loadGifs(filteredGifList));
  };

  useEffect(() => {
    spaceEventListener();
    loadGifListOnStart();
  });

  return (
    <div>
      <Header />
      <GifCardList />
    </div>
  );
}

export default App;
