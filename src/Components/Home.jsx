import IA from "../img/IAmuseo.jpg";
import IA2 from "../img/IAcatedral.jpg";
import puesta from "../img/puesta.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="absolute top-32 flex h-full w-full justify-center bg-zinc-800 lg:top-0 ">
      <div
        className="relative bottom-8 flex flex-col items-center
          md:justify-around
       lg:top-20 lg:max-w-7xl lg:flex-row-reverse  "
      >
        <div className="relative flex h-72 w-full flex-row items-center justify-around p-6 lg:bottom-14 lg:h-130">
          <img
            className=" lg:w-3/7 h-56 w-2/5 rounded-lg md:h-72 lg:h-96 "
            src={IA}
          />
          <img
            className=" lg:w-2/7 h-56 w-1/5 rounded-lg md:h-72 lg:h-96"
            src={IA2}
          />
          <img
            className=" lg:w-2/7 h-56 w-1/5 rounded-lg md:h-72 lg:h-96"
            src={puesta}
          />
        </div>

        <div
          className="relative flex h-72 w-full flex-col items-center pl-6 pr-6 text-white
           md:bottom-28 md:max-w-xl md:gap-5
           lg:bottom-14 lg:h-130 lg:w-3/4 lg:justify-center lg:p-6 "
        >
          <p className="py-4 font-dancing text-3xl">
            Tradición y cultura de una región
          </p>
          <p className=" m-3 flex p-2 text-center text-sm">
            Sumérgete en una experiencia cultural única en el sur de España,
            donde la historia cobra vida y el arte se entrelaza con la
            tradición. Descubre la riqueza de nuestra región a través de sus
            museos, un viaje fascinante que revela el legado que nos define.
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
    </div>
  );
}

export default Home;
