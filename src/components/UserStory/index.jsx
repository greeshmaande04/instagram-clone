import './index.css'

const UserStory = props => {
  const {details} = props
  const {imageUrl, userName} = details

  return (
    <div className="story-item">
      <div className="story-ring">
        <img src={imageUrl} alt={userName} className="story-image" />
      </div>
      <p className="story-name">{userName}</p>
    </div>
  )
}

export default UserStory