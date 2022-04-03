import React from "react";

// このexport方法が一般的
// 理由：コンポーネントの名前が確約される、１ファイルから複数exportできる
export const ColorfulMessage = (props) => {
  // props.変数名 にしなくてよくなる
  const { color, children } = props;

  // jsオブジェクトとしてスタイルを渡せる
  const contentStyle = {
    // color : color, の省略記法
    color,
    fontSize: "18px"
  };
  // なみかっこで　jsを書ける
  // childrenはタグで囲った中身
  return <p style={contentStyle}>{children}</p>;
};
