const Discord = require('discord.js');
module.exports = {
  
    name: 'ambulans',
    enabled: true,
    guildOnly: false,
    aliases: ["112", "ara112"],
    execute: async (client, message, args,  author, channel, guild ) => {
      
      const mrk = new Discord.MessageEmbed()
    .setAuthor('Sağlık ekipleri yolda!')
    .setColor(3447003)
    .setImage(`https://cdn.discordapp.com/attachments/823441169023107072/824564221525360640/PoliticalEmptyCirriped-size_restricted.gif`)
    return message.channel.send(mrk);
    }}