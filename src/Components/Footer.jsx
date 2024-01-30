import { Link } from "react-router-dom";
function Footer() {
  return (
    <ul
      className="fixed w-full bottom-0 md:hidden  bg-zinc-900 text-white
     flex items-center justify-around h-14 "
    >
      <li className=" font-bold">
        <Link to="/">Home</Link>
      </li>
      <li className=" font-bold">
        <Link to="/museos">Museos</Link>
      </li>
    </ul>
  );
}

export default Footer;
