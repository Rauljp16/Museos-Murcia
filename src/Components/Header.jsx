import { Link } from "react-router-dom";
function Header() {
  return (
    <div
      className="fixed top-0 z-20 flex h-28 w-full items-center bg-zinc-800
       text-white"
    >
      <div className="flex w-full flex-col items-center font-caveat text-5xl tracking-wider">
        <Link to="/">
          <p className="relative pr-20 ">MUSEOS</p>
        </Link>
        <Link to="/">
          {" "}
          <p className="relative pl-20">MURCIA</p>
        </Link>
      </div>

      <ul className="hidden flex-row  gap-20 md:flex ">
        <li className=" text-xl font-bold">
          <Link to="/museos">Museos</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
