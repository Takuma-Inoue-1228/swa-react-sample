import { Link } from "react-router-dom";
import { TestLinkData } from "./TestLinkData";

export const TestPage = () => {
  return (
    <>
      <h2>Test画面</h2>
      <div className="mt-12 ml-20">
        <ul>
          {TestLinkData.map((value, key) => {
            return (
              <Link to={`/${value.link}`} key={key}>
                <li className=" list-disc	">
                  <div>{value.icon}</div>
                  <div className="ml-1">{value.title}</div>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </>
  );
};
