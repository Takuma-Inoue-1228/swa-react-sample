import { Link } from "react-router-dom";

export const Top = () => {
  return (
    <>
      <h2 className="text-3xl ">Top画面</h2>
      <p>hello world</p>
      <p>
        <Link to={"/about"}>About画面へ</Link>
      </p>
    </>
  );
};
