import { useDispatch } from "react-redux";
import { loadGifs } from "../../redux/slices/gifSlice";
import { getGifList } from "../../services/gifList";

const Button = () => {
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    const filteredGifList = await getGifList();
    await dispatch(loadGifs(filteredGifList));
  };

  return (
    <button className="btn" onClick={handleSubmit}>
      Click here
    </button>
  );
};

export default Button;
