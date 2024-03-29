import { Link } from "react-router-dom";

function Museos(museos) {
  return (
    <div
      className="relative  flex justify-center overflow-auto
      bg-zinc-800 px-4 pt-12"
    >
      <div
        className="relative flex flex-row flex-wrap justify-center gap-8  pb-52
       text-white lg:max-w-7xl"
      >
        {museos.museos.map((museo) => (
          <Link
            key={museo.id}
            to={`${museo.id}`}
            className="relative top-28 flex h-40 w-44 flex-col  items-center overflow-hidden
        rounded
        bg-zinc-700/20 p-2 "
          >
            <div className=" flex items-center justify-center ">
              <img
                className=" h-32 w-40 rounded bg-zinc-800 "
                src={museo.Foto}
              />
            </div>
            <p
              className=" absolute bottom-1 max-h-24 overflow-ellipsis whitespace-nowrap
             font-caveat text-xs font-extralight uppercase "
            >
              {museo.Nombre}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Museos;
