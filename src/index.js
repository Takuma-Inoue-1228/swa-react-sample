import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// 変数を定義
const takumaData = {
  name: "takuma",
  age: 30,
};
// グローバルで使うcontextのオブジェクトを生成
export const TestContextData = createContext(takumaData);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TestContextData.Provider value={takumaData}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TestContextData.Provider>
);

reportWebVitals();
