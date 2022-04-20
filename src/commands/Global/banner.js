const Discord = require('discord.js');
const db = require('quick.db');
const axios = require('axios');

module.exports = {
    name: "banner",
    aliases:  [],
    execute: async (client, message, args, embed, author, channel, guild) => {
  
  const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(m => m.user.username === args[0]) || message.author
let userid = args[0];
  axios
      .get(`https://discord.com/api/users/${user.id}`,{
        headers: {
          Authorization: `Bot ${client.token}`,
        },
      })
      .then((res) =>{
        const {banner, accent_color} = res.data;
  
        if(banner){
          const extention = banner.startsWith("a_") ? ".gif" : ".png";
          const url = `https://cdn.discordapp.com/banners/${user.id}/${banner}${extention}?size=4096`;
  
          const embed = new Discord.MessageEmbed()
          .setColor(accent_color)
          .setAuthor(`${user.user.username} Banner`, user.user.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
          .setImage(url);
          message.channel.send(embed)
        }
        else{
          const embed2 = new Discord.MessageEmbed().setDescription('Kullanıcıda banner bulunmuyor').setColor(accent_color);
          message.reply(embed2)
        }
      })  
}}