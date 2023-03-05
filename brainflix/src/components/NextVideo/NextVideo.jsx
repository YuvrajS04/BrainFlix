
function NextVideo(props){
    return (

    <div onClick={()=>{props.handleVideoClick(props.video.id)}}>
    <p>{props.video.title}</p>
    <img src={props.video.image} />
    </div>


)
}
export default NextVideo;