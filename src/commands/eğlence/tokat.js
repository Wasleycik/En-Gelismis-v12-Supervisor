const Discord = require('discord.js');
const funnyWords = require("funny-words");

module.exports = {
  name: "tokat",
  aliases: ["tokat"],
  execute: async (client, message, args, embed, author, channel, guild) => {
if(!message.mentions.members.first()) return message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription(`Kullanıcı Etiketleyerek dener misin?`)).then(a => a.delete({timeout: 10000}))
var gifler = [
  "https://cdn.discordapp.com/attachments/767247105172439042/767262725105254400/giphy.gif",
  "https://cdn.discordapp.com/attachments/767247105172439042/767262735838216232/bf4ac591346c0e44d88beff1c8525a9e.gif",
  "https://cdn.discordapp.com/attachments/767247105172439042/767262731556225034/HkA6mJFP-.gif",
  "https://cdn.discordapp.com/attachments/767247105172439042/767262733212450846/HyPjmytDW.gif"
];
let resimler = gifler[Math.floor(Math.random() * gifler.length)];
if(message.author.id === message.mentions.members.first().id) return message.channel.send(new Discord.MessageEmbed().setColor('#00567e').setTitle('Dur Orda!').setDescription('Kendini tokat atıcaksın olum sakin.')).then(a => a.delete({timeout: 10000}))
message.channel.send(`> ${message.author} ${message.mentions.members.first()} **kişisine Osmanlı tokatı attı.**`, new Discord.MessageAttachment(resimler));
}}