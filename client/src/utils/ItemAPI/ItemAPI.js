import Axios from 'axios'

const Item = {
  createItem: (item) => Axios.post('/api/items', item),
  getItem: () => Axios.get('/api/item')
}

export default Item