const {MessageEmbed} = require("discord.js"); 
module.exports = {
    name: 'reboot',
  enabled: true,
  guildOnly: false,
    aliases: ["reset", "yenile", "yenşden-başlat"],
    execute: async (client, message, args,  author, channel, guild ) => {
  if(message.author.id !== "598974473374400512") return message.reply(`bu komutu sadece Bot Sahibi kullanabilir!`);
  
  let embed = new MessageEmbed()
  .setColor("RANDOM")
  .setTitle("Bot yeniden başlıyor... Bu İşlem Birkaç Dakika Sürebilir Lütfen Bekleyiniz")
  await message.channel.send(embed); 
  console.log("Bot yeniden başlıyor... Bu İşlem Birkaç Dakika Sürebilir Lütfen Bekleyiniz");

  
  client.commands.forEach( async cmd => {
    await client.unloadCommand(cmd);
  }); 
  process.exit(1);
}}