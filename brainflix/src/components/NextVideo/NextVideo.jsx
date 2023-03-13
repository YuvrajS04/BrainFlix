import "./NextVideo.scss";

function NextVideo({ image, title, channel }) {
  return (
    <div className="next-video__wrapper">
      <div className="next-video__wrapper-left">
        <img className="next-video__img" src={image} />
      </div>
      <div className="next-video__wrapper-right">
        <div className="next-video__title">
          <p className="next-video__title-text">{title}</p>
        </div>
        <div className="next-video__channel">
          <p className="next-video__channel-text">{channel}</p>
        </div>
      </div>
    </div>
  );
}
export default NextVideo;
