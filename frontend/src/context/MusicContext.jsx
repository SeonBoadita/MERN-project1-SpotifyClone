import { createContext, useState, useEffect } from "react";
import api from "../api/axiosInstance.js";

const MusicContext = createContext(null);

export const MusicProvider = ({ children }) => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        api.get("/music/api/musics")
            .then((res) => {
                if (res.data && res.data.musics) {
                    setSongs(res.data.musics);
                }
            })
            .catch((err) => {
                console.error("Error fetching songs: ", err);
            });
    }, []);

    return (
        <MusicContext.Provider value={{ songs }}>
            {children}
        </MusicContext.Provider>
    );
};

export default MusicContext;
