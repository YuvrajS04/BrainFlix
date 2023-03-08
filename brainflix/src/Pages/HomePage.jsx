
import "../App.scss";


import videoDetails from "../assets/Data/video-details.json";
import nextVideosList from "../assets/Data/videos.json"
import VideoDetails from "../components/VideoDetails/VideoDetails";
import Comments from "../components/CommentList/CommentList";
import Video from "../components/Video/Video";
import Header from "../components/Header/Header";
import { useState } from "react";
import VideosList from "../components/VideosList/VideosList";



function HomePage() {
  const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);
  
  
  const handleVideoClick = (id) => {
    const findVideo = videoDetails.find((video) => video.id === id)
    setSelectedVideo(findVideo)
  }  

  return (
    <div className="app">
    <Video selectedVideo={selectedVideo} />
    <VideoDetails selectedVideo={selectedVideo} />
    <Comments selectedVideo={selectedVideo} />
    <VideosList selectedVideo={selectedVideo} handleVideoClick={handleVideoClick} />
    </div>
  );
  }
  export default HomePage;