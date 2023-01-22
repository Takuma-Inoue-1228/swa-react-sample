import { Link } from "react-router-dom";

export const Top = () => {
  return (
    <>
      <h1 className="text-3xl text-red-500">Hello world!</h1>
      <h2>Top画面</h2>
      <p>hello world</p>
      <p>
        <Link to={"/about"}>About画面へ</Link>
      </p>
    </>
  );
};
