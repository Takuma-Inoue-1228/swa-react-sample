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
        <ul className="flex gap-4">
          {HeaderData.map((value, key) => {
            return (
              <li
                key={key}
                className="w-auto flex cursor-pointer hover:opacity-50 items-center "
              >
                <div className="w-1/4">{value.icon}</div>
                <Link className="w-3/4 ml-1" to={`/${value.link}`}>
                  {value.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};
