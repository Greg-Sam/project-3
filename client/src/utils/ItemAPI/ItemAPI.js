import axios from 'axios'

const Item = {
  createItem: (item) => axios.post('/api/items', item),
  getDisplayItem: id => axios.get(`/api/items/id/${id}`),
  getItems: () => axios.get('/api/items'),
  getCategory: (cat) => axios.get(`/api/items/category/${cat}`)
}

export default Item