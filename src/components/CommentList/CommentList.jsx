import "./CommentList.scss";
import Comment from "../Comment/Comment";
import avatar from "../../assets/Images/Mohan-muruge.jpg";

function CommentList({ selectedVideo }) {
  return (
    <section className="comments-section">
      <h2 className="comments-section-number">{selectedVideo.comments.length} comments</h2>
      <form className="form">
        <div className="form__wrapper">
          <div className="form__wrapper-left">
            <img src={avatar} alt="avatar image" className="form__avatar" />
          </div>
          <div className="form__wrapper-right">
            <div className="form__wrapper-input">
              <label htmlFor="textarea" className="form__title">
                JOIN THE CONVERSATION
              </label>
              <textarea
                id="textarea"
                placeholder="Add a comment"
                className="form__textarea"
              ></textarea>
            </div>
            <div>
              <button className="form__button">COMMENT</button>
            </div>
          </div>
        </div>
      </form>
      <div className="comments">
        <ul className="comments__list">
          <Comment selectedVideo={selectedVideo} />
        </ul>
      </div>
    </section>
  );
}

export default CommentList;
