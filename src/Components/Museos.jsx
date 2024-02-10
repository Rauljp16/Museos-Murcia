import { Link } from "react-router-dom";
import { useState } from "react";

function Museos(museos) {
  const [fillColor, setFillColor] = useState("#ff5040");
  const handleIconClick = () => {
    console.log("funciona");
    setFillColor("white");
  };
  return (
    <div
      className="flex h-full
       flex-row flex-wrap justify-center gap-8
     bg-zinc-800 pt-6   text-white"
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
            <svg
              className=" absolute right-2 top-2  stroke-red-950 stroke-1"
              width="16px"
              height="16px"
              viewBox="0 0 24 24"
              fill={fillColor}
              onClick={handleIconClick}
            >
              <g id="SVGRepo_bgCarrier"></g>
              <g id="SVGRepo_tracerCarrier"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"></path>
              </g>
            </svg>
            <img className=" h-32 w-40 rounded bg-zinc-800 " src={museo.Foto} />
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
  );
}

export default Museos;
