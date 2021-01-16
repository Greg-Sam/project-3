import Axios from 'axios'

const User = {
  createUser: (user) => Axios.post('/api/users/register', user),
  loginUser: (user) => Axios.post('/api/users/login', user),
  // getItems: () => Axios.get('/api/items'),
  // getCategory: (cat) => Axios.get(`/api/items/${cat}`)
}

export default User