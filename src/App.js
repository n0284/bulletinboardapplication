import "./App.css";
import Home from "./Home";
import { Routes, Route, Link } from "react-router-dom";
import Create_thread from "./Create_thread";

function App() {
  return (
    <div className="App">
      <header className="home-header">掲示板</header>
      <Link to="/Create_thread">スレッドをたてる</Link>
      {/* <Link to="/">Home</Link> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Create_thread" element={<Create_thread />} />
      </Routes>
    </div>
  );
}

export default App;
