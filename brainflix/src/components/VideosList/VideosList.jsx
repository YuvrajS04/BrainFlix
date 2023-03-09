import "./VideosList.scss"
import NextVideo from "../NextVideo/NextVideo";

import { Link, useParams } from "react-router-dom";







function VideosList({VideoList, selectedVideo}){
    
return (

<div>
    <h3 className="next-videos__title">NEXT VIDEOS</h3>
    <div className="next-video">
    {VideoList
    // .filter((video) => video.id !== selectedVideo.id)
    .map((video) =>(
        <Link key={video.id} to={`/videos/${video.id}`}>
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
