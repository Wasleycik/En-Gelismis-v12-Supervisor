const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const moment = require("moment");
const qdb = require("quick.db");
const tdb = new qdb.table("tag")

const ayar = require("../../../config.json");
module.exports = {
    name: "tagliste",
    aliases: ["tagliste"],
    execute: async (client, message, args,  author, channel, guild) => {
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    let embed = new MessageEmbed().setAuthor(member.displayName, member.user.displayAvatarURL({dynamic: true})).setColor(message.member.displayHexColor).setFooter("Wasley was here?")

   if (!message.member.roles.cache.has("ID") && !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(embed.setDescription(`Bu komutu kullanmak için yeterli yetkiye sahip değilsin`)).then(x => x.delete({timeout: 10000}));



    let data = tdb.get(`tagaldı.${member.id}`) || [];
    let listedData = data.length > 0 ? data.map((value, index) => ` \`${index + 1}.\` ${value.guildName} | (\`${value.guildNameid}\`) ${moment(Date.now()).format("LLL")} `).join("\n") : "Hiç bir taglı üye almamış.";
    
    message.channel.send(embed.setDescription(`Toplam aldığı üye ${data.length || "**0**"} \n \n ${listedData}`))

    
}}
 