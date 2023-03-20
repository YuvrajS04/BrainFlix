import image from "../../assets/Images/Upload-video-preview.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import "./UploadPage.scss";
import axios from "axios";

// creates an alert if description or videoTitle field is missing info otherwise submit and go back to homepage
function UploadPage() {
  const formRef = useRef();
  const navigate = useNavigate();

  const api = "http://localhost:8082";
  const handlePublish = (event) => {
    event.preventDefault();
    // const form = event.target;
    // const videoTitle = form.title.target;
    // const description = form.description.target;

    const { title, description } = formRef.current;
    // console.log(formRef.current.title.value, formRef.current.description.value )

    const newVideo = {
      title: title.value,
      description: description.value,
    };

    if (description.value === " " || title.value === " ") {
      alert("Please add a video title and description");
    } else {
      postVideos(newVideo);
      alert("Thank you for submitting");
      navigate("/");
    }
    event.target.reset();
  };

  function postVideos(formData) {
    axios

      .post(`${api}/videos`, formData)
      .then((_res) => {
        console.log("your request was received");
      })
      .catch((err) => {
        console.log("error:", err);
      });
  }

  return (
    <article className="Upload">
      <h1 className="Upload__title">Upload Video</h1>
      <form className="Upload__form" ref={formRef} onSubmit={handlePublish}>
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
              name="title"
              id="title"
              placeholder="Add a title to your video"
              type="text"
              className="Upload__video-input"
            />
            <label htmlFor="description" className="Upload__video-label">
              add a video description
            </label>
            <textarea
              name="description"
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
