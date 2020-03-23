const db = require('../db')
const Item = require('../models/item')
const User = require('../models/user')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const faker = require('faker')

const main = async () => {
    const user1 = await User.find({ username: 'Joe'})
    const user2 = await User.find({ username: 'Schmo'})
    console.log(user1)
    console.log(user2)

    const items = [
          {
              name: 'Guitar',
              description: 'Guitar description',
              link: 'https://images.pexels.com/photos/1656415/pexels-photo-1656415.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
              user_id: user1[0]._id
          },
          {
              name: 'Car',
              description: 'Car description',
              link: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
              user_id: user2[0]._id
          },
          {
            name: 'Salad',
            description: 'Salad description',
            link: 'https://images.pexels.com/photos/5938/food-salad-healthy-lunch.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            user_id: user1[0]._id
          },
          {
              name: 'Chair',
              description: 'For sitting down.',
              link: 'https://images.pexels.com/photos/116910/pexels-photo-116910.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
              user_id: user2[0]._id
          },
          {
            name: 'Motorcycle',
            description: 'Vroom vroom.',
            link: 'https://images.pexels.com/photos/595808/pexels-photo-595808.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            user_id: user1[0]._id
          },
          {
              name: 'Coffee',
              description: 'Only the finest roasted beans.',
              link: 'https://images.pexels.com/photos/1419944/pexels-photo-1419944.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
              user_id: user2[0]._id
          },
          {
            name: 'Nikes',
            description: 'Got air?',
            link: 'https://images.pexels.com/photos/2065695/pexels-photo-2065695.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            user_id: user1[0]._id
          },
          {
              name: 'Camera',
              description: 'Camera description',
              link: 'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
              user_id: user2[0]._id
          },
          {
            name: 'Disco Ball',
            description: 'Partytime begins now.',
            link: 'https://images.pexels.com/photos/2629336/pexels-photo-2629336.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            user_id: user1[0]._id
          },
          {
            name: 'Bike',
            description: 'Has two wheels',
            link: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            user_id: user2[0]._id
          },
          {
            name: 'Cactus Plants',
            description: 'This is not a salad.',
            link: 'https://images.pexels.com/photos/1903965/pexels-photo-1903965.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            user_id: user1[0]._id
          },
          {
            name: 'Horse',
            description: 'Eats hay, pretty low-maintenance.',
            link: 'https://images.pexels.com/photos/1996333/pexels-photo-1996333.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            user_id: user2[0]._id
          },
          {
            name: 'Sunglasses',
            description: 'Ray-Bans',
            link: 'https://images.pexels.com/photos/1043330/pexels-photo-1043330.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            user_id: user1[0]._id
          },
          {
            name: 'Umbrella',
            description: 'It lights up!',
            link: 'https://images.pexels.com/photos/573238/pexels-photo-573238.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            user_id: user2[0]._id
          }
      ]

    await Item.insertMany(items)
    console.log("Created items!")
    console.log(user1[0]._id);
    console.log(user2[0]._id);
}

const run = async () => {
    await main()
    db.close()
}

run()
