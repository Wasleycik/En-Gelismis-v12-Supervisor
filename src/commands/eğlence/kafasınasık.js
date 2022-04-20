const Discord = require('discord.js');
module.exports = {
    name: "kafasınasık",
    aliases: ["kafasınasık", "kfsn"],
    execute: async (client, message, args, embedcik, author, channel) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.MessageEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`kafasınasık` adlı komutu özel mesajlarda kullanamazsın.');
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.reply('Kimin kafasınası kacağını yazmalısın.').catch(console.error);
    message.channel.send('Kafasına sıkılıyor....')
      .then(nmsg => nmsg.edit('https://goo.gl/91Y2az'))
      .then(nmsg => nmsg.edit('https://goo.gl/91Y2az'))
      .then(nmsg => nmsg.edit('https://goo.gl/91Y2az'))
      .then(nmsg => nmsg.edit('https://goo.gl/fWHUqt'))
      .then(nmsg => nmsg.edit('https://goo.gl/fWHUqt'))
      .then(nmsg => nmsg.edit('https://goo.gl/fWHUqt'))
      .then(nmsg => nmsg.edit('https://goo.gl/fWHUqt'))
      .then(nmsg => nmsg.edit('https://goo.gl/fWHUqt'))
      .then(nmsg => nmsg.edit('https://goo.gl/91Y2az'))
      .then(nmsg => nmsg.edit('https://goo.gl/91Y2az'))
      .then(nmsg => nmsg.edit(`${Random[kafasınasık]}`));
     var Random = [
      'Tam isabet',
      'Iskaladın tekrar dene.',
    ];
    var kafasınasık = Math.floor(Math.random()*Random.length);
}}