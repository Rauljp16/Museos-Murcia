import catedral from "../img/catedral de murcia.jpg";
import clock from "../img/clock.jpg";
import puesta from "../img/puesta.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className=" h-screen flex flex-row  items-center bg-black">
      <div
        className="  w-1/2 h-4/5 flex flex-col justify-center
       items-center gap-16
       text-white "
      >
        <h1>titulo</h1>
        <p>parrafo para pequeña descripcion</p>
        <Link to="/Museos">
          <button
            className=" inline-flex items-center justify-center
           p-0.5 mb-2 me-2 overflow-hidden text-xl font-medium
            hover:text-zinc-300 rounded-lg group bg-gradient-to-r from-yellow-300
             via-sky-300 to-lime-300"
          >
            <span
              className="relative px-20 py-2 transition-all ease-in duration-75 bg-black
              rounded-md group-hover:bg-opacity-0 "
            >
              Ver Museos
            </span>
          </button>
        </Link>
        <p className=" text-4xl pt-10">Museos de Murcia</p>
      </div>
      <div className="flex  w-1/2 h-4/5">
        <div className="  flex flex-row gap-5 justify-start items-center">
          <img className=" w-2/5 h-5/6 rounded-2xl " src={catedral} />
          <img className=" w-1/5 h-5/6 rounded-2xl " src={clock} />
          <img className=" w-1/5 h-5/6 rounded-2xl " src={puesta} />
        </div>
      </div>
      xxxxxxxxxx
    </div>
  );
}

export default Home;
