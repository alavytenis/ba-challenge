const GifCard = (props) => {
  return (
    <div className="gif-item">
      <img src={props.url} alt={props.title} />
    </div>
  );
};

export default GifCard;
