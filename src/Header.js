import React from "react";
import "./Header.css";
import { BsSearch } from "react-icons/bs";
import { FaUserNinja } from "react-icons/fa";
import { useDataLayerValue } from "./DataLayer";

function Header() {
const [{ user }, dispatch] = useDataLayerValue();

  return (
    <div className="header">
      <div className="header__left">
        <BsSearch />
        <input placeholder="Search for artists, somgs, " type="text" />
      </div>
      <div className="header__right">
        <FaUserNinja src={user?.images[0]?.url} alt="" />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
