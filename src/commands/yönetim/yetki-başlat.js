const Discord = require('discord.js');
const db = require('quick.db');
const moment = require("moment");
const config = require("../../../config.json")

module.exports = {
    name: "yetkilibaşlat",
    enabled: true,
    guildOnly: true,
    aliases: ["ytbaşlat","yt-başlat","ytb"],
    execute: async (client, message, args, embed, author, channel,MessageEmbed) => {
      const guild = message.member.guild
let executor = message.member
moment.locale("tr")  
if (!message.member.roles.cache.has(config.ytv.yetkilialım) && !message.member.roles.cache.has("880371746744717342","880560173373071450","880560165584273488") && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().addField("Yetersiz Yetki",`Bu Komutu Kullanabilmeniz için Yeterli Yetkiniz Yok`).setColor("RANDOM")).then(m => m.delete({timeout: 7000}));
let salvouye = message.mentions.users.first()
const logkanal = message.guild.channels.cache.find(c => c.id === config.logs.ytallog)
if (!salvouye) return message.channel.send(new Discord.MessageEmbed().addField("Hatalı Kullanım",`Lütfen Yetkisi Başlatılacak kişiyi Etiketleyiniz`).setColor("RANDOM")).then(m => m.delete({timeout: 7000}));
let user = message.mentions.users.first();
let rol = message.mentions.roles.first()
let member = message.guild.member(salvouye)


//KADEMELER
member.roles.add("880371782568267836"); //1. Yetkili Kademesi

//YETKİLER
member.roles.add("935946062898790400"); //1. Yetki 

//alınacakrol
member.roles.remove("935944217535078420"); //1. alınacakrol     
      
      
let yetkialinmatarihi = moment(message.createdAt).format("LLLL")

logkanal.send(
    new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
    .setDescription(`<@!${member.id}> **İsimli Kullanıcıya** <@!${message.author.id}> **İsimli Yetkili Tarafından Yetki Verildi**
    • Yetki Veren: <@!${message.author.id}> \`${message.author.id}\`
    • Yetki Verilen: <@!${member.id}> \`${member.id}\`
    • Yetki Verilme Tarihi: \`${yetkialinmatarihi}\``)
    .setFooter(config.bot.footer, client.user.avatarURL({dynamic: true}))
    )

let wasley = new Discord.MessageEmbed() 
.setColor("RANDOM")
.setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
.setDescription(`<@!${member.id}> **İsimli Kullanıcı** <@!${message.author.id}> **İsimli Yetkili Tarafından Yetkin Başlatıldı**

• Yetki Veren: <@!${message.author.id}> \`${message.author.id}\`
• Yetki Verilen: <@!${member.id}> \`${member.id}\`
• Yetki Verilme Tarihi: \`${yetkialinmatarihi}\``)
.setFooter("Wasley ❤ Hesperos", client.user.avatarURL({dynamic: true}))
return message.channel.send(wasley).then(m => m.delete({timeout: 10000}));
  
  
}
}