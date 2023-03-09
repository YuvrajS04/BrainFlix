import "./Comment.scss"

function Comment({selectedVideo}) {
  return (
    <>
      {selectedVideo.comments.map((comment) => {
        return (
          <li key={comment.id} className="comments__list-item">
            <div className="comments__wrapper">
              <div className="comments__avatar"></div>
              <div className="comments__wrapper-right">
                <div className="comments__wrapper-top">
                  <p className="comments__name">{comment.name}</p>
                  <p className="comments__date">
                    {new Date(comment.timestamp).toLocaleDateString("en-US", {year:"numeric", month:"2-digit", day:"2-digit"})}
                  </p>
                </div>
                <p className="comments__text">{comment.comment}</p>
              </div>
            </div>
          </li>
        );
      })}
    </>
  );
}

export default Comment;
