import { useContext } from "react";
import Navbar from "./Navbar";
import { Context } from "./Context";
import { Link } from "react-router-dom";

export default function Header() {
  const props = useContext(Context);
  return (
    <header>
      <Link to="/" onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}><img src="pictures/logo.svg" alt="" /></Link>
      <Navbar />
    </header>
  );
}
