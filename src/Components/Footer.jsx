import { Link } from "react-router-dom";
function Footer() {
  return (
    <ul
      className=" md:hidden fixed bg-zinc-900 text-white bottom-0
     flex items-center justify-around h-12 w-full"
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
