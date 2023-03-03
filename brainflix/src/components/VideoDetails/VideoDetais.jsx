function VideoDetails(props) {
  console.log(props);
  return (
    <section>
        <video src={props.selectedVideo.video} className="video"></video>
      <h1 className="video__title">{props.selectedVideo.title}</h1>
      <div className="video__analytics">
        <div className="video__info">
          <h2 className="video__name">{props.selectedVideo.channel}</h2>
          <p className="video__date">{props.selectedVideo.timestamp}</p>
        </div>
        <div className="video__stats">
          <p className="video__views">{props.selectedVideo.views}</p>
          <p className="video__likes">{props.selectedVideo.likes}</p>
        </div>
      </div>
      <p>{props.selectedVideo.description}</p>
    </section>
  );
}

export default VideoDetails;
