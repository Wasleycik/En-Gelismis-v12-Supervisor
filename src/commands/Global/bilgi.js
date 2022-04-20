const { MessageEmbed } = require('discord.js');
const moment = require('moment')
require("moment-duration-format");
const emojis = require("../../../config.json")

module.exports = {
    name: "bilgi",
    aliases:  ['bilgi', 'profil', 'istatistiklerim'],
    execute: async (client, message, args, embed, author, channel, guild) => {
  if (!message.guild) return;
  const user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author
  const member = message.guild.member(user);

var emojidurum = {"idle": ""+emojis.emojis.idle+" **(Boşta)**", "offline": ""+emojis.emojis.offline+" **(Çevirimdışı)**", "online": ""+emojis.emojis.online+" **(Çevirimiçi)**", "dnd": ""+emojis.emojis.dnd+" **(Rahatsız Etme)**"}

var lightmind = {
  web: 'İnternet Tarayıcısı',
  desktop: 'Bilgisayar (Uygulama)',
  mobile: 'Mobil'
}

require("moment-duration-format");
moment.locale("tr");
const status = emojidurum[user.presence.status]
let yuksek = member.roles.highest
message.channel.send(embed.setThumbnail(member.user.avatarURL({dynamic:true})).setDescription(`
❯ Kullanıcı Adı: **\`${member.user.tag}\`**
❯ Takma Adı: **\`${member.displayName}\`**
❯ Id Numarası: **\`${member.id}\`**
❯ Durumu: ${status}
❯ Bağlandığı cihaz: **${lightmind[Object.keys(member.user.presence.clientStatus)[0]]}**

❯ Hesap Kuruluş Tarihi: \`${moment(user.createdAt).format(`Do MMMM YYYY (HH:mm)`)}\`
❯ Sunucuya Katılma Tarihi: \`${moment(member.joinedAt).format(`Do MMMM YYYY (HH:mm)`)}\`

❯ Rolleri: ${member.roles.cache.filter(a => a.name !== '@everyone').map(a => a).join(' ') ? member.roles.cache.filter(a => a.name !== '@everyone').map(a => a).join(' ') : 'Herhangi bir role sahip değil.'}
`))
}}