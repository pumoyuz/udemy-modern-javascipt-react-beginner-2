import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            // reactは差分だけ反映するので、ループの場合は何回目なのか明確にするためにkeyが必須
            <li key={todo}>
              <span>{todo}</span>
              <button onClick={() => onClickComplete(index)}>完了</button>
              {/* 引数を渡したいときはアロー関数にしないとこの場で関数が実行されてしまう */}
              <button onClick={() => onClickDelete(index)}>削除</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
