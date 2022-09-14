import "./App.css";
import NavBar from "./component/NavBar";
import DetailSong from "./component/DetailSong";
import ListSong from "./component/ListSong";
import { Songs } from "./Context";
import DataSongs from "./data/songs.json";
function App() {
  return (
    <div className="Ap">
      <Songs.Provider value={{ DataSongs }}>
        <NavBar />
        <div className="grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden">
          <DetailSong />
          <ListSong />
        </div>
      </Songs.Provider>
    </div>
  );
}

export default App;
