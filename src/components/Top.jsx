import { Link } from "react-router-dom";

export const Top = () => {
  return (
    <>
      <h2>Top画面</h2>
      <p>hello world</p>
      <p>I'm takuma</p>
      <p>
        <Link to={"/about"}>About画面へ</Link>
      </p>
    </>
  );
};
