import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");

  // 未完了TODO用の配列
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  // 完了TODO用の配列
  const [completeTodos, setCompleteTodos] = useState([]);

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

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    // 未完了のTODOから削除
    newIncompleteTodos.splice(index, 1);

    // 完了したTODOの後ろに消した未完了TODOを追加
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    // 未完了TODOを書き換え
    setIncompleteTodos(newIncompleteTodos);
    // 完了TODOを書き換え
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <li key={todo}>
                <span>{todo}</span>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
