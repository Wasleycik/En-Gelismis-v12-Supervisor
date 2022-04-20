const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: "hediyever",
    aliases: ["hediyever"],
    execute: async (client, message, args, author, channel, guild) => {
  
   let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) //let member = message.mentions.users.first() || client.users.cache.get(args.join(' '))
   if(!member) {
       return message.channel.send(new Discord.MessageEmbed().setColor("RED").setTimestamp().setDescription("**⚠️ • Hediye Verecek Bir Kişi Etiketlemelisin**"))
   }
 

   let bruv = message.guild.member(member)
   let isim = args[1]
   
   
   if(!isim) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setTimestamp().setDescription("**⚠️ • Vereceğin Hediyeyi Yazmalısın \n\nÖrnek : g!hediye-ver <@kişi> <hediye>**"))
  


   let embed = new Discord.MessageEmbed()
   .setColor('GREEN')
   .setAuthor(`Hediye Geldi!`, message.author.avatarURL())
   .setTimestamp()
   .setDescription(`
  **${message.author} Sana Bir Hediye Almış ${member} Sana ${isim} Hediyesini Verdi :heart:
  **
   `)
   .setImage("https://img-s2.onedio.com/id-5eb2b69abaf24ad70e5c2664/rev-0/w-900/h-674/f-gif/s-986ae1dca55e1bf8f70286b3ac6653bd25560d87.gif")
   message.channel.send(embed).then(message=> message.react("✅"))
  
 }


}
