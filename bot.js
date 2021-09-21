const Discord = require('discord.js');
const client = new Discord.Client();
const axios = require('axios');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

setInterval(function(){
  axios.get("https://us-central1-digitaleyes-prod.cloudfunctions.net/offers-retriever?collection=Solana%20Monkey%20Business&price=asc")
  .then((response) => {
      var price = response.data.offers[0].price;
      var name = response.data.offers[0].metadata.name
    client.user.setPresence({
      activity: {
        name: `Price Floor: ${price / 1000000000} SOL for ${name}`,
        type: 'WATCHING'
      }
    })        
  })
  .catch((err) => {
    return "gagal";
  })
}, 3000);

client.login('ODg5NjE5NzIyMjA1Nzk0NDI0.YUj47g.5Mdv_-bajg9BRhBCQDmIwWVvUH4');