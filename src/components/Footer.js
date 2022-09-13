import { Link } from "react-router-dom"; //to link in faster instead of using an A tag to the webpage doesnt reload for static

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2021</p>
      <Link to="/about">About</Link>
    </footer>
  );
};

export default Footer;
