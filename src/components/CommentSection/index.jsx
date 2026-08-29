const CommentSection = ({comments}) => (
  <div className="comments-container">
    {comments.map(comment => (
      <p key={comment.id}>
        <span className="comment-user">{comment.user}</span> {comment.text}
      </p>
    ))}
  </div>
)

export default CommentSection