import catedral from "../img/catedral de murcia.jpg";
import clock from "../img/clock.jpg";
import puesta from "../img/puesta.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      className="absolute bottom-0 top-16 flex flex-col 
     items-center bg-zinc-900"
    >
      <div className=" w-full h-72 flex flex-row justify-around items-center pr-6 pl-6">
        <img className=" w-2/5 h-56 rounded-2xl " src={catedral} />
        <img className=" w-1/5 h-56 rounded-2xl " src={clock} />
        <img className=" w-1/5 h-56 rounded-2xl " src={puesta} />
      </div>

      <div
        className=" w-full h-72 flex flex-col  pl-6 pr-6 mb-2
       items-center 
       text-white "
      >
        <p className=" text-2xl ">MUSEOS DE MURCIA</p>
        <p className="flex text-center m-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus minima
          fugiat amet perferendis illo, incidunt praesentium optio magnam dolore
          in commodi dolorum veniam beatae, aperiam repellat.
        </p>
        <Link to="/museos">
          <button
            className=" inline-flex items-center justify-center
           p-0.5 m-4
            hover:text-zinc-300 rounded-lg group bg-gradient-to-r from-yellow-300
             via-sky-300 to-lime-300"
          >
            <span
              className="relative  transition-all ease-in duration-75 bg-black
              rounded-md group-hover:bg-opacity-0 px-6"
            >
              Ver Museos
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
