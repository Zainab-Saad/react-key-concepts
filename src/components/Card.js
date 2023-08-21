import "./Card.css";

function Card(props) {
  return (
    <div className="Card">
      <img src={props.image} className="Card-Image"></img>
      <h4 className="Card-Heading">{props.title}</h4>
      <p>{props.description}</p>
    </div>
  );
}

export default Card;
