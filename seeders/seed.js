const { User, Item } = require('../models')

const userSeed = [
  {
    userName: 'user1',
    email: 'user1@gmail.com',
password: 'password1234'
  },
{
  userName: 'user2',
    email: 'user2@gmail.com',
  password: 'password1234'
}
]

const itemSeed = [
  {
    itemName: "Canon EOS 90D DSLR Camera",
      Description: 'Canon EOS 90D DSLR Camera + 18-55mm STM + 70-300mm + 30 Piece Accessory Bundle Canon EOS 90D DSLR Camera',
    Price: 300,
      image:'https://live.staticflickr.com/8014/7132453187_98abce3c17_b.jpg',
    isSold: false,
      condition: 'like new',
    category:'electronics'
  },
  {
    itemName: "Nespresso EN167B Original Espresso Machine by De'Longhi, 2.3, Black",
      Description: 'High performance: The 19 bar pump system offers barista-style single-serve Coffee or Espresso every time, perfectly extracting the delicate flavor of each Nespresso original coffee capsule. Speed and energy saving: The fast heat- up system reaches the ideal temperature in just 25 seconds.The automatic energy saving function switches the machine off after 9 minutes of inactivity and can be extended from 9 to 30 minutes.',
    Price: 80,
      image:'https://images-na.ssl-images-amazon.com/images/I/61u-lovQxtL._AC_SL1500_.jpg',
    isSold: false,
      condition: 'slightly used',
    category:'household',
  },
  {
    itemName: 'Fedora with Black Trim',
      Description:'Show off your classic sense of style with this stylish fedora',
    Price: 10,
      image: 'https://media.kohlsimg.com/is/image/kohls/4499932?wid=1200&hei=1200&op_sharpen=1',
    isSold: false,
      condition: 'like new',
    category: 'clothing'
  }
]

require('mongoose').connect('mongodb://localhost/project3_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {

    User.deleteMany({})
      .then(() => User.insertMany(userSeed))
      .then(() => {
        console.log('User records inserted!')
        process.exit()
      })
      .catch(err => console.log(err))

  })
  .catch(err => console.log(err))

require('mongoose').connect('mongodb://localhost/project3_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {

    Item.deleteMany({})
      .then(() => Item.insertMany(itemSeed))
      .then(() => {
        console.log('Item records inserted!')
        process.exit()
      })
      .catch(err => console.log(err))

  })
  .catch(err => console.log(err))