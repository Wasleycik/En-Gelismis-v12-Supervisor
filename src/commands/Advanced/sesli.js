const Discord = require("discord.js");
const config = require("../../../config.json");
const { red, green, star, Revuu, kirmiziok } = require("../../../config.json")
module.exports = {
    name: "sesli",
    aliases: ["seslisay"],
    execute: async (client, message, args, embed, author, channel, guild) => {
        if (!message.member.roles.cache.has(config.registration.staff) && !message.member.hasPermission("ADMINISTRATOR")) return channel.send(embed.setDescription("Knk Yetkin Yok Kurcalama Ban Yersin"));
        let pub = message.guild.channels.cache.filter(x => x.parentID === config.parents.publicparents && x.type == "voice").map(u => u.members.size).reduce((a, b) => a + b)
        let ses = message.guild.members.cache.filter(x => x.voice.channel).size
        let topses = message.guild.members.cache.filter(s => s.voice.channel);
        let yayın = topses.filter(s => s.voice.streaming);
        let mik = topses.filter(s => s.voice.selfMute).size;
        let bot = topses.filter(s => s.user.bot);
        let kulak = topses.filter(s => s.voice.selfDeaf).size;
        let tagges = message.guild.members.cache.filter(x => {
            return x.user.username.includes(config.registration.GuildTag) && x.voice.channel 
        }).size
        let notag = message.guild.members.cache.filter(x => {
            return !x.user.username.includes(config.registration.GuildTag) && x.voice.channel
        }).size
        let yetkili = message.guild.members.cache.filter(x => {
            return x.user.username.includes(config.registration.GuildTag) && x.voice.channel && x.roles.cache.has(config.registration.staff)
        }).size
        const mesaj = new Discord.MessageEmbed()
            .setColor("PURPLE").setDescription(`➽ Sesli kanallarda toplam **${ses}** kullanıcı bulunmaktadır!

➥ Public odalarda **${pub}** kullanıcı bulunmaktadır!
➥ Ses kanallarında **${notag}** normal kullanıcı bulunmaktadır!
➥ Ses kanallarında **${tagges}** taglı kullanıcı bulunmaktadır!
➥ Ses kanallarında toplam **${yetkili}** yetkili bulunmaktadır!

➥ Ses kanallarında **${yayın.size}** kişi yayın yapıyor !
➥ Mikrofonu kapalı: **${mik}**
➥ Kulaklığı kapalı: **${kulak}**
     
`)
        return message.channel.send(mesaj)
    }
}