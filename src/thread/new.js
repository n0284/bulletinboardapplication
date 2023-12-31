import "./new.css";
import { Link } from "react-router-dom";
import React, { useRef } from "react";

function CreateThread() {
  // useStateだと１文字ずつ再読込されてしまうのでuseRefを使う
  const textRef = useRef("");

  const post = (text) => {
    const url =
      "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads";
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: text }),
    };
    fetch(url, options)
      .then((response) => {
        // postした結果失敗だった場合
        if (!response.ok) {
          console.error("サーバーエラー");
          console.error(response.json());
        }
        // postしたらフォームをクリア
        textRef.current.value = null;
      })
      // postできなかった場合
      .catch((error) => {
        console.error("通信に失敗しました", error);
      });
  };

  return (
    <div className="Create_thread">
      <h1>スレッド新規作成</h1>
      <div className="input">
        <input ref={textRef} type="text" className="threadname" />
      </div>
      <div className="buttondiv">
        <div className="link">
          <Link to="/" className="top">
            Topに戻る
          </Link>
        </div>
        <div className="create">
          <button className="button" onClick={() => post(textRef.current.value)}>
            作成
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateThread;
