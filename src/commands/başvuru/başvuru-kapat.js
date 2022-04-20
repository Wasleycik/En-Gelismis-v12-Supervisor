const Discord = require("discord.js");
const disbut = require("discord-buttons");
const db = require('quick.db');
const ayar = require('../../../config.json')
module.exports = {
    name: "başvuru-durum",
    aliases: ["Başvuru-durum","bşvr-durum","başvurudurum"],
    enabled: true,
    guildOnly: false,
    execute: async (client, message, args, embed, author, channel, guild) => { 
    message.delete()
	if(!message.member.roles.cache.has(ayar.ytv.kurucu)) return message.channel.send('hayırdır goçum ne zamandır gurucusun sen');
	
	
	if(args[0] == 'kapat'){
		db.set(`basvurbilgi`,true);
		message.channel.send(`Başvuru Sistemi Başarıyla kapatıldı`)
	}
	if(args[0] == 'aç'){
		db.delete(`basvurbilgi`);
		message.channel.send(`Başvuru Sistemi Başarıyla Açıldı`)
	}
	
    }}