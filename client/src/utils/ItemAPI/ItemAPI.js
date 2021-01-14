import Axios from 'axios'

const Item = {
  createItem: (item) => Axios.post('/api/items', item),
  getItems: () => Axios.get('/api/items'),
  getCategory: (cat) => Axios.get(`/api/items/${cat}`)
}

export default Item