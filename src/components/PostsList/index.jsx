import Post from '../Post'

import './index.css'

const PostsList = ({posts, onToggleLike, onAddComment, onShare}) => (
  <div className="posts-list-container">
    {posts.map(post => (
      <Post
        key={post.id}
        details={post}
        onToggleLike={onToggleLike}
        onAddComment={onAddComment}
        onShare={onShare}
      />
    ))}
  </div>
)

export default PostsList