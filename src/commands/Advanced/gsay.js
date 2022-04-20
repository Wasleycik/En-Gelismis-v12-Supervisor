const { MessageEmbed } = require("discord.js");
const config = require("../../../config.json")
module.exports = {
    name: 'gsay',
    aliases: ["gsayy", "gsayı"],
    execute: async (client, message, args, embed, author, channel, guild) => {
       if (!message.member.roles.cache.has(config.registration.staff) && !message.member.hasPermission("ADMINISTRATOR")) return channel.send(embed.setDescription("Komutu kullanabilmek için geçerli yetkin olmalı"));
        let topses = message.guild.members.cache.filter(s => s.voice.channel);
        let etiket = config.registration.etikettag
        var TotalMember = message.guild.memberCount
        var Online = message.guild.members.cache.filter(off => off.presence.status !== 'offline').size;
        var botlar = message.guild.members.cache.filter(m => m.user.bot).size;
        var Taglı = message.guild.members.cache.filter(u => u.user.username.includes(config.registration.GuilDTag)).size;
        var etikettag = message.guild.members.cache.filter(u => u.user.discriminator === etiket ).size;
        var Voice = message.guild.members.cache.filter(s => s.voice.channel).size;
        var Boost = message.guild.premiumSubscriptionCount;
        var Yetkili = message.guild.members.cache.filter(b => b.roles.cache.has(config.registration.staff)).size;
        var Kayıtlı = message.guild.members.cache.filter(kayıt => !kayıt.roles.cache.has(config.registration.unregistered)).size;
        var boostlevel = message.guild.premiumTier;
        var bot = topses.filter(s => s.user.bot);


        message.channel.send(new MessageEmbed().setFooter("Wasley was here?", message.guild.iconURL).setColor('BLUE').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setDescription(`
        
    ◾️ **Sunucumuzda toplam \`${TotalMember}\` kullanıcı bulunuyor.**
    ◾️ **Sunucumuzda \`${Kayıtlı}\` Kayıtlı Üye bulunuyor.**
    ◾️ **Sunucumuzda \`${Online}\` Aktif Üye bulunuyor.**
    ◾️ **Seste \`${Voice} (+${bot.size} Bot)\` kullanıcı bulunuyor.**
    ◾️ **Sunucunuzda Toplam \`${Taglı}\` Taglı Üye Bulunuyor**
    ◾️ **Sunucumuzda Etiket Tagında Toplam \`${etikettag}\` Üye bulunuyor.**
    ◾️ **Sunucumuzda \`${Yetkili}\` Yetkili Üye bulunuyor.**
    ◾️ **Sunucuya Toplamda \`${Boost}\` Boost Basılmış \`(${boostlevel}. seviye)\`**
    `))
      
    }
}