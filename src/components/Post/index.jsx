import {useState} from 'react'
import PostActions from '../PostActions'
import CommentSection from '../CommentSection'

import './index.css'

const Post = props => {
  const {details, onToggleLike, onAddComment, onShare} = props
  const {id, username, imageUrl, caption, likes, profileImage, location, comments, liked, shares} = details
  const [commentText, setCommentText] = useState('')

  const onSubmitComment = event => {
    event.preventDefault()
    if (!commentText.trim()) {
      return
    }
    onAddComment(id, commentText.trim())
    setCommentText('')
  }

  return (
    <article className="post-card">
      <div className="post-header">
        <div className="profile-info">
          <img src={profileImage} alt="profile" className="post-avatar" />
          <div>
            <p className="post-user">{username}</p>
            <p className="post-location">{location}</p>
          </div>
        </div>
        <button type="button" className="more-icon">⋯</button>
      </div>

      <img src={imageUrl} alt="post" className="post-image" />

      <PostActions liked={liked} onToggleLike={() => onToggleLike(id)} onShare={() => onShare(id)} />

      <div className="post-details">
        <p className="likes">{likes.toLocaleString()} likes</p>
        <p className="caption">
          <span className="post-user">{username}</span> {caption}
        </p>
        <p className="share-count">{shares} shares</p>
        <CommentSection comments={comments} />
        <p className="post-time">2 hours ago</p>
        <form className="comment-input-row" onSubmit={onSubmitComment}>
          <input
            value={commentText}
            onChange={e => setCommentText(e.target.value)}
            type="text"
            placeholder="Add a comment..."
            className="comment-input"
          />
          <button type="submit" className="comment-post-btn">
            Post
          </button>
        </form>
      </div>
    </article>
  )
}

export default Post