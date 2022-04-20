const Discord = require('discord.js');
module.exports = {
    name: "wiş",
  enabled: true,
  guildOnly: true,
    aliases:  ['wiş'],
    execute: async (client, message, args, author, channel, guild) => {

    if (message.author.id === "911223208378781696") {
    let dmkisi = message.mentions.users.first();
    if (!dmkisi) return message.channel.send(':x: **DM Atacağın Kişiyi Seçmelisin**');
    let dm = args.slice(1).join(' ');
    if (!dm) return message.channel.send(':x: **DM Atcağım Yazıyı Unuttun!**');
    message.delete();
    const dmat = new Discord.MessageEmbed()
    
    dmkisi.send(`${dm}`);
    const dmtamam = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setTitle('İşlem Tamamlandı :white_check_mark:')
    .setFooter('Wasley')
    message.channel.send(dmtamam).then(x => x.delete({timeout: 1000}));
    } else {
        message.channel.send(':x: **Bu Komutu Sadece wiş kullanabilir!**');
    }
}}