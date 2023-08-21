import keyConcepts from "../assets/images/key-concepts.png";
import "./Heading.css";

function Heading() {
  return (
    <div className="Heading">
      <img src={keyConcepts} alt="React Logo" className="Heading-logo"></img>
      <h3 className="Heading-header">Key React Concepts</h3>
      <p>
        Selected key{" "}
        <a className="Heading-link" href="https://react.dev/" target="_blank">
          React
        </a>{" "}
        concepts you should know about
      </p>
    </div>
  );
}

export default Heading;
