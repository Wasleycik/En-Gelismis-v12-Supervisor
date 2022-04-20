const Discord = require('discord.js');
const db = require('quick.db');
const config = require("../../../config.json")
const limit = new Map();
const moment = require("moment");
moment.locale("tr");
const ms = require("ms")

module.exports = {
  name: "vmute",
  aliases: ["vmute"],
  execute: async (client, message, args, embed, author, channel, guild) => {
    if (!message.member.roles.cache.has(config.penals.mute.staff) && !message.member.hasPermission("ADMİNİSTRATOR")) return channel.send(embed.setDescription("Komutu kullanabilmek için geçerli yetkin olmalı."));
    let member = message.mentions.members.first() || guild.members.cache.get(args[0]) 
    let sebep = args.slice(1).join(' ') || `Sebep girilmemiş.`
    let reason = args.splice(2).join(" ")
    let sure = args[1]
    if (!member) return channel.send(embed.setDescription(`Geçerli bir kullanıcı belirtmelisin!`))
    if (!sure) return channel.send(embed.setDescription(`Geçerli bir süre belirtmelisin!`))
    if (!reason) return channel.send(embed.setDescription(`Geçerli bir sebep belirtmelisin!`))
    sure
      .replace("s", " Saniye")
      .replace("m", " Dakika")
      .replace("h", " Saat")
      .replace("d", " Gün")
      .replace("w", "Hafta")
    if (config.penals.mute.limit > 0 && limit.has(author.id) && limit.get(author.id) == config.penals.mute.limit) return channel.send("Saatlik mute sınırını geçtiniz!")
    if (!message.member.hasPermission(8) && member && member.roles.highest.position >= message.member.roles.highest.position) return channel.send("Aynı veya yüksek yetki!")

    message.channel.send(embed.setDescription(`**${member}** **(${member.id})** kullanıcısı başarıyla **"${reason}"** sebebiyle **${sure}** boyunca susturuldu! 
Susturan Yetkili: <@${message.author.id}>
Susturulma tarihi: \`${moment(Date.now()).format("LLL")}\`
Ceza Numarası: \`#${db.fetch(`ceza_${guild.id}`)}\``))
    member.roles.add(config.penals.mute.vmuterole)
    db.add(`ceza_${guild.id}`, 1)
    
    const log = new Discord.MessageEmbed()
      .setColor("RED")
      .setTimestamp()
      .setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true }))
      .setFooter("Wasley 🧡 Hesperos")
      .setDescription(`
      ${member ? member.toString() : member.username} kişisi ses Kanallarında susturuldu!
    
       Susturulan üye: ${member} 
       Susturan Yetkili: <@${message.author.id}>
       Susturulma sebebi: \`${sebep}\`
       Susturulma tarihi: \`${moment(Date.now()).format("LLL")}\`
       Ceza Numarası: \`#${db.fetch(`ceza_${guild.id}`)}\`
      `);
    client.channels.cache.get(config.penals.mute.log).send(log);
    db.push(`sicil_${member.id}`, `${author} tarafından ${moment(Date.now()).format("LLL")} tarihinde **${reason}** sebebiyle **VMUTE** cezası almış.`)
    db.add(`points_${member.id}`, config.penals.points.mutepoints);
    db.set(`vmute_${member.id}`, true);
    setTimeout(() => {
      if (db.get(`vmute_${member.id}`)) {
      member.roles.remove(config.penals.mute.vmuterole)
      client.channels.cache.get(config.penals.mute.log).send(new Discord.MessageEmbed().setColor("GREEN").setTimestamp().setDescription(`${member} kişisinin susturması bitti!`))}
    }, ms(sure));
    if (config.penals.mute.limit > 0) {
      if (!limit.has(author.id)) limit.set(author.id, 1);
      else limit.set(author.id, limit.get(author.id) + 1);
      setTimeout(() => {
        if (limit.has(author.id)) limit.delete(author.id);
      }, 1000 * 60 * 60)
    }
  }
}