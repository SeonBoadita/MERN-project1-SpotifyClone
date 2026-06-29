import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import MusicPlay from "./pages/MusicPlay"
import AllSongs from "./components/pageComponents/tabs/AllSongs";
import AllAlbums from "./components/pageComponents/tabs/AllAlbums";
import AllAuthors from "./components/pageComponents/tabs/AllAuthors";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";
import AuthorAuth from "./pages/AuthorAuth";

const App = () => {
  return (
    <>
      <div className="parent-div w-full h-screen p-3 overflow-hidden bg-black">
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<AllSongs />} />
            <Route path="songs" element={<AllSongs />} />
            <Route path="albums" element={<AllAlbums />} />
            <Route path="artists" element={<AllAuthors />} />
          </Route>
          <Route path="/login" element={<Auth />} />
          <Route path="/author-login" element={<AuthorAuth />} />
          <Route path="/play" element={<MusicPlay />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/contactus" element={<Contact />} />
        </Routes>
      </div>
    </>
  )
}

export default App
