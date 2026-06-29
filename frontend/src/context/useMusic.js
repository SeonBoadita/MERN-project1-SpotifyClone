import { useContext } from "react";
import MusicContext from "./MusicContext.jsx";

const useMusic = () => useContext(MusicContext);

export default useMusic;
