const Discord = require('discord.js');

module.exports = {
    name: "token",
  enabled: true,
  guildOnly: false,
    aliases: ['token'],
    execute: async (client, message, args, embed, author, channel, guild) => {
   if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
  
  if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor('RED')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Gif Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const token = new Discord.MessageEmbed()
    .setAuthor(message.author.username + " Alsana Token Güle Güle Kulan :)  ")
    .setColor('BLACK')
    .setTimestamp()
    .setDescription('')
    .setImage(`https://thumbs.gfycat.com/BlindGaseousAnteater-size_restricted.gif`)
    return message.channel.send(token);
    }
}}
