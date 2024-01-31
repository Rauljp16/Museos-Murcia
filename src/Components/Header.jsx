import { Link } from "react-router-dom";
function Header() {
  return (
    <div
      className="static flex h-28 w-full items-center bg-zinc-900
       text-white"
    >
      <div className="flex w-full flex-col items-center text-4xl">
        <Link to="/">
          <p className="relative pr-28 ">MUSEOS</p>
        </Link>
        <Link to="/">
          {" "}
          <p className="relative pl-28">MURCIA</p>
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
