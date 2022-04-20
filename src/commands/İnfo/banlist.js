const Discord = require('discord.js');
const config = require("../../../config.json");
const db = require('quick.db');

module.exports = {
    name: "banlist",
    aliases: ['ban-list', 'banliste'],
    execute: async (client, message, args, embed, author, channel, guild) => {
      
  var userlist = message.guild.fetchBans()
userlist.then(collection => {
if(collection.first() == null){
  
const embed = new Discord.MessageEmbed()
.setTitle("Sunucunuzda Banlanan Kimse Yok!")      
.setColor("BLUE")
message.channel.send(embed)
  
} else {
const data = collection.map(mr => "`"+mr.user.username+"`").slice(0, 60).join(", ")
const embed = new Discord.MessageEmbed()
.setTitle(":no_entry_sign:  Sunucudan Banlananlar")
.setColor("BLUE")
.setDescription(data)
.setTimestamp()
.setFooter("Made By. Wasley")
message.channel.send(embed)
}
})
}}