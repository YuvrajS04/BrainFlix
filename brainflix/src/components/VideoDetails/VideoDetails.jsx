import "./VideoDetails.scss"
import likeslogo from "../../assets/Icons/likes.svg"
import viewslogo from "../../assets/Icons/views.svg"

function VideoDetails(props) {
  return (
    <section>
      <h1 className="video__title">{props.selectedVideo.title}</h1>
      <div className="video__analytics">
        <div className="video__info">
          <div className="video__name">
            <h2 className="video__name-text">By {props.selectedVideo.channel}</h2>
          </div>
          <div className="video__date" >
            <p className="video__date-text">{new Date(props.selectedVideo.timestamp).toLocaleDateString()}</p>
          </div>
        </div>
        <div className="video__stats">
          <div className="video__views">
          <img className="video__views-icon" src={viewslogo} />
            <p className="video__views-text">{props.selectedVideo.views}</p>
          </div>
          <div className="video__likes">
            <img className="video__likes-icon" src={likeslogo} />
            <p className="video__likes-text">{props.selectedVideo.likes}</p>
          </div>
        </div>
      </div>
      <p className="video__text">{props.selectedVideo.description}</p>
    </section>
  );
}

export default VideoDetails;
