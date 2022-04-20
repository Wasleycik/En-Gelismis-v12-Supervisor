const Discord = require('discord.js');
  const db = require("quick.db")
  const disbut = require("discord-buttons");

  module.exports = {
    name: "ticketshop",
    aliases: [],
    enabled: true,
    guildOnly: false,
    execute: async (client, message, args, embed, author, channel, guild) => { 
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("de sektur bok yetkin yok!!!!!")

const buton = new disbut.MessageButton()
.setStyle("blurple")
.setEmoji("🎫")
.setID("ticket")

message.channel.send(embed.setDescription("**Shop Destek**\n\ Shop Hakkında Yardım\n Alışveriş\n Öneri\n VB Şeyler İçin Aşşağıdaki Butona Tıklaman Yeterlidir! "), buton)
    }}


                     