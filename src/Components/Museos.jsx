function Museos(museos) {
  return (
    <div
      className=" pt-36 flex flex-row flex-wrap text-white
     gap-16 justify-center px-20 bg-black"
    >
      {museos.museos.map((museo, index) => (
        <div
          key={index}
          className="flex flex-col  p-2 w-60 h-80 items-center 
           bg-red-200 opacity-85 shadow-2xl shadow-red-400/50
            gap-5 text-clip overflow-hidden rounded-lg "
        >
          <p className="text-xl uppercase text-red-900 font-mono font-bold">
            {museo.Nombre}
          </p>
          <img className="h-40 w-64" src={museo.Foto} />
          <p className=" overflow-ellipsis">{museo.Descripción}</p>
        </div>
      ))}
    </div>
  );
}

export default Museos;
