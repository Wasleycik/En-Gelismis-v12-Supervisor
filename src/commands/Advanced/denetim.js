
const config = require("../../../config.json");
const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "denetim",
  aliases: ["denetim"],
  execute: async (client, message, args,  author, channel, guild) => {
 if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Knk Yetkin Yok Kurcalama Ban Yersin");
    let embed = new MessageEmbed().setColor('RANDOM').setTimestamp().setFooter(`Wasley was here.`)
    let rol = message.mentions.roles.first() || message.guild.roles.cache.get(args[0])
    if (!rol) message.reply('rol belirt.')

    let offline = message.guild.members.cache.filter(s => s.roles.cache.has(rol.id) && s.presence.status === 'offline')
    let ses = message.guild.members.cache.filter(s => s.roles.cache.has(rol.id) && s.voice.channel)
    let unses = message.guild.members.cache.filter(s => s.roles.cache.has(rol.id) && !s.voice.channel)
    await message.channel.send(`Roldeki aktif olmayan kullanıcı sayısı: ${offline.size}`, { code: "xl" })
    await message.channel.send(`${offline.map(s => s).join(', ') || 'Yok'}`)
    await message.channel.send(`Roldeki seste olan kullanıcı sayısı: ${ses.size}`, { code: "xl" })
    await message.channel.send(`${ses.map(s => s).join(', ') || 'Yok'}`)
    await message.channel.send(`Roldeki seste olmayan kullanıcı sayısı: ${unses.size}`, { code: "xl" })
    await message.channel.send(`${unses.map(s => s).join(', ') || 'Yok'}`)
}}