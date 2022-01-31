import { useDispatch } from "react-redux";
import { toggleLock } from "../../redux/slices/gifSlice";
import { updateGifInLocalStorage } from "../../services/localStorage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLockOpen, faLock } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const GifCard = (props) => {
  const dispatch = useDispatch();
  const [isShown, setIsShown] = useState(false);

  const handleGifClick = () => {
    dispatch(toggleLock(props.url));
    updateGifInLocalStorage(props.url);
  };
  return (
    <div className="gif-item">
      <img
        onClick={handleGifClick}
        src={props.url}
        alt={props.title}
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      />
      {props.isLocked ? (
        <>
          <FontAwesomeIcon
            onClick={handleGifClick}
            className="icon"
            icon={faLock}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          />
          {isShown ? (
            <span
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
              onClick={handleGifClick}
              className="icon-text"
            >
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
                onClick={handleGifClick}
                className="icon"
                icon={faLockOpen}
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
              />
              <span
                onClick={handleGifClick}
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
