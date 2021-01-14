import Axios from 'axios'

const Item = {
  createItem: (item) => Axios.post('/api/items', item),
  getItem: id => Axios.get(`/api/items/${id}`),
  getItems: () => Axios.get('/api/items')
}

export default Item