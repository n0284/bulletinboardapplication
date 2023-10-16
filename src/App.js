import "./App.css";
import Home from "./Home";
import { Routes, Route, Link } from "react-router-dom";
import CreateThread from "./thread/new";
import { Page404 } from "./page404";

function App() {
  return (
    <div className="App">
      <header className="home-header">掲示板
      <Link id="new" to="/thread/new">スレッドをたてる</Link>
      </header>
      {/* <Link to="/">Home</Link> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thread/new" element={<CreateThread />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
