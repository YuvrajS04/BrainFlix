import "./NextVideo.scss"

function NextVideo(props){
    return (
    <div className="next-video">
    <div className="next-video__wrapper" onClick={()=>{props.handleVideoClick(props.video.id)}}>
    <div className="next-video__wrapper-left">
        <img className="next-video__img" src={props.image} />
    </div>
    <div className="next-video__wrapper-right">
        <p className="next-video__title">{props.title}</p>
        <p className="next-video__title">{props.channel}</p>
    </div>
    </div>
    </div>


);
}
export default NextVideo;