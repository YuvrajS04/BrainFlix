import "./App.scss";
import logo from "./assets/Logo/BrainFlix-logo.svg";
import avatar from "./assets/Images/Mohan-muruge.jpg";

import videoDetails from "./assets/Data/video-details.json"
import VideoDetails from "./components/VideoDetails/VideoDetais";
import Comments from "./components/CommentList/CommentList";
import { useState } from "react"


function App() {
  const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);
  // console.log(selectedVideo);
  return (
    <div className="app">

    <VideoDetails selectedVideo={selectedVideo} />
    <Comments selectedVideo={selectedVideo} />
    </div>
    // <div>
    //   <header className="header">
    //     <a href="#">
    //       <img className="logo" src={logo}></img>
    //     </a>
    //     <div className="header__container">
    //       <input
    //         placeholder="input"
    //         className="header__container-input"
    //       ></input>
    //       <img src={avatar} className="header__container-avatar"></img>
    //       <a href="#" className="header__container-button">
    //         Upload
    //       </a>
    //     </div>
    //   </header>
    //   <section className="video">
    //     <video></video>
        // <h1 className="video__title">BMX Rampage: 2021 Highlights</h1>
        // <div className="video__analytics">
        //   <div className="video__info">
        //     <h2 className="video__name">By Red Crow</h2>
        //     <p className="video__title">07/11/2021</p>
        //   </div>
        //   <div className="video__stats">
        //     <p className="video__views">1,001,023</p>
        //     <p className="video__likes">110,985</p>
        //   </div>
        // </div>
    //   </section>
      // <section className="comments-section">
      //   <form className="form">
      //     <div className="form__wrapper">
      //       <div className="form__avatar"></div>
      //       <div>
      //         <h3 className="form__title">JOIN THE CONVERSATION</h3>
      //         <textarea
      //           placeholder="Add a comment"
      //           className="form__textarea"
      //         ></textarea>
      //       </div>
      //       <div>
      //         <button className="form__button">Comment</button>
      //       </div>
      //     </div>
      //   </form>
      //   <div className="comments">
      //     <ul className="comments__list">
      //       <li className="comments__list-item">
      //         <div className="comments__wrapper">
      //           <div className="comments__avatar"></div>
      //           <div className="comments__wrapper-right">
      //             <div className="comments__wrapper-top">
      //               <p className="comments__name">Micheal Lyons</p>
      //               <p className="comments__date">08/09/2021</p>
      //             </div>

      //             <p className="comments__text">
      //               sdkjzfjfsd,gnskdfjfdkmnc vkjzdfbv xknbm zbmfzb zfdb zfdbj
      //             </p>
      //           </div>
      //         </div>
      //       </li>
      //     </ul>
      //   </div>
      // </section>
    //   <section className="recommonded">
    //     <h3>NEXT VIDEOS</h3>
    //     <div className="recommended__videos">
    //       <div className="recommended__videos-wrapper">
    //         <div className="recommended__avatar"></div>
    //         <div className="recommended__wrapper-right">
    //           <p className="recommended__video-title">
    //             Become A Travel Pro In One Easy Lesson
    //           </p>
    //           <p className="recommended__video-author">Todd Welch</p>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>
  
  );
}

export default App;
