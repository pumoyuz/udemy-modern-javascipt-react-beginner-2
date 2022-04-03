import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  // 未完了TODO用の配列
  const [incompleteTodos, setIncompleteTodos] = useState(["あああ", "いいい"]);
  // 完了TODO用の配列
  const [completeTodos, setCompleteTodos] = useState(["ううう"]);
  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              // reactは差分だけ反映するので、ループの場合は何回目なのか明確にするためにkeyが必須
              <li key={todo}>
                <span>{todo}</span>
                <button>完了</button>
                <button>削除</button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <li key={todo}>
                <span>{todo}</span>
                <button>戻す</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
