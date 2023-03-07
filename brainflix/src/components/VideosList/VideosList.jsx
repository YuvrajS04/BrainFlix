import "./VideosList.scss"
import NextVideo from "../NextVideo/NextVideo";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
    
export const api = "https://project-2-api.herokuapp.com";
export const apiKey = "f3ef71cd-9786-4b6f-b650-462fa70aa880";



useEffect

function VideosList(props){
return (

<div>
    <h3 className="next-videos__title">NEXT VIDEOS</h3>
    {props.videosList
    .filter((video) => video.id !== props.selectedVideo.id)
    .map((video) => (
    <NextVideo key={video.id} video={video} handleVideoClick={props.handleVideoClick}/>
    )
    )}
</div>

);
}  

export default VideosList;