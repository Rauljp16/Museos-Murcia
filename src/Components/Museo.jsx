/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Museo({ museos }) {
  const { id } = useParams();
  const detallesMuseo = museos.find((museo) => museo.id === id);
  console.log(detallesMuseo);

  return (
    <div
      className=" relative top-6 flex h-screen w-full  items-center justify-center bg-zinc-800 text-white 
     "
    >
      <div
        className="relative bottom-2 m-4 flex h-4/6 w-full flex-col items-center rounded-lg
          bg-zinc-700 md:max-w-3xl "
      >
        <Link to="/museos" className="absolute left-0 z-10 p-3 md:left-0  ">
          <svg
            className="h-8 w-8"
            fill="#ffffff"
            viewBox="0 0 384.97 384.97"
            style={{
              filter: "drop-shadow(1.5px 1.5px 1.5px rgba(0, 0, 0, 1))",
            }}
          >
            <g id="SVGRepo_bgCarrier"></g>
            <g id="SVGRepo_tracerCarrier"></g>
            <g id="SVGRepo_iconCarrier">
              <g id="Arrow_Left_Circle">
                <path
                  style={{
                    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.2))",
                  }}
                  d="M192.485,0C86.185,0,0,86.185,0,192.485C0,298.797,86.185,384.97,192.485,384.97 c106.312,0,192.485-86.173,192.485-192.485C384.97,86.185,298.797,0,192.485,0z M192.485,360.909 c-93.018,0-168.424-75.406-168.424-168.424S99.467,24.061,192.485,24.061s168.424,75.406,168.424,168.424 S285.503,360.909,192.485,360.909z"
                ></path>
                <path
                  style={{
                    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.2))",
                  }}
                  d="M300.758,180.226H113.169l62.558-63.46c4.692-4.74,4.692-12.439,0-17.179c-4.704-4.74-12.319-4.74-17.011,0l-82.997,84.2 c-2.25,2.25-3.537,5.414-3.537,8.59c0,3.164,1.299,6.328,3.525,8.59l82.997,84.2c4.704,4.752,12.319,4.74,17.011,0 c4.704-4.752,4.704-12.439,0-17.191l-62.558-63.46h187.601c6.641,0,12.03-5.438,12.03-12.151 C312.788,185.664,307.398,180.226,300.758,180.226z"
                ></path>
              </g>
            </g>
          </svg>{" "}
        </Link>
        <img
          className=" relative top-0 h-1/2 w-full rounded bg-zinc-800 opacity-80 "
          src={detallesMuseo.Foto}
        />
        <h1 className="p-2 font-caveat text-2xl">{detallesMuseo.Nombre}</h1>
        <p className=" h-48 w-full overflow-auto p-4 text-base">
          {detallesMuseo.Descripción}
        </p>
      </div>
    </div>
  );
}

export default Museo;
