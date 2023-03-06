import "./App.scss";


import videoDetails from "./assets/Data/video-details.json";
import nextVideosList from "./assets/Data/videos.json"
import VideoDetails from "./components/VideoDetails/VideoDetails";
import Comments from "./components/CommentList/CommentList";
import Video from "./components/Video/Video";
import Header from "./components/Header/Header";
import NextVideo from "./components/NextVideo/NextVideo";
import { useState } from "react";
import VideosList from "./components/VideosList/VideosList";



function App() {
  const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);
  const [VideoList, setvideoList] = useState(nextVideosList);
  
  const handleVideoClick = (id) => {
    const findVideo = videoDetails.find((video) => video.id === id)
    setSelectedVideo(findVideo)
  }  

  return (
    <div className="app">
    <Header />
    <Video selectedVideo={selectedVideo} />
    <VideoDetails selectedVideo={selectedVideo} />
    <Comments selectedVideo={selectedVideo} />
    <VideosList videosList={VideoList} selectedVideo={selectedVideo} handleVideoClick={handleVideoClick} />
    </div>
  );
}

export default App;
