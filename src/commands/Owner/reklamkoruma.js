const Discord = require('discord.js');
const qdb = require("quick.db");
const config = require("../../../config.json");



module.exports = {
  name: "reklamkoruma",
  aliases: ["reklamkoruma"],
  enabled: true,
  guildOnly: false,
  permLevel: 0,
  execute: async (client, message, args, embed, author, channel, guild) => {
  if (!message.guild) return
  let db = new qdb.table("sunucuayar");
  let db2 = new qdb.table("prefix");
  let guvenliKisiDB = new qdb.table("guvenlikisi");
  
  let gkv = await guvenliKisiDB.get(`guvenlikisi`) || []
  if (gkv.some(i => i == message.author.id) || message.author.id === message.guild.ownerID) {
    const sec = args[0]
    const emoji = client.emojis.cache.find(x => x.name === "owsla_tik")
    const prefix = await db2.get("prefix.") || config.bot.prefix
    if (!sec) {
      return message.channel.send(new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setFooter(config.bot.footer)
        .setTimestamp()
        .addField(`Reklam Koruma Nedir ?`,
          `*Sunucuda sohbet kanalında üyelerin reklam yapıp yapmadığını kontrol etmeye yarayan bir sistemdir*
*Bu sistemi kullanabilmek için* \`${prefix[0]}reklam aç/kapat\` *şeklinde çalıştırmalısınız*`)
      )
    }


    if (sec == "aç") {
      if (await db.get(`sunucuayar.reklam_koruma`)) {
        return message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setDescription(`
**Reklam Koruma,**
**Bu özellik zaten açık kapatmak istiyorsanız** \`${prefix[0]}reklam kapat\` **yazabilirsiniz**`)).then(xyz => xyz.delete({
          timeout: 5000
        }))
      }
      await db.set(`sunucuayar.reklam_koruma`, "Aktif")
      return message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setDescription(`
**Reklam Koruma,**
**Sistem başarıyla aktif edildi artık \`${message.guild.name}\` sunucusunda reklam yapılmaz**`)).then(xyz => xyz.delete({
        timeout: 5000
      }))
    }
    if (sec == "kapat") {
      if (!await db.get(`sunucuayar.reklam_koruma`)) {
        return message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setDescription(`
**Reklam Koruma,**
**Bu özellik zaten kapalı açmak istiyorsanız** \`${prefix[0]}reklam aç\` **yazabilirsiniz**`)).then(xyz => xyz.delete({
          timeout: 5000
        }))
      }
      await db.delete(`sunucuayar.reklam_koruma`)
      return message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setDescription(`
**Reklam Koruma,**
**Sistem başarıyla deaktif edildi artık \`${message.guild.name}\` sunucusunda reklam yapılır**`)).then(xyz => xyz.delete({
        timeout: 5000
      }))
    }
  } else {
    return message.reply(
      "Bu komut sadece TAÇ sahibi tarafından kullanılabilir"
    );
  }
}
}