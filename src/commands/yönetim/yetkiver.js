const Discord = require("discord.js")
const config = require("../../../config.json");
module.exports = {
    name: "yetkili",
    aliases:['yetkiliv', "yetkibaşlat", "yetkibaslat","ytver","ytv"],
    execute: async (client, message, args ,db ,moment) => { 
      
  let member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
        let embed = new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('#4c0000').setTimestamp()
        let embed2 = new Discord.MessageEmbed().setFooter(message.guild.name, message.guild.iconURL({ dynamic: true })).setColor('#621e02')
        let channel = client.guilds.cache.get(config.Guild.GuildID).channels.cache.find(c => c.name === "yetki-ver-log")
        if (!message.member.roles.cache.some(r => [config.ytv.yetkilialım].includes(r.id)) && (!message.member.hasPermission("ADMINISTRATOR")))  {return message.channel.send(embed.setDescription('Komutu kullanan kullanıcıda yetki bulunmamakta!')).then(x => x.delete({ timeout: 3000 }))} 
        if (!member) return message.channel.send(embed.setDescription("Kullanıcı etiketlenmedi veya bulunamadı!")).then(x => x.delete({ timeout: 5000 }))
        if (!member.user.username.includes(config.registration.GuilDTag)) {return message.channel.send(embed.setDescription("Yetkili olucak kullanıcıda tag bulunmak zorunda")).then(x => x.delete({ timeout: 5000 }))}
        if (db.get(`staff_${member.id}`)) return message.channel.send(embed.setDescription("Belirtilen kullanıcı sunucuda zaten yetkili!").setFooter("Bir aksilik var ise üst yönetime ulaşınız!"))
        if(args[1] === "yetki1") {
                db.set(`staff_${member.id}`, true)
                await message.guild.members.cache.get(member.id).roles.add(config.ytv.ilkrol)
                await message.guild.members.cache.get(member.id).roles.add(client.config.registration.staff)
                message.channel.send(embed.setDescription(`Kullanıcı 1. yetkiye yükseltildi. Kullanıcıya <@&933478057157738506>, <@&880371782568267836> rolleri verildi!`))
                channel.send(embed.setDescription(` ${member} adlı kullanıcı ${message.author}  tarafından 1. yetkiye \`${moment().format('LLL')}\` tarihinde yükseltildi`))          
          }
        if(args[1] === "yetki2") {
                await message.guild.members.cache.get(member.id).roles.remove(config.yetkili.yetkirol)
                await message.guild.members.cache.get(member.id).roles.add(client.config.yetkili.yetkirol2)
                message.channel.send(embed.setDescription(`Kullanıcı 2. yetkiye yükseltildi. Kullanıcıya <@&>, <@&>, <@&> rolleri verildi!`))
                channel.send(embed.setDescription(` ${member} adlı kullanıcı ${message.author}  tarafından 2. yetkiye \`${moment().format('LLL')}\` tarihinde yükseltildi`))
          }
        if(args[1] === "yetki3") {
                await message.guild.members.cache.get(member.id).roles.remove(config.yetkikili.yetkirol2)
                await message.guild.members.cache.get(member.id).roles.add(client.config.yetkili.yetkirol3)
                message.channel.send(embed.setDescription(`Kullanıcı 3. yetkiye yükseltildi. Kullanıcıya <@&>, <@&>, <@&> rolleri verildi!`))
                channel.send(embed.setDescription(` ${member} adlı kullanıcı ${message.author}  tarafından 3. yetkiye \`${moment().format('LLL')}\` tarihinde yükseltildi`))
          }
      if(args[1] === "yetki4") {
                await message.guild.members.cache.get(member.id).roles.remove(config.yetkikili.yetkirol3)
                await message.guild.members.cache.get(member.id).roles.add(client.config.yetkili.yetkirol4)
                await message.guild.members.cache.get(member.id).roles.add(client.config.mute.staff)
                message.channel.send(embed.setDescription(`Kullanıcı 3. yetkiye yükseltildi. Kullanıcıya <@&>, <@&>, <@&> rolleri verildi!`))
                channel.send(embed.setDescription(` ${member} adlı kullanıcı ${message.author}  tarafından 3. yetkiye \`${moment().format('LLL')}\` tarihinde yükseltildi`))
          }
}
}