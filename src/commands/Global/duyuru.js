const Discord = require("discord.js");
module.exports = {
  name: "duyuru",
  aliases: ["duyuru"],
  execute: async (client, message, args, embed, author, channel, guild) => {
    if (!message.member.hasPermission("MANAGE_GUILD")) return message.reply("**YETERSİZ YETKİ!**");
    let kanal = message.mentions.channels.first();
    if (!kanal) return message.reply("**Bir Kanal Etiketlemen Gerek!**");
    let Duyuru = args.slice(1).join(" ");
    if (!Duyuru) return message.reply("**Ne Duyurusu Yapılacak Yazman Gerek!**");
    message.delete({ timeout: 30 })


    kanal.send(`||@test||`)
    let cryonicx = new Discord.MessageEmbed()
        .setColor("#2c2f33")
        .setDescription(`${Duyuru}`)
        .setTimestamp()
    kanal.send(cryonicx);

} }