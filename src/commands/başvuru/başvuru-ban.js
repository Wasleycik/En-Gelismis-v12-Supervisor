const Discord = require("discord.js");
const db = require('quick.db');
const ayar = require('../../../config.json')
module.exports = {
    name: "başvuru-ban",
    aliases: ["Başvuru-ban","bşvr-ban","başvuruban"],
    enabled: true,
    guildOnly: false,
    execute: async (client, message, args, embed, author, channel, guild) => { 

    if(!message.member.roles.cache.has(ayar.ytv.adminrol)) return message.channel.send('yetkin yok');
	
	if(args[0]=='banla'){
		
		const banlanacak = message.mentions.members.first()
	if (!banlanacak) return message.channel.send("Banlanıcak kullanıcı belirtirmisin?").then(a => a.delete({ timeout: 5000 }));
	
		db.set(`ban.${banlanacak.id}`, true)
		message.channel.send(new Discord.MessageEmbed().setDescription(`${banlanacak} adlı kişi başvuru sisteminden banlandı.`));
	}
	
	if(args[0]=='kaldır'){
		
		const banlanacak = message.mentions.members.first()
	if (!banlanacak) return message.channel.send("Banı kaldırılacak kullanıcı belirtirmisin?").then(a => a.delete({ timeout: 5000 }));
	
		db.delete(`ban.${banlanacak.id}`)
		message.channel.send(new Discord.MessageEmbed().setDescription(`${banlanacak} adlı kişi başvuru sisteminden banı kaldırıldı.`).setColor('GREEN'));
	}
	
    if(!args[0]) return message.reply('Lütfen Bir Argüman belirtiniz `banla/kaldır`');
	
	
	
	
}}