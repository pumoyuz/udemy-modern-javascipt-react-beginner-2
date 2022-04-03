import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");

  // 未完了TODO用の配列
  const [incompleteTodos, setIncompleteTodos] = useState(["あああ", "いいい"]);
  // 完了TODO用の配列
  const [completeTodos, setCompleteTodos] = useState(["ううう"]);

  // inputのテキストが変わった時にvalueの値を取る
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    // スプレッド構文でincompleteTodosをコピーして、todoTextを追加
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    // 指定されたindexから1つ削除する
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              // reactは差分だけ反映するので、ループの場合は何回目なのか明確にするためにkeyが必須
              <li key={todo}>
                <span>{todo}</span>
                <button>完了</button>
                {/* 引数を渡したいときはアロー関数にしないとこの場で関数が実行されてしまう */}
                <button onClick={() => onClickDelete(index)}>削除</button>
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
