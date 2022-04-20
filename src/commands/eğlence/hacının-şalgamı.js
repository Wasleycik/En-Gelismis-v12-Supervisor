const Discord = require('discord.js');
module.exports = {
  
    name: 'hacının-şalgamı',
    enabled: true,
    guildOnly: false,
    aliases: ["hacınınşalgamı"],
    execute: async (client, message, args,  author, channel, guild ) => {
      const mrk = new Discord.MessageEmbed()
    .setAuthor('Hacının Şalgamı, içen bilir!')
    .setColor(3447003)
    .setImage(`https://cdn.discordapp.com/attachments/823441169023107072/824562686100111380/tenor_8.gif`)
    return message.channel.send(mrk);
} }