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
  const [selectedVideo, setSelectedVideo] = useState({});
  const { videoId } = useParams();

  const api = "https://project-2-api.herokuapp.com";
  const apiKey = "f3ef71cd-9786-4b6f-b650-462fa70aa880";

  // useEffect only executed once on first mount
  useEffect(() => {
    getVideos();
  }, []);


  useEffect(() => {
    if (videoId) {
      getVideo(videoId);
    } else if (VideoList.length) {
      getVideo(VideoList[0]?.id);
    }
  }, [videoId, VideoList]);

  function getVideos() {
    axios
      // gets videolist info from api
      .get(`${api}/videos?api_key=${apiKey}`)
      .then((res) => {
        setVideoList(res.data);
      })
      .catch((err) => {
        console.log("error:", err);
      });
  }

  function getVideo(videoId) {
    axios
    // gets video info from api 
      .get(`${api}/videos/${videoId}?api_key=${apiKey}`)
      .then((response) => {
        setSelectedVideo(response.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }

  return (
    <div className="app">
      {VideoList && selectedVideo.comments && (
        <Video selectedVideo={selectedVideo} />
      )}
      <div className="desktop__layout">
        <div className="desktop__layout1">
          {VideoList && selectedVideo.comments && (
            <VideoDetails selectedVideo={selectedVideo} />
          )}
          {VideoList && selectedVideo.comments && (
            <Comments selectedVideo={selectedVideo} />
          )}
        </div>
        <div className="desktop__layout2">
          {VideoList && selectedVideo.comments && (
            <VideosList
              selectedVideo={selectedVideo}
              VideoList={VideoList.filter(
                (video) => video.id !== selectedVideo.id
              )}
            />
          )}
        </div>
      </div>
    </div>
  );
}
export default HomePage;
