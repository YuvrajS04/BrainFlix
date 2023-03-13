import "./VideosList.scss";
import NextVideo from "../NextVideo/NextVideo";

import { Link } from "react-router-dom";

function VideosList({ VideoList }) {
  return (
    <section className="next-video__section">
      <h3 className="next-videos__title">NEXT VIDEOS</h3>
      <div className="next-video">
        {VideoList
          // maps through each video and creates a NextVideo component for each video
          .map((video) => (
            <Link key={video.id} to={`/videos/${video.id}`}>
              <NextVideo
                image={video.image}
                title={video.title}
                channel={video.channel}
              />
            </Link>
          ))}
      </div>
    </section>
  );
}

export default VideosList;
