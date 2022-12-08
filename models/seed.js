require('dotenv').config
const mongoose = require('./connection')
const Sneaker = require('./sneaker')

mongoose.connection.on('open', ()=>{

        const startSneakers = [
          { model: "Air Jordan 1", color: "Chicago", image: "https://images.stockx.com/images/Air-Jordan-1-Retro-Chicago-2015-Product.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1607656901&q=75", highTop: true },
          { model: "Yeezy 350 V2", color: "Zebra", image: "https://images.stockx.com/images/Adidas-Yeezy-Boost-350-V2-Zebra-Product-1.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1606321670", highTop: false },
          { model: "Nike Dunk Low", color: "Panda", image: "https://images.stockx.com/images/Nike-Dunk-Low-Retro-White-Black-2021-Product.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1633027409&q=75", highTop: false },
          { model: "New Balance 550", color: "ALD Green Yellow", image: "https://images.stockx.com/images/New-Balance-550-Aime-Leon-Dore-Natural-Green.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1618101176", highTop: false },
          { model: "Air Yeezy 2", color: "Red October", image: "https://images.stockx.com/images/Nike-Air-Yeezy-2-Red-October-Product.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1606315975&q=75", highTop: true },
          { model: "Adidas Forum", color: "Bad Bunny", image: "https://images.stockx.com/images/adidas-Forum-Low-Bad-Bunny-Product.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1616699661&q=75", highTop: false },
        ];
      
        // Delete all sneakers
        Sneaker.deleteMany({}, (err, data) => {
          // Seed Starter Sneakers
          Sneaker.create(startSneakers, (err, createdSneakers) => {
            // send created snekers as response to confirm creation
            console.log(createdSneakers);
          });
        });
      });