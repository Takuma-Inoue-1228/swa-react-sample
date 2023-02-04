import { useState, useEffect, useContext, useRef } from "react";
import { TestContextData } from "..";

export const TestHooksPage = () => {
  // useStateでcount変数を定義
  const [count, setCount] = useState(0);
  const [inputData, setInputData] = useState("");

  //contextでグローバル変数となったtakumaDataを受け取る
  const takumaData = useContext(TestContextData);

  const ref = useRef();
  // ボタンが押された時の処理
  const handleClick = () => {
    setCount(count + 1);
  };

  const handleRef = () => {
    setInputData(ref.current.value);
  };

  //count変数が変化した時に画面をレンダリング
  useEffect(() => {}, [count]);

  return (
    <>
      <h2>Hooks</h2>
      <hr />
      {/* UseState,useEffectの検証 */}
      <div className="text-center">
        <h3>UseState,useEffect</h3>
        <p>{count}</p>
        <button
          className="m-4 bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded"
          onClick={handleClick}
        >
          +
        </button>
      </div>
      <hr />

      {/* useContextの検証 */}
      <div className="text-center">
        <h3>useContext</h3>
        <p>{takumaData.name}</p>
        <p>{takumaData.age}</p>
      </div>
      <hr />

      {/* useRefの検証 */}
      <div className="text-center">
        <h3>useRef</h3>
        <input className="shadow  border" type="text" ref={ref} />
        <button
          className="m-4 bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded"
          onClick={handleRef}
        >
          useRef
        </button>
        <p>入力されたデータ：</p>
        <p>{inputData}</p>
      </div>
      <hr />
    </>
  );
};
