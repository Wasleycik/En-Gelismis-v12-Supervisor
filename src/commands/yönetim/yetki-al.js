const Discord = require('discord.js');
const moment = require("moment");
const datab = require('quick.db');
const config = require("../../../config.json")

module.exports = {
  name: "yetki-al",
  aliases: ["yetkial","ytal"],
  enabled: true,
  guildOnly: false,
  permLevel: 4,
  execute: async (client, message, args, author, channel) => {
const guild = message.member.guild
let executor = message.member
moment.locale("tr")  
if (!message.member.roles.cache.has(config.ytv.yetkilialım) && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().addField("Yetersiz Yetki",`Bu Komutu Kullanabilmeniz için Yeterli Yetkiniz Yok`).setColor("RANDOM")).then(m => m.delete({timeout: 7000}));
const logkanal = message.guild.channels.cache.find(c => c.id === config.logs.ytallog)

let kullanici = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
let wastyuser = message.mentions.users.first()
if (!wastyuser) return message.channel.send(new Discord.MessageEmbed().addField("Hatalı Kullanım",`Lütfen Yetkisi Alınacak Kişiyi Etiketleyiniz`).setColor("RANDOM")).then(m => m.delete({timeout: 7000}));
let user = message.mentions.users.first();
let rol = message.mentions.roles.first()
let member = message.guild.member(wastyuser)
if(message.member.roles.highest.position <= kullanici.roles.highest.position) return message.channel.send(new Discord.MessageEmbed().setDescription(`${message.author}, Etiketlenen kullanıcı sizden üst/aynı pozisyondadır.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));



/// Permles

member.roles.remove("935946062898790400");
member.roles.remove("933478057157738506");
member.roles.remove("935483083065540608");
member.roles.remove("935946922588516392");
member.roles.remove("880371763198955550");




/// Roller

member.roles.remove(config.ytv.ilkrol);
member.roles.remove(config.ytv.ikincirol);
member.roles.remove(config.ytv.üçüncürol);
member.roles.remove(config.ytv.dört);
member.roles.remove(config.ytv.beş);
member.roles.remove(config.ytv.altı);
member.roles.remove(config.ytv.yedi);
member.roles.remove(config.ytv.sekiz);
member.roles.remove(config.ytv.dokuz);
member.roles.remove(config.ytv.on);
member.roles.remove(config.ytv.onbir);
member.roles.remove(config.ytv.oniki);
member.roles.remove(config.ytv.onüç);
member.roles.remove(config.ytv.ondört);
member.roles.remove(config.ytv.onbeş);
member.roles.remove(config.ytv.onaltı);
member.roles.remove(config.ytv.yetkiverilecek);





let yetkialinmatarihi = moment(message.createdAt).format("LLLL")

logkanal.send(
    new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
    .setDescription(`<@!${member.id}> **İsimli Kullanıcı** <@!${message.author.id}> **İsimli Yetkili Tarafından Yetkileri Alındı**
    • Yetki Alan: <@!${message.author.id}> \`${message.author.id}\`
    • Yetki Alınan: <@!${member.id}> \`${member.id}\`
    • Yetki Alınma Tarihi: \`${yetkialinmatarihi}\``)
    .setFooter(config.bot.footer, client.user.avatarURL({dynamic: true}))
    )

let wasty = new Discord.MessageEmbed() 
.setColor("RANDOM")
.setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
.setDescription(`<@!${member.id}> **İsimli Kullanıcı** <@!${message.author.id}> **İsimli Yetkili Tarafından Yetkileri Alındı**
• Yetki Alan: <@!${message.author.id}> \`${message.author.id}\`
• Yetki Alınan: <@!${member.id}> \`${member.id}\`
• Yetki Alınma Tarihi: \`${yetkialinmatarihi}\``)
.setFooter(config.bot.footer, client.user.avatarURL({dynamic: true}))
return message.channel.send(wasty).then(m => m.delete({timeout: 8000}))
      




}}