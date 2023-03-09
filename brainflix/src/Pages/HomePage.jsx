
import "../App.scss";


import VideoDetails from "../components/VideoDetails/VideoDetails";
import Comments from "../components/CommentList/CommentList";
import Video from "../components/Video/Video";
import VideosList from "../components/VideosList/VideosList";

import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";



function HomePage() {
    const [VideoList, setVideoList] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState({
        id: ''
    });
    const { videoId } = useParams();

    

    const api = "https://project-2-api.herokuapp.com";
    const apiKey = "f3ef71cd-9786-4b6f-b650-462fa70aa880";

    useEffect(()=>{
        getVideos();
    }, []);

    useEffect(()=>{
        if(videoId){
            getVideo(videoId);
        }else {
            getVideo(VideoList[0]?.id)
        }
    }, [videoId, VideoList]);

    function getVideos(){
        axios
        .get(`${api}/videos/?api_key=${apiKey}`)
        .then((res)=>{
            setVideoList(res.data);
        })
        .catch((err)=>{
            console.log("error")
        })
    }

    function getVideo(videoId){
        axios
        .get(`${api}/videos/${videoId}?api_key=${apiKey}`)
        .then((response)=>{
            setSelectedVideo(response.data);
        })
        .catch((err)=>{
            console.log("error")
        })
    }





  

  return (
    <div className="app">
   { VideoList && selectedVideo.comments && <Video selectedVideo={selectedVideo} />}
   { VideoList && selectedVideo.comments && <VideoDetails selectedVideo={selectedVideo} /> }
   { VideoList && selectedVideo.comments &&  <Comments selectedVideo={selectedVideo} /> }
   { VideoList && selectedVideo.comments && <VideosList selectedVideo={selectedVideo} VideoList={VideoList.filter((video) => video.id !== selectedVideo.id)}  />}
    </div>
  );
  }
  export default HomePage;