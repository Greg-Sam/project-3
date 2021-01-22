const { User, Item } = require('../models')

const userSeed = [
  {
    name: 'user1',
    username: 'user1',
    email: 'user1@gmail.com',
    password: 'password1234',
    image: 'https://img.favpng.com/11/1/19/computer-icons-user-profile-clip-art-png-favpng-5PNKaN9pyb0YVbv53YJy99Bi2.jpg'
  },
  {
    name: 'user2',
    username: 'user2',
    email: 'user2@gmail.com',
    password: 'password1234',
    image: 'https://img.favpng.com/11/1/19/computer-icons-user-profile-clip-art-png-favpng-5PNKaN9pyb0YVbv53YJy99Bi2.jpg'
  }
]

const itemSeed = [
  {
    name: "Canon EOS 90D DSLR Camera",
    description: 'Canon EOS 90D DSLR Camera + 18-55mm STM + 70-300mm + 30 Piece Accessory Bundle Canon EOS 90D DSLR Camera',
    price: 300,
    image: 'https://live.staticflickr.com/8014/7132453187_98abce3c17_b.jpg',
    isSold: false,
    condition: 'New—open box',
    category: 'Electronics',
  },
  {
    name: "Nespresso EN167B Original Espresso Machine by De'Longhi, 2.3, Black",
    description: 'High performance: The 19 bar pump system offers barista-style single-serve Coffee or Espresso every time, perfectly extracting the delicate flavor of each Nespresso original coffee capsule. Speed and energy saving: The fast heat- up system reaches the ideal temperature in just 25 seconds.The automatic energy saving function switches the machine off after 9 minutes of inactivity and can be extended from 9 to 30 minutes.',
    price: 80,
    image: 'https://images-na.ssl-images-amazon.com/images/I/61u-lovQxtL._AC_SL1500_.jpg',
    isSold: false,
    condition: 'Used-good condition',
    category: 'Household',
  },
  {
    name: 'Fedora with Black Trim',
    description: 'Show off your classic sense of style with this stylish fedora',
    price: 10,
    image: 'https://media.kohlsimg.com/is/image/kohls/4499932?wid=1200&hei=1200&op_sharpen=1',
    isSold: false,
    condition: 'Used-good condition',
    category: 'Clothing'
  },
  {
    name: 'Denim shirt',
    description: 'Comfortable shirt for every occasion.',
    price: 60,
    image: 'https://i.ebayimg.com/images/g/Ef8AAOSwZRNfF1i8/s-l300.jpg',
    isSold: false,
    condition: 'New',
    category: 'Clothing'
  },
  {
    name: 'Samsung Galaxy S20',
    description: 'Never used. Unlocked for any service provider.',
    price: 400,
    image: 'https://resize.indiatvnews.com/en/resize/newbucket/715_-/2020/10/samsung-galaxy-s20-fe-1601983375.jpg',
    isSold: false,
    condition: 'New—open box',
    category: 'Electronics'
  },
  {
    name: '2002 Honda S2000',
    description: 'Perfect commuter car. New tires.',
    price: 15000,
    image: 'https://www.thetruthaboutcars.com/wp-content/uploads/2014/06/photo-32.jpg',
    isSold: false,
    condition: 'Used-good condition',
    category: 'Automotive'
  },
  {
    name: 'Nike Air Jordan 1',
    description: 'The one and only Air Jordan 1 series.  Perfect condition, never been worn outside of my bedroom.',
    price: 350,
    image: 'https://media.karousell.com/media/photos/products/2019/09/02/wmns_air_jordan_1_satin_black_toe_us_9_1567438999_03d3757a_progressive.jpg',
    isSold: false,
    condition: 'New',
    category: 'Clothing'
  },
  {
    name: 'Hedgehog food',
    description: 'USDA Certified safe pet food. Your hedgehog deserves the very best.',
    price: 9,
    image: 'https://i.redd.it/fqrr9q5kcaa51.jpg',
    isSold: false,
    condition: 'New',
    category: 'Pets'
  },
  {
    name: 'Custom gaming PC',
    description: 'Everything you need at a great price.',
    price: 1200,
    image: 'https://i.pinimg.com/474x/83/d6/fc/83d6fc7f2f943bb10d04f322fe0e5844.jpg',
    isSold: false,
    condition: 'Used-good condition',
    category: 'Electronics'
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