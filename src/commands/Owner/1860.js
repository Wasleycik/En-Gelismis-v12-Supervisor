const db = require('quick.db')
const Discord = require('discord.js')
const config = require("../../../config.json");

module.exports = {
  name: "1860",
  aliases: ["1860"],
  execute: async (client, message, args, guild, author, channel, embed, MessageEmbed) => {
     if (!message.member.hasPermission("ADMINISTRATOR")) return channel.send(embed.setDescription("Yetkin Yok Aga Kurcalama Banı Yersin"));
    let rol = "950799351796621342"
    let tag = "✭"
    let etiket = "1860" // etiketi # siz yazin
    message.guild.members.cache.filter(s => s.user.discriminator === etiket || s.user.username.includes(tag) && !s.roles.cache.has(rol)).forEach(m => m.roles.add(rol))
    message.channel.send((`
Kullanıcı adında \`${tag}\` ve etiketinde \`#${etiket}\` bulunduran kullanıcılara rol veriliyor.
`))
}
}
