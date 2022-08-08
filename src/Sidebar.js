import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
//import HomeIcon from '@mui/icons-material/Home';
//import SearchIcon from '@mui/icons-material/Search';
//import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { AiFillHome } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { VscLibrary } from "react-icons/vsc";
import { useDataLayerValue } from "./DataLayer";

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOption Icon={AiFillHome} title="Home" />
      <SidebarOption Icon={BsSearch} title="Search" />
      <SidebarOption Icon={VscLibrary} title="Your Library" />

      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />

      {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
      ))}
    </div>
  );
}

export default Sidebar;
