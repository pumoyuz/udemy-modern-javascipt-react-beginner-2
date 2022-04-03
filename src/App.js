import React from "react";

//コンポーネント名はパスカルケースで
const App = () => {
  const onClickButton = () => alert();
  // jsオブジェクトとしてスタイルを渡せる
  const contentStyle = {
    color: "blue",
    fontSize: "18px"
  };

  return (
    // reactでreturnするときは1つのタグで囲まないといけない
    // 不要なdivなどを防ぐためにReact.Fragmentで囲む
    // 空のかっこもReact.Fragmentと同じ扱いになる
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <p style={contentStyle}>お元気ですか？</p>
      {/* なみかっこの中にはjsが書ける */}
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

// 他から呼び出せるようにエクスポート
export default App;

// 拡張子は.jsでもエラーにはならないが、Reactコンポーネントであることをわかりやすくするために.jsxにするのがおすすめ
