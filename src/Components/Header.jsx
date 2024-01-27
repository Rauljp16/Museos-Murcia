import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function Header() {
  return (
    <div
      className=" absolute w-screen h-20 flex flex-row justify-between items-center pl-4 pr-60
      bg-black text-white"
    >
      <svg
        className="w-14 h-12  ml-8 mr-8"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          d="M3 21h18M4 18h16M6 10v8m4-8v8m4-8v8m4-8v8M4 9.5v-1c0-.3.2-.6.5-.8l7-4.5a1 1 0 0 1 1 0l7 4.5c.3.2.5.5.5.8v1c0 .3-.2.5-.5.5h-15a.5.5 0 0 1-.5-.5Z"
        />
      </svg>

      <p className="flex flex-col text-5xl ">MUSEOS DE MURCIA</p>
      <ul className="flex flex-row gap-20 ">
        <li className="text-xl font-bold bg-gradient-to-r from-yellow-300 via-sky-300 to-lime-300 inline-block text-transparent bg-clip-text">
          <Link to="/">Home</Link>
        </li>
        <li className="text-xl font-bold bg-gradient-to-r from-yellow-300 via-sky-300 to-lime-300 inline-block text-transparent bg-clip-text ">
          <Link to="/Museos">Museos</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
