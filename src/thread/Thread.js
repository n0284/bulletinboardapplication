import "./Thread.css";
import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';

function Thread(threadData) {
  // Home.jsからもらったスレッドID、スレッドタイトルの受け取り
  const location = useLocation();
  const state = location.state;

  const [threadPosts, setThreadPosts] = useState();

  // 投稿一覧の取得
  useEffect(() => {
    fetch("https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/" + state.id + "/posts")
      .then((response) => response.json())
      .then((data) => setThreadPosts(data));
  }, [state.id]);

  // useEffectが動いた後にthreadPostsを取得するためのメソッド
  const threadsPostsDisplay = () => {
    if (threadPosts !== undefined) {
        console.log(threadPosts)
      return threadPosts.posts.map((post) => (
        <li key={post.id}>{post.post}</li>
      ));
    }
  };

  return (
    <div className="Thread">
      <h1>{state.title}</h1>
      <div className="list">
        <ul>{threadsPostsDisplay()}</ul>
      </div>
    </div>
  );
}

export default Thread;