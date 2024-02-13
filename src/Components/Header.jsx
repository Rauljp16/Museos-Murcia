import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="fixed top-0 z-20 flex  h-32 w-full justify-center  bg-zinc-800 text-white ">
      <div className="flex w-full items-center px-8 lg:max-w-7xl lg:justify-between">
        <div className=" font-dancing flex w-full flex-col items-center text-5xl tracking-wider lg:w-96">
          <Link to="/">
            <p className="relative pr-24 md:pr-36">MUSEOS</p>
          </Link>
          <Link to="/">
            {" "}
            <p className="relative pl-24 md:pl-36">MURCIA</p>
          </Link>
        </div>
        <div className=" hidden lg:block">
          <button
            className=" group m-4 inline-flex   items-center
           justify-center rounded-lg
            bg-gradient-to-r from-yellow-300 via-sky-300 to-lime-300 p-0.5 hover:text-zinc-800
           "
          >
            <span
              className="relative rounded-md bg-zinc-800 px-4 py-2 
               transition-all duration-75 ease-in hover:text-xl group-hover:bg-opacity-0"
            >
              Ver Favoritos
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
