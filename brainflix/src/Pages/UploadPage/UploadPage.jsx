import image from "../../assets/Images/Upload-video-preview.jpg";
import { Link, useNavigate } from "react-router-dom";
import "./UploadPage.scss";

function UploadPage() {
  const navigate = useNavigate();
  const handlePublish = (event) => {
    event.preventDefault();
    const form = event.target;
    const videoTitle = form.title.target;
    const description = form.description.target;

    if (description === " " || videoTitle === " ") {
      alert("Please add a video title and description");
    } else {
      alert("Thank you for submitting");
      navigate("/");
    }
  };

  return (
    <article className="Upload">
      <h1 className="Upload__title">Upload Page</h1>
      <form className="Upload__form" onSubmit={handlePublish}>
        <div className="Upload__wrapper">
          <div className="thumbnail">
            <p className="thumbnail__title">Video thumbnail</p>
            <img className="thumbnail__image" src={image} />
          </div>
          <div className="Upload__video">
            <label htmlFor="title" className="Upload__video-label">
              title your video
            </label>
            <input
              id="title"
              placeholder="Add a title to your video"
              type="text"
              className="Upload__video-input"
            />
            <label htmlFor="description" className="Upload__video-label">
              add a video description
            </label>
            <textarea
              id="description"
              placeholder="Add a description to your video"
              type="text"
              className="Upload__description-input"
            ></textarea>
          </div>
        </div>
        <div className="Upload__button">
          <button className="button__publish">publish</button>
          <button className="button__cancel">Cancel</button>
        </div>
      </form>
    </article>
  );
}

export default UploadPage;
