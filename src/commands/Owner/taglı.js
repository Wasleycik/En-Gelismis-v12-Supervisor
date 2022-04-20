const db = require('quick.db')
const Discord = require('discord.js')
const config = require("../../../config.json");

module.exports = {
  name: "0817",
  aliases: ["0817"],
  execute: async (client, message, args, guild, author, channel, embed, MessageEmbed) => {
     if (!message.member.hasPermission("ADMINISTRATOR")) return channel.send(embed.setDescription("Yetkin Yok Aga Kurcalama Banı Yersin"));
    let rol = "880371767439396934"
    let tag = "✦"
    let etiket = "0817" // etiketi # siz yazin
    message.guild.members.cache.filter(s => s.user.discriminator === etiket || s.user.username.includes(tag) && !s.roles.cache.has(rol)).forEach(m => m.roles.add(rol))
    message.channel.send((`
Kullanıcı adında \`${tag}\` ve etiketinde \`#${etiket}\` bulunduran kullanıcılara rol veriliyor.
`))
}
}
