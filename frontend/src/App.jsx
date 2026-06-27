import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import MusicPlay from "./pages/MusicPlay"
import Auth from "./pages/Auth"
import AuthorAuth from "./pages/AuthorAuth"

const App = () => {
  return (
    <>
      <div className="parent-div w-full h-screen p-3 overflow-hidden bg-black">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/play" element={<MusicPlay />} />
          <Route path="/login" element={<Auth defaultIsLogin={true} />} />
          <Route path="/signup" element={<Auth defaultIsLogin={false} />} />
          <Route path="/author-login" element={<AuthorAuth defaultIsLogin={true} />} />
          <Route path="/author-signup" element={<AuthorAuth defaultIsLogin={false} />} />
        </Routes>
      </div>
    </>
  )
}

export default App
