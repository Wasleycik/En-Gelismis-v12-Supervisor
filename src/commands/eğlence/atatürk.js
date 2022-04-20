const Discord = require('discord.js');
module.exports = {
  
    name: 'atatürk',
    enabled: true,
    guildOnly: false,
    aliases: ["atam"],
    execute: async (client, message, args,  author, channel, guild ) => {
      const vatan = new Discord.MessageEmbed()
    .setAuthor('Mustafa Kemal Atatürkü Anıyoruz.')
    .setColor(3447003)
    .setImage(`https://i.hizliresim.com/8CIYMl.gif`)
    return message.channel.send(vatan);
} }