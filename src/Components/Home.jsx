import catedral from "../img/catedral de murcia.jpg";
import clock from "../img/clock.jpg";
import puesta from "../img/puesta.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      className=" w-full h-screen pt-16 pb-12 flex flex-col
     items-center bg-black"
    >
      <div className=" h-1/2 flex flex-row gap-3 justify-center items-center">
        <img className=" w-2/5 h-5/6 rounded-2xl " src={catedral} />
        <img className=" w-1/5 h-5/6 rounded-2xl " src={clock} />
        <img className=" w-1/5 h-5/6 rounded-2xl " src={puesta} />
      </div>

      <div
        className=" w-full h-1/2 flex flex-col 
       items-center gap-6
       text-white "
      >
        <p className=" text-3xl ">MUSEOS DE MURCIA</p>
        <p className="flex items-center m-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus minima
          fugiat amet perferendis illo, incidunt praesentium optio magnam dolore
          in commodi dolorum veniam beatae, aperiam repellat.
        </p>
        <Link to="/museos">
          <button
            className=" inline-flex items-center justify-center
           p-0.5   
            hover:text-zinc-300 rounded-lg group bg-gradient-to-r from-yellow-300
             via-sky-300 to-lime-300"
          >
            <span
              className="relative  transition-all ease-in duration-75 bg-black
              rounded-md group-hover:bg-opacity-0 "
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
