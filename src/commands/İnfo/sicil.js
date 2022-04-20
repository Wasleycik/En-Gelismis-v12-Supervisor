const Discord = require("discord.js");
const config = require("../../../config.json")
const db = require("quick.db");

module.exports = {
  name: "sicil",
  aliases: [],
  execute: async (client, message, args, embed, author, channel, guild) => {
    if (!message.member.roles.cache.has(config.penals.ban.staff) && !message.member.hasPermission("BAN_MEMBERS")) return channel.error(message, "Komutu kullanabilmek için geçerli yetkin olmalı.")
    let member = message.mentions.members.first() || guild.members.cache.get(args[0]);
    const points = db.fetch(`points_${member.id}`) || 0
    if (!member) return channel.error(message, "Geçerli bir kullanıcı etiketle!")
    let penals = db.get(`sicil_${member.user.id}`);
    if (!penals) return channel.send(`${member} kullanıcısının sicil geçmişi bulunmamakta!`)
    channel.send(embed
      .setColor("RANDOM")
      .setTitle(`Kullanıcının sicil verileri:`)
      .setFooter("Wasley 🧡 Hesperos")
      .setDescription(penals.map((data) => `${data}`).join("\n"))
      .addField("Toplam ceza puanı:", points))
  }
}