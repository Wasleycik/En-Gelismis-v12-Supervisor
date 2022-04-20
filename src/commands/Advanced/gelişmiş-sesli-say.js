const { MessageEmbed } = require('discord.js');
const config = require("../../../config.json");
module.exports = {
    name: "gsesli",
    aliases: ["gseslisay"],
    execute: async (client, message, args,  author, channel, guild) => {
if (!message.member.roles.cache.has(config.registration.staff) && !message.member.hasPermission("ADMINISTRATOR")) return channel.send(embed.setDescription("Knk Yetkin Yok Kurcalama Ban Yersin"));
    let embed = new MessageEmbed().setColor('RANDOM').setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }));
    let tag = config.registration.GuilDTag
    let enaltyt = message.guild.roles.cache.get(config.registration.staff);
    let pubID = config.parents.publicparents

    let topses = message.guild.members.cache.filter(s => s.voice.channel);
    let tagses = topses.filter(s => s.user.username.includes(tag));
    let ytses = topses.filter(s => s.roles.highest.position >= enaltyt.position);
    let otherses = topses.size - ytses.size - tagses.size < 1 ? 0 : topses.size - ytses.size - tagses.size;
    let pubses = topses.filter(s => s.voice.channel.parentID === pubID);

    let yayın = topses.filter(s => s.voice.streaming);
    let mik = topses.filter(s => s.voice.selfMute).size;
    let kulak = topses.filter(s => s.voice.selfDeaf).size;
    let bot = topses.filter(s => s.user.bot);
    let count = 1;
    let topCategory = message.guild.channels.cache.filter(s => s.type === 'category').sort((a, b) => Number(message.guild.members.cache.filter(s => s.voice.channel && s.voice.channel.parentID === b.id).size - Number(message.guild.members.cache.filter(s => s.voice.channel && s.voice.channel.parentID === a.id).size))).map((c, index) => `${count++}. **#${c.name}**: **${c.members.filter(s => s.voice.channel && s.voice.channel.parentID === c.id).size}**`).splice(0, 3).join('\n');

    embed.setDescription(`
Sesli kanallarda toplam **${topses.size}** kişi var !
────────────────────────────
Public odalarda **${pubses.size}** kişi var !
Ses kanallarında **${otherses || '0'}** normal kullanıcı var !
Ses kanallarında **${tagses.size}** taglı kullanıcı var !
Ses kanallarında **${ytses.size}** yetkili var !
────────────────────────────
Ses kanallarında **${yayın.size}** kişi yayın yapıyor !
Mikrofonu kapalı: **${mik}**
Kulaklığı kapalı: **${kulak}**
Bot: **${bot.size}**
──────────────────────────── 
Top 3 kategori sırası;
${topCategory || 'Boş'}
`)
.setFooter('Wasley ❤️ Hesperos')


    message.channel.send(embed)
}}