import "./App.css";
import Home from "./Home";
import { Routes, Route, Link } from "react-router-dom";
import Create_thread from "./thread/new";

function App() {
  return (
    <div className="App">
      <header className="home-header">掲示板</header>
      <Link to="/thread/new">スレッドをたてる</Link>
      {/* <Link to="/">Home</Link> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thread/new" element={<Create_thread />} />
      </Routes>
    </div>
  );
}

export default App;
