
/* Command */

// Sunucu : Reborn
// Scripted/By : Lightmind
// Sunucu Version : V12
// Bu Script Reborn İçin hazırlanmış veya düzenlenmiştir. 
// Izinsiz kullanılması Yasaktır. Teşekkürler.

// DOSYA SON GUNCELLEME: ,Şubat 12, 2021


module.exports = {
    name: "üyetakip",
    aliases: ["üye-takip","istatistik"],
    execute: async (client, message, args,  author, channel, guild) => {
    const Discord = require("discord.js")
    message.channel.send(new Discord.MessageEmbed().setTitle("Sunucu Üye Giriş Bilgi").setColor("#BLACK").setDescription(`
    Sunucuda toplam **•** **${message.guild.memberCount}** Üye
    Son 1 **Saatte** Giren Üyeler **•** **${message.guild.members.cache.filter(a => (new Date().getTime() - a.joinedTimestamp) < 3600000).size}**
    Son 1 **Günde** Giren Üyeler **•** **${message.guild.members.cache.filter(a => (new Date().getTime() - a.joinedTimestamp) < 86400000).size}**
    Son 1 **Haftada** Giren Üyeler **•** **${message.guild.members.cache.filter(a => (new Date().getTime() - a.joinedTimestamp) < 604800000).size}**
    Son 1 **Ayda** Giren Üyeler **•** **${message.guild.members.cache.filter(a => (new Date().getTime() - a.joinedTimestamp) < 2629800000).size}**`)
    .setThumbnail(message.guild.iconURL())
    .setFooter(message.guild.name, message.guild.iconURL())
    .setTimestamp())
  }}