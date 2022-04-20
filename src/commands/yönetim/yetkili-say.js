const  Discord = require("discord.js");
const config = require("../../../config.json")

module.exports = {
  name: "yetkili-say",
  aliases: ["yetkilisay","yses","ysay"],
  execute: async (client, message, args, embed, author, channel, guild) => {

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.react(config.emoji.no)
        
        let sesteolmayan = message.guild.members.cache.filter(s => s.roles.cache.has(config.registration.staff)).filter(s => !s.voice.channel).map(s => s).join('\n')
        let sesteolan = message.guild.members.cache.filter(s => s.roles.cache.has(config.registration.staff)).filter(s => s.voice.channel).map(s => s).join('\n')
        
         message.channel.send(`Sestekiler; \n${sesteolan || "Kimse yok"}\n\nSeste olmayanlar;\n${sesteolmayan || "Kimse yok"}`)
           
    }

}