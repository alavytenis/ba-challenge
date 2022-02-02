import { FC, ReactElement } from "react";
import { useDispatch } from "react-redux";
import { loadGifs } from "../../redux/slices/gifSlice";
import { getGifList } from "../../services/gifList";

const Button: FC = (): ReactElement => {
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
