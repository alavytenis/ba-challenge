import { useDispatch } from "react-redux";
import { toggleLock } from "../../redux/slices/gifSlice";
import { updateGifInLocalStorage } from "../../services/localStorage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLockOpen, faLock } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { GifItem } from "../../interfaces/GifListType";

const GifCard = (props: GifItem) => {
  const dispatch = useDispatch();
  const [isShown, setIsShown] = useState(false);

  const handleGifClick = () => {
    dispatch(toggleLock(props.url));
    updateGifInLocalStorage(props.url);
  };
  return (
    <div className="gif-item" onClick={handleGifClick}>
      <img
        src={props.url}
        alt={props.title}
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      />
      {props.isLocked ? (
        <>
          <FontAwesomeIcon
            className="icon"
            icon={faLock}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          />
          {isShown ? (
            <span onMouseEnter={() => setIsShown(true)} className="icon-text">
              Click to unlock
            </span>
          ) : (
            <></>
          )}
        </>
      ) : (
        <>
          {isShown ? (
            <>
              <FontAwesomeIcon
                className="icon"
                icon={faLockOpen}
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
              />
              <span
                className="icon-text"
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
              >
                Click to lock
              </span>
            </>
          ) : (
            <></>
          )}
        </>
      )}
    </div>
  );
};

export default GifCard;
