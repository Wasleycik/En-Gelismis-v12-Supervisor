const Discord = require("discord.js");
const config = require("../../../config.json");
module.exports = {
    name: "atla",
    aliases: ["atla"],
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
    .setAuthor('**Hooop Atladı!**')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
	.setImage(`https://cdn.discordapp.com/attachments/382583684554817549/383949014036381696/giphy_2.gif`)
    return message.channel.send(sunucubilgi);
    }
}}
