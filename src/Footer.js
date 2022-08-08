import React from "react";
import "./Footer.css";

import { FaPlay } from "react-icons/fa";
import { BiSkipPrevious } from "react-icons/bi";
import { BiSkipNext } from "react-icons/bi";
import { IoIosShuffle } from "react-icons/io";
import { IoIosRepeat } from "react-icons/io";

import { MdOutlineQueueMusic } from "react-icons/md";
import { BsFillVolumeDownFill } from "react-icons/bs";
// import { Grid, Slider } from "@material-ui/core";
// import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlayIcon";
// import VolumeDownIcon from "@material-ui/icons/VolumeDownIcon";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img className="footer__albumLogo" src="https://muzoff.net/uploads/posts/2019-09/thumbs/1567961113_screenshot_2.png" alt="" />
        <div className="footer__songInfo">
          <h4>Drama Club</h4>
          <p>Melanie Martinez</p>
        </div>
      </div>
      <div className="footer__center">
        <IoIosShuffle className="footer__green" />
        <BiSkipPrevious className="footer__icon" />
        <FaPlay fontSize="large" className="footer__icon" />
        <BiSkipNext className="footer__icon" />
        <IoIosRepeat className="footer__green" />
      </div>
      <div className="footer__right">
        <MdOutlineQueueMusic className="footer__albums" />
        <BsFillVolumeDownFill className="footer__volume" />
        <input type="range"  maxvalue={20}
        minvalue={0}
        defaultValue={100}
 className="volume" />
      </div>
    </div>
  );
}

export default Footer;
