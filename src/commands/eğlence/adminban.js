const Discord = require('discord.js');
const config = require("../../../config.json");
const db = require('quick.db');

module.exports = {
    name: "adminban",
  enabled: true,
  guildOnly: false,
    aliases: ['adminban'],
    execute: async (client, message, args, embed, author, channel, guild) => {
	if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.MessageEmbed()
    .setAuthor('Admin vurdu ve gol oldu!')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
		.setImage(`https://images-ext-1.discordapp.net/external/171uiKxRgITAipvhLwQWRN0gDHVsry0MC9oYnff9Vnw/http/i.imgur.com/O3DHIA5.gif`)
    .setFooter("Valkry", "https://cdn.discordapp.com/avatars/460723895268278283/b672caa2243759b14c3d7c8f185b6ddb.png?size=2048")
    return message.channel.send(sunucubilgi);
    }
}}