import { HeaderData } from "./HeaderData";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

export const Header = () => {
  return (
    <header className="flex p-4">
      <Link className="flex w-16" to={"/"}>
        <FaHome className="w-1/4 my-auto  flex items-center" />
        <div className="ml-2">Top</div>
      </Link>

      <div className="ml-auto">
        <ul className="flex gap-8">
          {HeaderData.map((value, key) => {
            return (
              <li
                key={key}
                className="w-16 flex cursor-pointer hover:opacity-50 justify-center items-center "
                onClick={() => {
                  window.location.pathname = value.link;
                }}
              >
                <div className="w-1/4" id="icon">
                  {value.icon}
                </div>
                <div className="w-3/4 ml-2" id="title">
                  {value.title}
                </div>
              </li>
            );
          })}
          {/* <li>
            <FaUserAlt />
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <FaVial />
            <Link to={"/Test"}>Test</Link>
          </li> */}
        </ul>
      </div>
    </header>
  );
};
