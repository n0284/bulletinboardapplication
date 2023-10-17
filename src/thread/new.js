import "./new.css";
import { Link } from "react-router-dom";
import React, { useRef } from "react";

function CreateThread() {
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
        <input ref={textRef} type="text" class="threadname" />
      </div>
      <div class="buttondiv">
        <div class="link">
          <Link to="/" class="top">
            Topに戻る
          </Link>
        </div>
        <div class="create">
          <button class="button" onClick={() => post(textRef.current.value)}>
            作成
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateThread;
