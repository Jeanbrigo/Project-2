require('dotenv').config
const mongoose = require('./connection')
const Sneaker = require('./sneaker')

mongoose.connection.on('open', ()=>{

        const startSneakers = [
          { name: "Orange", color: "orange", readyToEat: false },
          { name: "Grape", color: "purple", readyToEat: false },
          { name: "Banana", color: "orange", readyToEat: false },
          { name: "Strawberry", color: "red", readyToEat: false },
          { name: "Coconut", color: "brown", readyToEat: false },
        ];
      
        // Delete all fruits
        Sneaker.deleteMany({}, (err, data) => {
          // Seed Starter Fruits
          Sneaker.create(startSneakers, (err, createdSneakers) => {
            // send created fruits as response to confirm creation
            console.log(createdSneakers);
          });
        });
      });