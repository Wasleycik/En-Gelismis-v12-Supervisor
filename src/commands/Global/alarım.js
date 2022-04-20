const Discord = require('discord.js');
const ms = require('ms')

module.exports = {
    name: "alarm",
    aliases: ["alarm"],
    execute: async (client, message, args, embedcik, author, channel, guild) => {
  
  let süre = args [0] 
  
  if(!süre) return message.channel.send(`!alarm <1h,1m,1s> <hatırlatacağım şey>`)
  
  let alarm = args.slice(1).join(' ')
  
  if(!alarm) return message.channel.send(`!alarm <1h,1m,1s> <hatırlatacağım şey>`)
  
  message.channel.send(`Alarm Kuruldu **${süre}** Sonra Size Bildireceğim`)
  
  setTimeout(() => {
  
  message.channel.send(`<@${message.author.id}>, Hatırlatmamı İstediğin Şeyin Zamanı Geldi\n**${alarm}**`);
  
  }, ms(süre));

}}