import { Textfit } from "react-textfit";
import "./Home.css";

const Home = ({ value, styles = []}) => {
  const classNames = ["home", ...styles].join(" ")
  
  return (
    <Textfit className={classNames} mode="single" max={70}>
      {value}
    </Textfit>
  );
};

export default Home;