const { MessageEmbed } = require('discord.js');
const Discord = require("discord.js")

module.exports = {
    name: "herkezedenrolal",
    aliases: [],
    owner: true,
    execute: async (client, message, args, embed, author, channel, guild) => {

if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("❌ **Bu Komutu Kullanabilmek İçin `Rolleri Yönet` Yetkisine Sahip Olmalısın!**")
  
  let rol = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]) 
  if (!rol) return message.channel.send("❌ **Herkeseten Rol Alabilmen İçin Bir Rol Etiketlemelisin!**")

  const data = message.guild.members.cache.filter(cs => cs.roles.cache.has(rol.id))
  if(!data.size > 0){
    return message.reply("**BU ROL KİMSEDE YOK!**")
  } else {
    
   const embed = new Discord.MessageEmbed()
    .setDescription(`**${rol} İsimli Rol Herkesten Alınmaya Başlanıyor...**`)
    .setColor(rol.hexColor)
  message.channel.send(embed).then(async ms => {

  data.map(async cs => {
    setTimeout(async() => {
      await cs.roles.remove(rol.id)
 ms.edit(new Discord.MessageEmbed()
    .setDescription(`**<@${cs.id}> İsimli Üyeden Rol Alındı!\nHERKESTEN ROL BAŞARI İLE ALINDI!**`)
    .setColor(rol.hexColor))
    }, 1000)
  })
    
  })
  }
}}