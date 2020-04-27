const {Client, RichEmbed} = require('discord.js')

const bot = new Client()

const ping = require('minecraft-server-util')

const PREFIX = '$'

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`)
})

bot.on('message', msg => {
  
let args = Message.content.client.substring(PREFIX.lenght).split(' ')
  
  switch(args[0]){
    case 'play':
      ping('v4725.mineserver.io', 4725, (error, reponse)=>{
        if (error) throw error
      
    const Embed =new RichEmbed()
        .setTitle('Server Satus')
        .addField('Server IP' ,reponse.host)
        .addfield('Server Version' , reponse.version)
        .addField('Online Players' , reponse.onlinePlayers)
        .addField('Max Players' , reponse.maxPlayers)
          message.channel.send(Embed)
      })
  break


      
  }
  bot.login(process.env.BOT_TOKEN)
})
