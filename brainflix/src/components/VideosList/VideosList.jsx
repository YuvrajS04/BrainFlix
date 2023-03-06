import "./VideosList.scss"
import NextVideo from "../NextVideo/NextVideo";


function VideosList(props){
return (

<div>
    <h3 className="next-videos__title">Next Videos</h3>
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