import { Textfit } from "react-textfit";
import "./Home.css";

const Home = ({ value, result }) => {
  return (
    <Textfit className="home" mode="single" max={70}>
      {value}
      {result}
    </Textfit>
  );
};

export default Home;