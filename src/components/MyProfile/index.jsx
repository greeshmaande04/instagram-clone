import Header from '../Header'

import './index.css'

const MyProfile = () => {
  const photos = [
    'https://picsum.photos/300/300?random=4',
    'https://picsum.photos/300/300?random=7',
    'https://picsum.photos/300/300?random=9',
    'https://picsum.photos/300/300?random=11',
    'https://picsum.photos/300/300?random=14',
    'https://picsum.photos/300/300?random=18',
  ]

  return (
    <>
      <Header />
      <section className="profile-page">
        <div className="profile-top">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="profile"
            className="profile-image"
          />
          <div className="profile-summary">
            <div className="profile-name-row">
              <h2>rahul</h2>
              <button type="button" className="edit-btn">
                Edit Profile
              </button>
            </div>
            <p className="profile-bio">Frontend Developer. Sharing UI experiments and travel photography.</p>
            <div className="profile-stats">
              <span><strong>24</strong> posts</span>
              <span><strong>1.1k</strong> followers</span>
              <span><strong>274</strong> following</span>
            </div>
          </div>
        </div>

        <div className="post-grid">
          {photos.map((photo, index) => (
            <img key={index} src={photo} alt={`grid-${index}`} className="grid-photo" />
          ))}
        </div>
      </section>
    </>
  )
}

export default MyProfile