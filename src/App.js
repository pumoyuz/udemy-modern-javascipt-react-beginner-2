import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

//コンポーネント名はパスカルケースで
const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const [num, setNum] = useState(0);

  return (
    // reactでreturnするときは1つのタグで囲まないといけない
    // 不要なdivなどを防ぐためにReact.Fragmentで囲む
    // 空のかっこもReact.Fragmentと同じ扱いになる
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>

      <p>{num}</p>
    </>
  );
};

// 他から呼び出せるようにエクスポート
export default App;

// 拡張子は.jsでもエラーにはならないが、Reactコンポーネントであることをわかりやすくするために.jsxにするのがおすすめ
