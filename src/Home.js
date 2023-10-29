import "./Home.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [threadsList, setThreadsList] = useState();

  useEffect(() => {
    fetch("https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads")
      .then((response) => response.json())
      .then((data) => setThreadsList(data));
  }, []);

  // useEffectが動いた後にthreadsListを取得するためのメソッド
  const threadsListDisplay = () => {
    if (threadsList !== undefined) {
      return threadsList.map((thread) => (
        // stateで遷移先に値を渡す
        <li key={thread.id}>
          <Link className="link" id="thread" to="/thread/Thread" state={{ id:thread.id, title:thread.title }}>{thread.title}</Link>
        </li>
      ));
    }
  };

  return (
    <div className="home">
      <h1>新着スレッド</h1>
      <div className="list">
        <ul>{threadsListDisplay()}</ul>
      </div>
    </div>
  );
}

export default Home;
