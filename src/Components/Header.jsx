import { Link } from "react-router-dom";
function Header() {
  return (
    <div
      className=" fixed w-full h-16 flex  items-center  
       bg-zinc-900 text-white"
    >
      <svg
        className="w-16 h-auto  ml-2 mr-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          d="M3 21h18M4 18h16M6
           10v8m4-8v8m4-8v8m4-8v8M4
            9.5v-1c0-.3.2-.6.5-.8l7-4.5a1
             1 0 0 1 1 0l7 4.5c.3.2.5.5.5.8v1c0
              .3-.2.5-.5.5h-15a.5.5 0 0 1-.5-.5Z"
        />
      </svg>

      <p className=" text-xl w-full pl-8">MUSEOS DE MURCIA</p>
      <ul className="hidden md:flex  flex-row gap-20 ">
        <li className="  text-xl font-bold">
          <Link to="/">Home</Link>
        </li>
        <li className=" text-xl font-bold">
          <Link to="/museos">Museos</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
