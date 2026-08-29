import Header from '../Header'
import UserStories from '../UserStories'
import PostsList from '../PostsList'
import {Link} from 'react-router-dom'
import {useState} from 'react'

import './index.css'

const Home = () => {
  const initialPosts = [
    {
      id: 1,
      username: 'john',
      profileImage: 'https://randomuser.me/api/portraits/men/32.jpg',
      imageUrl: 'https://picsum.photos/720/520?random=12',
      caption: 'Golden hour at the lake.',
      likes: 1284,
      liked: false,
      shares: 11,
      location: 'Lakeview Park',
      comments: [
        {id: 1, user: 'nina', text: 'Wow, this looks amazing!'},
        {id: 2, user: 'alex', text: 'I need to visit here soon.'},
      ],
    },
    {
      id: 2,
      username: 'sara',
      profileImage: 'https://randomuser.me/api/portraits/women/17.jpg',
      imageUrl: 'https://picsum.photos/720/520?random=16',
      caption: 'Street coffee and city dreams.',
      likes: 987,
      liked: false,
      shares: 4,
      location: 'Downtown',
      comments: [
        {id: 1, user: 'michael', text: 'Best vibe ever!'},
        {id: 2, user: 'kevin', text: 'Love the colors.'},
      ],
    },
  ]

  const [posts, setPosts] = useState(initialPosts)
  const [imageUrl, setImageUrl] = useState('')
  const [caption, setCaption] = useState('')
  const [location, setLocation] = useState('')
  const [publishError, setPublishError] = useState('')
  const [suggestions, setSuggestions] = useState([
    {
      id: 1,
      userName: 'nina',
      reason: 'New to Instagram',
      avatar: 'https://randomuser.me/api/portraits/women/21.jpg',
      following: false,
    },
    {
      id: 2,
      userName: 'michael',
      reason: 'Popular creator',
      avatar: 'https://randomuser.me/api/portraits/men/34.jpg',
      following: false,
    },
    {
      id: 3,
      userName: 'sara',
      reason: 'Suggested for you',
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
      following: false,
    },
    {
      id: 4,
      userName: 'john',
      reason: 'Recently active',
      avatar: 'https://randomuser.me/api/portraits/men/59.jpg',
      following: false,
    },
  ])

  const handleToggleFollow = id => {
    setSuggestions(prev => prev.map(item => (item.id === id ? {...item, following: !item.following} : item)))
  }

  const handleAddComment = (postId, commentText) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId
          ? {
              ...post,
              comments: [
                ...post.comments,
                {id: post.comments.length + 1, user: 'You', text: commentText},
              ],
            }
          : post,
      ),
    )
  }

  const handleToggleLike = postId => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId
          ? {
              ...post,
              liked: !post.liked,
              likes: post.liked ? post.likes - 1 : post.likes + 1,
            }
          : post,
      ),
    )
  }

  const handleShare = postId => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId ? {...post, shares: post.shares + 1} : post,
      ),
    )

    const shareText = `${window.location.href} — check out this post!`
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareText).catch(() => {})
    }
  }

  const handlePublish = event => {
    event.preventDefault()
    if (!imageUrl.trim() || !caption.trim()) {
      setPublishError('Post image and caption are required.')
      return
    }

    const newPost = {
      id: Date.now(),
      username: 'rahul',
      profileImage: 'https://randomuser.me/api/portraits/women/44.jpg',
      imageUrl: imageUrl.trim(),
      caption: caption.trim(),
      location: location.trim() || 'Home',
      likes: 0,
      liked: false,
      shares: 0,
      comments: [],
    }

    setPosts(prev => [newPost, ...prev])
    setImageUrl('')
    setCaption('')
    setLocation('')
    setPublishError('')
  }

  return (
    <>
      <Header />

      <div className="home-wrapper">
        <main className="feed-column">
          <section className="post-form-card">
            <h2>Create a new post</h2>
            <form className="post-form" onSubmit={handlePublish}>
              <input
                type="url"
                placeholder="Image URL"
                value={imageUrl}
                onChange={e => setImageUrl(e.target.value)}
              />
              <input
                type="text"
                placeholder="Caption"
                value={caption}
                onChange={e => setCaption(e.target.value)}
              />
              <input
                type="text"
                placeholder="Location (optional)"
                value={location}
                onChange={e => setLocation(e.target.value)}
              />
              {publishError && <p className="publish-error">{publishError}</p>}
              <button type="submit" className="publish-btn">
                Publish
              </button>
            </form>
          </section>

          <UserStories />
          <PostsList
            posts={posts}
            onToggleLike={handleToggleLike}
            onAddComment={handleAddComment}
            onShare={handleShare}
          />
        </main>

        <aside className="sidebar-column">
          <div className="sidebar-profile-card">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="profile"
              className="sidebar-avatar"
            />
            <div>
              <p className="sidebar-name">rahul</p>
              <p className="sidebar-caption">Frontend Developer</p>
            </div>
            <Link to="/my-profile" className="sidebar-view">
              View Profile
            </Link>
          </div>

          <div className="suggestions-card">
            <div className="suggestions-title">
              <span>Suggestions for you</span>
              <button type="button" className="see-all-btn">
                See all
              </button>
            </div>

            <ul className="suggestion-list">
              {suggestions.map(suggestion => (
                <li key={suggestion.id} className="suggestion-item">
                  <img
                    src={suggestion.avatar}
                    alt={suggestion.userName}
                    className="suggestion-avatar"
                  />
                  <div className="suggestion-info">
                    <p className="suggestion-name">{suggestion.userName}</p>
                    <p className="suggestion-reason">{suggestion.reason}</p>
                  </div>
                  <button
                    type="button"
                    className={suggestion.following ? 'following-btn' : 'follow-btn'}
                    onClick={() => handleToggleFollow(suggestion.id)}
                  >
                    {suggestion.following ? 'Following' : 'Follow'}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </>
  )
}

export default Home