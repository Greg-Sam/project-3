import Axios from 'axios'

const Item = {
  createItem: (item) => Axios.post('/api/items', item),
  getDisplayItem: id => Axios.get(`/api/items/id/${id}`),
  getItems: () => Axios.get('/api/items'),
  getCategory: (cat) => Axios.get(`/api/items/category/${cat}`)
}

export default Item