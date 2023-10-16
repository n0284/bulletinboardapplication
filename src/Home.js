import "./Home.css";
import React, { useState, useEffect } from "react";

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
      return threadsList.map((threads, id) => (
        <li key={id}>{threads.title}</li>
      ));
    }
  };

  return (
      <div className="home">
        <h1>新着スレッド</h1>
        <ul>{threadsListDisplay()}</ul>
      </div>
  );
}

export default Home;
