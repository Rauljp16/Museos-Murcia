import { Link } from "react-router-dom";

function Museos(museos) {
  return (
    <div
      className=" pt-36 flex flex-row flex-wrap text-white
     gap-16 justify-center px-20 bg-black"
    >
      {museos.museos.map((museo) => (
        <Link
          key={museo.id}
          to={`${museo.id}`}
          className="flex flex-col  p-2 w-40 h-40 items-center 
        bg-gray-800/50
        gap-5 rounded-lg "
        >
          <p className="text-xl uppercase font-mono font-bold">
            {museo.Nombre}
          </p>
          <img className="h-screen w-screen" src={museo.Foto} />
        </Link>
      ))}
    </div>
  );
}

export default Museos;
