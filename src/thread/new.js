import "./new.css";
import { Link } from "react-router-dom";
import React, { useRef } from "react";

function Create_thread() {
  const textRef = useRef("")

  console.log('レンダリング')

  const post = (text) => {
    const url = "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads";
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: text })
    };
    fetch(url, options);
    textRef.current.value = null;
  }

  return (
    <div className="Create_thread">
      <h1>スレッド新規作成</h1>
      <input ref={textRef} type="text" />
      <button onClick={() => post(textRef.current.value)}>作成</button>
      <p></p>
      <Link to="/">Topに戻る</Link>
    </div>
  );
}

export default Create_thread;
