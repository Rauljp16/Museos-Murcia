import IA from "../img/IAmuseo.jpg";
import IA2 from "../img/IAcatedral.jpg";
import puesta from "../img/puesta.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      className="absolute bottom-0 top-24 flex flex-col 
     items-center bg-zinc-800"
    >
      <div className=" flex h-72 w-full flex-row items-center justify-around pl-6 pr-6">
        <img className=" h-56 w-2/5 rounded-lg " src={IA} />
        <img className=" h-56 w-1/5 rounded-lg " src={IA2} />
        <img className=" h-56 w-1/5 rounded-lg " src={puesta} />
      </div>

      <div
        className=" flex h-72 w-full  flex-col items-center pl-6
       pr-6 
       text-white "
      >
        <p className=" font-caveat text-3xl">
          Tradición y cultura de una región
        </p>
        <p className="font- m-3 flex text-center font-caveat text-lg">
          Sumérgete en una experiencia cultural única en el sur de España, donde
          la historia cobra vida y el arte se entrelaza con la tradición.
          Descubre la riqueza de nuestra región a través de sus museos, un viaje
          fascinante que revela el legado que nos define.
        </p>
        <Link to="/museos">
          <button
            className=" group m-4 inline-flex
           items-center justify-center
            rounded-lg bg-gradient-to-r from-yellow-300 via-sky-300 to-lime-300 p-0.5
              hover:text-zinc-800"
          >
            <span
              className="relative rounded-md bg-zinc-800 px-4 py-2 
               transition-all duration-75 ease-in hover:text-xl group-hover:bg-opacity-0"
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
