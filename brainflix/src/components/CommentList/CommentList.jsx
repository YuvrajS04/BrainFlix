
import Comment from "../Comment/Comment";

function CommentList({selectedVideo}) {
  return (
    <section className="comments-section">
      <form className="form">
        <div className="form__wrapper">
          <div className="form__avatar"></div>
          <div>
            <h3 className="form__title">JOIN THE CONVERSATION</h3>
            <textarea
              placeholder="Add a comment"
              className="form__textarea"
            ></textarea>
          </div>
          <div>
            <button className="form__button">Comment</button>
          </div>
        </div>
      </form>
      <div className="comments">
        <ul className="comments__list">
        <Comment selectedVideo={selectedVideo}/>
        </ul>
      </div>
    </section>
  );
}

export default CommentList;
