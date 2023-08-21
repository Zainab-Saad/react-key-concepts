import ReactDOM from "react-dom/client";
import "./index.css";
import Heading from "./components/Heading";
import CardHolder from "./components/CardHolder";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Heading />
    <CardHolder />
  </>
);
