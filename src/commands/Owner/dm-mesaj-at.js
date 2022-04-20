const Discord = require('discord.js');
module.exports = {
    name: "dmat",
  enabled: true,
  guildOnly: true,
    aliases:  ['dmat'],
    execute: async (client, message, args, author, channel, guild) => {

    if (message.author.id === "598974473374400512") {
    let dmkisi = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if (!dmkisi) return message.channel.send(':x: **DM Atacağın Kişiyi Seçmelisin**');
    let dm = args.slice(1).join(' ');
    if (!dm) return message.channel.send(':x: **DM Atcağım Yazıyı Unuttun!**');
    message.delete();
    const dmat = new Discord.MessageEmbed()
    
    dmkisi.send(`${dm}`);
    message.channel.send("Mesaj Başarıyla Gönderildi").then(x => x.delete({timeout: 1000}));
    } else {
        message.channel.send(':x: **Bu Komutu Sadece Yapımcım Kullanabilir!**');
    }
}}