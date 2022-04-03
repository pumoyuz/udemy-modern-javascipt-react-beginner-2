import React from "react";

const ColorfullMessage = (props) => {
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

export default ColorfullMessage;
