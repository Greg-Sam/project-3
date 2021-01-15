import Axios from 'axios'

const User = {
  createUser: (user) => Axios.post('/api/users/register', user),
  // getDisplayItem: id => Axios.get(`/api/items/${id}`),
  // getItems: () => Axios.get('/api/items'),
  // getCategory: (cat) => Axios.get(`/api/items/${cat}`)
}

export default User