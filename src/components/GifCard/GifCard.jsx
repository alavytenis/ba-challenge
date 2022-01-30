import { useDispatch } from "react-redux";
import { toggleLock } from "../../redux/slices/gifSlice";
import { updateGifInLocalStorage } from "../../services/localStorage";

const GifCard = (props) => {
  const dispatch = useDispatch();
  const handleGifClick = () => {
    dispatch(toggleLock(props.url));
    updateGifInLocalStorage(props.url);
  };
  return (
    <div className="gif-item">
      <img onClick={handleGifClick} src={props.url} alt={props.title} />
    </div>
  );
};

export default GifCard;
