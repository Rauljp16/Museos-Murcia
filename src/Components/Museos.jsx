import { Link } from "react-router-dom";

function Museos(museos) {
  return (
    <div
      className="  flex flex-row flex-wrap justify-center
     gap-8 bg-zinc-900 p-8  text-white"
    >
      {museos.museos.map((museo) => (
        <Link
          key={museo.id}
          to={`${museo.id}`}
          className="relative flex h-40  w-40 flex-col items-center 
        rounded
        bg-zinc-800/20 p-2 "
        >
          <div className="flex items-center justify-center">
            <img
              className=" h-36 w-36 rounded bg-zinc-900 opacity-80 "
              src={museo.Foto}
            />
            <p
              className=" uppercas absolute max-h-24
             max-w-24 text-xl font-bold "
            >
              {museo.Nombre}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Museos;
