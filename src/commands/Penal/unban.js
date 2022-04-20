const Discord = require("discord.js");
const moment = require("moment");
const config = require("../../../config.json")
moment.locale("tr")
module.exports = {
  name: "unban",
  aliases: ["banremove"],
  execute: async (client, message, args, embed, author, channel, guild) => {
    const permError = new Discord.MessageEmbed()
      .setColor('#ed455a')
      .setTitle('Hata')
          .setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true }))
      .setFooter("Wasley 🧡 Hesperos")
      .setDescription('Komutu kullanabilmek için geçerli yetkin olmalı.')
    const userError = new Discord.MessageEmbed()
      .setColor('#ed455a')
      .setTitle('Hata')
          .setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true }))
      .setFooter("Wasley 🧡 Hesperos")
      .setDescription('Geçerli bir ID belirtmelisiniz!')
    const userError2 = new Discord.MessageEmbed()
      .setColor('#ed455a')
      .setTitle('Hata')
          .setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true }))
      .setFooter("Wasley 🧡 Hesperos")
      .setDescription("Harf koyma!")
    const userError3 = new Discord.MessageEmbed()
      .setColor('#ed455a')
      .setTitle('Hata')
          .setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true }))
      .setFooter("Wasley 🧡 Hesperos")
      .setDescription('Kullanıcı yasaklanmamış!')
    const levelError = new Discord.MessageEmbed()
      .setColor('#ed455a')
      .setTitle('Hata')
          .setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true }))
      .setFooter("Wasley 🧡 Hesperos")
      .setDescription('Aynı veya yüksek yetki!')
    if (!message.member.hasPermission("BAN_MEMBERS")) return channel.send
      (permError)
    let user = args[0];
    if (!user) return channel.send
      (userError).catch(console.error)
    if (isNaN(args[0])) return channel.send
      (userError2).catch(console.error)
    if (user.highestRole >= author.highestRole) return channel.send
      (levelError)
    const banList = await guild.fetchBans();
    if (!user.id === banList) return channel.send
      (userError3)

    guild.members.unban(user);
    channel.send(embed.setDescription(`<@!${user}> **(${user})** kullanıcısının yasağı ${author} tarafından başarıyla kaldırıldı!
     Kaldıran Yetkili: ${author} \`(${author.id})\`
     Kaldırma Tarihi: \`${moment(Date.now()).format("LLL")}\`
`))
                
    const log = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTimestamp()
      .setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true }))
      .setFooter("Wasley 🧡 Hesperos")
      .setDescription(`
      <@!${user}> üyesinin yasağı kaldırıldı!
      
      Kaldırılan Kullanıcı: <@!${user}> \`(${user})\`
      Kaldıran Yetkili: ${author} \`(${author.id})\`
      Kaldırma Tarihi: \`${moment(Date.now()).format("LLL")}\`
      `)
    client.channels.cache.get(config.penals.ban.log).send(log);
  }
}