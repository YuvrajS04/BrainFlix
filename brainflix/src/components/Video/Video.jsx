import "./Video.scss";

function Video(props) {
  return (
    <div className="video__wrapper">
      <video
        src={props.selectedVideo.video + "?api_key='yuvrajs'"}
        controls
        poster={props.selectedVideo.image}
        className="video"
      ></video>
    </div>
  );
}

export default Video;
