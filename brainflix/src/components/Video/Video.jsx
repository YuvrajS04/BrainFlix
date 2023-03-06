import "./Video.scss"
function Video(props){

return(
<video src={props.selectedVideo.video + "?api_key='yuvrajs'"} controls poster={props.selectedVideo.image} className="video"></video>
)
};

export default Video;