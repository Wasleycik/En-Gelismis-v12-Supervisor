const { MessageEmbed } = require('discord.js');
const config = require("../../../config.json");

module.exports = {
  name: "tagtara",
  aliases: ["tagtara"],
  enabled: true,
  guildOnly: false,
  permLevel: 0,
  execute: async (client, message, args,  author, channel, guild) => {
    let embed = new MessageEmbed().setColor('RANDOM').setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }))
    let tag = config.registration.GuilDTag
    let etikettag = config.registration.etikettag
    let rol = config.roles.team
    let taglilar = message.guild.members.cache.filter(s => s.user.username.includes(tag) && !s.roles.cache.has(rol))
    let tagsizlar = message.guild.members.cache.filter(s => !s.user.username.includes(tag) && s.roles.cache.has(rol))

    taglilar.array().forEach(async (member, index) => {
        setTimeout(async () => {
            await member.roles.add(rol)
        }, index * 1000)
    })
    tagsizlar.array().forEach(async (member, index) => {
        setTimeout(async () => {
            await member.roles.remove(rol)
        }, index * 1000)
    })
    embed.setDescription(`
**${taglilar.size}** Adet kullanıcıya taglı rolü verilecek
**${tagsizlar.size}** Adet kullanıcıdan taglı rolü alınacak.
`)
    message.channel.send(embed)
}}