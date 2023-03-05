function Comment(props) {
   
    return (
        <>
         {props.selectedVideo.comments.map((comment) => {return (
         <li key={comment.id} className="comments__list-item">
         <div className="comments__wrapper">
          <div className="comments__avatar"></div>
          <div className="comments__wrapper-right">
            <div className="comments__wrapper-top">
              <p className="comments__name">{comment.name}</p>
              <p className="comments__date">{new Date(comment.timestamp).toLocaleDateString()}</p>
            </div>
            <p className="comments__text">
              {comment.comment}
            </p>
          </div>
         </div>
         </li>)}
       
    ) }
    </>
)
}

export default Comment;