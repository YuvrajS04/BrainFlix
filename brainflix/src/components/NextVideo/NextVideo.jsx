import "./NextVideo.scss"

function NextVideo(props){
    return (
    <div className="next-video">
    <div className="next-video__wrapper" onClick={()=>{props.handleVideoClick(props.video.id)}}>
    <div className="next-video__wrapper-left">
        <img className="next-video__img" src={props.video.image} />
    </div>
    <div className="next-video__wrapper-right">
        <div className="next-video__title">
            <p className="next-video__title-text">{props.video.title}</p>
        </div>
        <div className="next-video__channel">
            <p className="next-video__channel-text">{props.video.channel}</p>
        </div>
    </div>
    </div>
    </div>


);
}
export default NextVideo;