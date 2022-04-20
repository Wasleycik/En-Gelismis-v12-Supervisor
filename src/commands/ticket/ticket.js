const Discord = require('discord.js');
  const db = require("quick.db")
  const disbut = require("discord-buttons");

  module.exports = {
    name: "ticket",
    aliases: [],
    enabled: true,
    guildOnly: false,
    execute: async (client, message, args, embed, author, channel, guild) => { 
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("de sektur bok yetkin yok!!!!!")

const buton = new disbut.MessageButton()
.setStyle("blurple")
.setEmoji("🎫")
.setID("ticket")

message.channel.send(embed.setDescription("Öneri Şikayet Ve Yardım Talebi Oluşturmak İçin Butona Tıkla! "), buton)

  }
  }