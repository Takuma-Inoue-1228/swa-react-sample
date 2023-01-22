import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <>
      <h2>404画面</h2>
      <p>
        <Link to={"/"}>Top画面へ</Link>
      </p>
    </>
  );
};
