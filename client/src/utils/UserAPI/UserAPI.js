import Axios from 'axios'

const User = {
  createUser: (user) => Axios.post('/api/users/register', user),
  loginUser: (user) => Axios.post('/api/users/login', user),
  getUser: (id) => Axios.get(`/api/user/getall/${id}`)
}

export default User