const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: "cihaz",
    aliases:  ['cihaz',"chz"],
    execute: async (client, message, args, embed, author, channel, guild) => {

let member;
if(message.mentions.members.first()) {
member = message.mentions.members.first()
} else {
member = message.member;

}

let lightmind = {
  web: 'İnternet Tarayıcısı',
  desktop: 'Bilgisayar (Uygulama)',
  mobile: 'Mobil'
}

let durum = (member.user.presence.status).replace('dnd', 'Rahatsız etmeyin.').replace('idle', 'Boşta.').replace('online', 'Çevrimiçi.').replace('offline', 'Çevrimdışı.');
let uyy;
if(member.user.presence.status !== 'offline') {
uyy = ` Bağlandığı cihaz: ${lightmind[Object.keys(member.user.presence.clientStatus)[0]]}` } else { uyy = '' }
message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setTimestamp().setFooter(`Komudun kullanıldığı saat:`).setAuthor(message.author.tag, message.author.avatarURL ({ dynamic : true })).setDescription(`<@${member.user.id}> **kullanıcısının durumu**: \`${durum}${uyy}\``))

}
}