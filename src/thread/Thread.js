import "./Thread.css";
import React, { useState, useEffect } from "react";

function Thread() {
  const [threadPosts, setThreadPosts] = useState();

  // 投稿一覧の取得
  useEffect(() => {
    // threadId（仮）Home.jsからもらう
    // スレッドタイトルももらう htmlのh1に入れる
    const threadId = "32dd0c37-ce1b-4ebe-bac7-2e7e022da345"
    fetch("https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/" + threadId + "/posts")
      .then((response) => response.json())
      .then((data) => setThreadPosts(data));
  }, []);

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
      <h1>新着スレッド</h1>
      <div className="list">
        <ul>{threadsPostsDisplay()}</ul>
      </div>
    </div>
  );
}

export default Thread;