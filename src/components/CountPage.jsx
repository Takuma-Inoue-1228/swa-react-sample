import { useCounter } from "../hooks/Counter.jsx";

export const Count = () => {
  const { count, alert, increment, decrement } = useCounter();

  return (
    <>
      <div className="text-center">
        <h2>Count画面</h2>
        <p className="mt-8">現在の値：{count}</p>
      </div>
      <div className="m-4 text-center">
        <button
          className="m-4 bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
          onClick={increment}
        >
          +
        </button>
        <button
          className="m-4 bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded"
          onClick={decrement}
        >
          -
        </button>
      </div>
      {alert && (
        <p className="bg-red-100 border border-red-400 text-red-700 m-4 px-4 py-3 rounded relative">
          値を0以下にはできません。
        </p>
      )}
    </>
  );
};
