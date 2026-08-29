import UserStory from '../UserStory'

import './index.css'

const storiesList = [
  {
    id: 1,
    imageUrl: 'https://randomuser.me/api/portraits/women/35.jpg',
    userName: 'nina',
  },
  {
    id: 2,
    imageUrl: 'https://randomuser.me/api/portraits/men/12.jpg',
    userName: 'michael',
  },
  {
    id: 3,
    imageUrl: 'https://randomuser.me/api/portraits/women/52.jpg',
    userName: 'sara',
  },
  {
    id: 4,
    imageUrl: 'https://randomuser.me/api/portraits/men/28.jpg',
    userName: 'john',
  },
  {
    id: 5,
    imageUrl: 'https://randomuser.me/api/portraits/women/72.jpg',
    userName: 'emma',
  },
]

const UserStories = () => (
  <section className="stories-container">
    {storiesList.map(eachStory => (
      <UserStory key={eachStory.id} details={eachStory} />
    ))}
  </section>
)

export default UserStories