import Axios from 'axios'

const Item = {
  createItem: (item) => Axios.post('/api/items', item)
}

export default Item