function Comment(props) {
    console.log(props);
    console.log(props.selectedVideo.selectedVideo.comments);
   
   
    return (
        <>
        {props.selectedVideo.selectedVideo.comments.map((comment) => {return (
        <li className="comments__list-item">
         <div className="comments__wrapper">
          <div className="comments__avatar"></div>
          <div className="comments__wrapper-right">
            <div className="comments__wrapper-top">
              <p className="comments__name">{comment.name}</p>
              <p className="comments__date">{comment.timestamp}</p>
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