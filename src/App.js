import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

//コンポーネント名はパスカルケースで
const App = () => {
  console.log("最初");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    // 現在のfaceShowFlagの逆のbooleanを入れる
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        // flagがfalseのときだけtrueにする
        // じゃないと毎回ステートが変わって再レンダリングが走る
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);
  // 空の配列を渡すと最初の1回だけレンダリングされる
  // 配列を渡すと、その配列が変わるたびに再レンダリングされる
  // faceShowFlagを監視しないとESLintが警告してくるが、今回はあえてfaceShowFlagを監視させたくないので書かない

  return (
    // reactでreturnするときは1つのタグで囲まないといけない
    // 不要なdivなどを防ぐためにReact.Fragmentで囲む
    // 空のかっこもReact.Fragmentと同じ扱いになる
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {/* &&の左がtrueのとき右が計算される */}
      {faceShowFlag && <p>😃</p>}
    </>
  );
};

// 他から呼び出せるようにエクスポート
export default App;

// 拡張子は.jsでもエラーにはならないが、Reactコンポーネントであることをわかりやすくするために.jsxにするのがおすすめ
