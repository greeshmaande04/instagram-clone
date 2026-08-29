import './index.css'

const PostActions = ({liked, onToggleLike, onShare}) => {
  return (
    <div className="actions-container">
      <button type="button" className="action-btn" onClick={onToggleLike}>
        {liked ? '❤️' : '🤍'}
      </button>
      <button type="button" className="action-btn" onClick={onShare}>
        📤
      </button>
    </div>
  )
}

export default PostActions