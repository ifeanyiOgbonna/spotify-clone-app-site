import React from "react";
import "../styles/RightMenu.css";
import { BiSearchAlt } from "react-icons/bi";
import Artist from "../images/background.jpeg";
import { CiMusicNote1 } from "react-icons/ci"
import { IoHeartOutline } from "react-icons/io5"
import { BsArrowsAngleExpand } from "react-icons/bs"
import { AiFillFastBackward } from "react-icons/ai"
import { BsPauseCircleFill } from "react-icons/bs"
import { BsArrowRepeat } from "react-icons/bs"
import { AiFillFastForward } from "react-icons/ai"
import { BsShuffle } from "react-icons/bs"
import { HiOutlineSpeakerWave } from "react-icons/hi2"
import { IoVolumeLowOutline } from "react-icons/io5"


function RightMenu() {
  return (
    <div className="rightMenu">
      <div className="right-items">
        <div className="container-logo">
          <i class="material-symbols-outlined">arrow_back</i>
          <i class="material-symbols-outlined">arrow_forward</i>
        </div>

        <div className="search-box">
          <input type="text" placeholder="Search for artist,songs add..." />
          <i className="searchIcon">
            <BiSearchAlt />
          </i>
        </div>
      </div>
      <h4 className="main">What's hot 🔥</h4>

      <div className="section-main">
        <div className="section-item">
          <div className="container">
            <h2 className="section-hero">Trending</h2>
            <p className="more">
              More <i class="material-symbols-outlined">keyboard_arrow_right</i>
            </p>
          </div>
        </div>
      </div>

      <div className="banner">
        <img src={Artist} alt="artist" className="bannerImg" />
        <div className="content">
          <div className="breadCrumb">
            <p className="artComb">Artist</p>
          </div>
          <div className="artist">
            <h2 className="header-title">On Top Of The World</h2>
          </div>

          <div className="artist-input">
            <button type="button" className="btn-p">
              PLAY
            </button>
            <button type="button" className="btn-f">
              FOLLOW
            </button>

            <div className="testimonial">
              <p className="monthly">Monthly Listener</p>
              <p className="grade">32.092</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section-auto">
        <div className="auto-main">
          <h2 className="auto-header">MY Playlist</h2>
          <p className="auto-sub">show All</p>
        </div>
      </div>

      <div className="table-header">
        <div className="table-title">
          <p className="item">#</p>
          <div className="titles">TITLE</div>
          <div className="titles">ARTIST</div>
          <div className="titles">TIME</div>
          <div className="titles">ALBUM</div>
        </div>


        <div className="table-content">
          <div className="table-component">
            <ul>
              <li>01</li>
              <li>Priority</li>
              <li>Mos Def</li>
              <li>1:25</li>
              <li>The Ecstatic</li>
            </ul>

            <div className="table-component">
              <ul>
                <div>02</div>
                <li>Common Person</li>
                <li>Burna Boy</li>
                <li>2:59</li>
                <li>Love,Damini</li>
              </ul>
            </div>

            <div className="table-component">
              <ul>
                <li>03</li>
                <li>Dreams</li>
                <li>Boys Spyce</li>
                <li>3:23</li>
                <li>Folake</li>
              </ul>
            </div>

            <div className="table-component">
              <ul>
                <li>04</li>
                <li>Johnny Drille</li>
                <li>Wait For Me</li>
                <li>4:25</li>
                <li>Wait For Me</li>
              </ul>
            </div>

            <div className="table-component">
              <ul>
                <li>05</li>
                <li>Johnny Drille</li>
                <li>Home</li>
                <li>1:25</li>
                <li>Home</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="container-box">
        <div className="box">
          <div className="icon-container">
            <div className="comment-icon">
              <i className="icon">
                <IoHeartOutline />
              </i>
              <i className="icon">
                <CiMusicNote1 />
              </i>
              <i className="icon">
                <BsArrowsAngleExpand />
              </i>
            </div>


            <div className="icon-box">

              <i className="iconsu">
                <BsArrowRepeat />
              </i>
              <i className="icons">
                <AiFillFastBackward />
              </i>

              <i className="iconses">
                <BsPauseCircleFill />
              </i>
              <i className="icons">
                <AiFillFastForward />
              </i>
              <i className="iconsu">
                <BsShuffle />
              </i>
            </div>

            <div className="content-speak">
              <i className="speak-icon">
                <IoVolumeLowOutline />
              </i>
              <input type="range" />
              <i className="speak-icon">
                <HiOutlineSpeakerWave />
              </i>
            </div>
          </div>
          <div className="playList">
            <div className="container-playList">
              <p className="minute">0:43s</p>
              <input type="range" />
              <p className="minute">2:59</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export { RightMenu };