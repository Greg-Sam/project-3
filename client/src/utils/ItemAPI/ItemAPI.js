import Axios from 'axios'

const Item = {
  createItem: (item) => Axios.post('/api/items', item),
  getItem: () => Axios.get('/api/item')
  getItems: () => Axios.get('/api/items')
}

export default Item