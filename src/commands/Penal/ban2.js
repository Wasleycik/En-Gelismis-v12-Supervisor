const Discord = require('discord.js');
const db = require('quick.db');
const config = require("../../../config.json")
const limit = new Map();
const moment = require("moment");
const { MessageEmbed } = require("discord.js");
moment.locale("tr");

module.exports = {
  name: "cu",
  aliases: ["cu", "cu"],
  execute: async (client, message, args, embed, author, channel, guild) => {
     let log = config.penals.ban.log // ban atıldıktan kayıt alınacak log kanalı.
        
            if (!message.member.roles.cache.has(config.penals.ban.staff)&& !message.member.hasPermission("ADMINISTRATOR")) return message.react('❎')
            let member = await client.users.fetch(args[0]);
            if (!args[0]) return message.reply('Bir kullanıcı giriniz.')
            let sebep = args.splice(1).join(" ") || "Bir Sebep Belirtilmemiş"
           
             if (config.penals.ban.limit > 0 && limit.has(author.id) && limit.get(author.id) == config.penals.ban.limit) return channel.send(embed.setDescription("Saatlik ban sınırını geçtin!"))
    if (!message.member.hasPermission(8) && member && member.roles.highest.position >= message.member.roles.highest.position) return channel.send("Aynı veya yüksek yetki!")
        
            message.guild.members.ban(member.id, { reason: sebep })
            message.channel.send(new MessageEmbed().setDescription(`${member} Adlı Kullanıcı ${message.author} Tarafından \`${sebep}\` Sebebiyle Sunucudan Yasaklandı.`).setFooter(`${moment(Date.now()).format("LLL")}`).setColor('RED'))
            client.channels.cache.get(log).send(new MessageEmbed().setDescription(`<@!${member.id}> Adlı Üye Culandı\n\n Culayan Yetkili : ${message.author} \nCulanan Üye : <@!${member.id}> - ( \`${member.id}\` )  \nSebep : \`${sebep}\` \nCulandığı zaman : \`${moment(Date.now()).format("LLL")}\``).setImage("https://tenor.com/view/bolvar-ban-efe-sarpan-gif-24145354").setColor('RANDOM'))
        }}