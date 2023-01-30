import { HeaderData } from "./HeaderData";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

export const Header = () => {
  return (
    <header className="flex p-4">
      <Link className="flex w-16" to={"/"}>
        <FaHome className="w-1/4 my-auto  flex items-center" />
        <div className="ml-1">Top</div>
      </Link>

      <div className="ml-auto">
        <ul className="flex gap-4">
          {HeaderData.map((value, key) => {
            return (
              <Link
                className="cursor-pointer hover:opacity-50"
                to={`/${value.link}`}
              >
                <li key={key} className=" flex  items-center ">
                  <div>{value.icon}</div>
                  <div className="ml-1">{value.title}</div>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </header>
  );
};
