import "./VideosList.scss"
import NextVideo from "../NextVideo/NextVideo";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

    
export const api = "https://project-2-api.herokuapp.com";
export const apiKey = "f3ef71cd-9786-4b6f-b650-462fa70aa880";







function VideosList(props){
    const [VideoList, setVideoList] = useState([]);
    const [currentVideo, setCurrentVideo] = useState({});
    const { videoId } = useParams();

    useEffect(()=>{
        getVideos();
    }, []);

    useEffect(()=>{
        if(videoId){
            getVideo(videoId);
        }else if(VideoList.length){
            getVideo(VideoList[0].id)
        }
    }, [videoId, VideoList]);

    function getVideos(){
        axios
        .get(`${api}/videos/?api_key=${apiKey}`)
        .then((res)=>{
            console.log(res.data)
            setVideoList(res.data);
        })
        .catch((err)=>{
            console.log("error")
        })
    }

    function getVideo(videoId){
        axios
        .get(`${api}/videos/?api_key=${apiKey}/${videoId}`)
        .then((response)=>{
            // console.log(response.data)
            setCurrentVideo(response.data);
        })
        .catch((err)=>{
            console.log("error")
        })
    }




return (

<div>
    <h3 className="next-videos__title">NEXT VIDEOS</h3>
    <div className="next-video">
    {VideoList
    // .filter((video) => video.id !== currentVideo.id.)
    .map((video) =>(
        <Link key={video.id} to={`videos/?api_key=${apiKey}/${videoId}`}>
            <NextVideo image={video.image} title={video.title} channel={video.channel} />
        </Link> 
    )
    )

    }
</div>
</div>

)
}  

export default VideosList;
