import PropTypes from "prop-types"; //we can give props like 'title' a type like string int or bool
import Button from "./Button"; //importing the button component
import { useLocation } from "react-router-dom"; //this allows us to look at the route we are currently in

//here we are passing a prop called title which is difined at line 10 as 'task tracker'
//styling css withinn js
//inside buttons props were used
const Header = ({ title, onAdd, addShow }) => {
  const location = useLocation();

  //We have the onClick prop call this function here beacause the proptype is a func
  //in the yellow
  const onClick = () => {
    console.log("click");
  };
  //we replaced onClick with onAdd on add is a prop passed onto the parent in app.js
  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={addShow ? "red" : "green"}
          text={addShow ? "Close" : "Add"}
          onClick={onAdd}
        />
      )}
    </header>
  );
};

//if header in the app has no prop difined the default one will continue
Header.defaultProps = {
  title: "task Tracker",
};

//giving our prop a type
//this is just to make ur code more robust and catch errors
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;

//if ya wanna style stuff just add it inside the html style = {headingStyle}
//CSS in js
// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };
