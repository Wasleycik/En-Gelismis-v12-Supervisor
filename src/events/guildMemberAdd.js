const db = require("quick.db");
const config = require("../../config.json");
const moment = require("moment");
const client = global.client;
moment.locale("tr");
require("moment-duration-format");
const { MessageEmbed } = require("discord.js")



module.exports = async member => {
    var kurulus = (Date.now() - member.user.createdTimestamp);
    var zaman = moment.duration(kurulus).format("Y [yıl], M [ay]");
    var zaman2 = moment.duration(kurulus).format("DD [Gün], HH [saat], mm [dakika], ss [saniye]");
    const date = moment(member.user.createdAt)
    const startedAt = Date.parse(date);
    var msecs = Math.abs(new Date() - startedAt);
    const years = Math.floor(msecs / (1000 * 60 * 60 * 24 * 365));
    msecs -= years * 1000 * 60 * 60 * 24 * 365;
    const months = Math.floor(msecs / (1000 * 60 * 60 * 24 * 30));
    msecs -= months * 1000 * 60 * 60 * 24 * 30;
    const weeks = Math.floor(msecs / (1000 * 60 * 60 * 24 * 7));
    msecs -= weeks * 1000 * 60 * 60 * 24 * 7;
    const days = Math.floor(msecs / (1000 * 60 * 60 * 24));
    msecs -= days * 1000 * 60 * 60 * 24;
    const hours = Math.floor(msecs / (1000 * 60 * 60));
    msecs -= hours * 1000 * 60 * 60;
    const mins = Math.floor((msecs / (1000 * 60)));
    msecs -= mins * 1000 * 60;
    const secs = Math.floor(msecs / 1000);
    msecs -= secs * 1000;
    var string = "";
    if (years > 0) string += `${years} yıl ${months} ay`
    else if (months > 0) string += `${months} ay ${weeks > 0 ? weeks + " hafta" : ""}`
    else if (weeks > 0) string += `${weeks} hafta ${days > 0 ? days + " gün" : ""}`
    else if (days > 0) string += `${days} gün ${hours > 0 ? hours + " saat" : ""}`
    else if (hours > 0) string += `${hours} saat ${mins > 0 ? mins + " dakika" : ""}`
    else if (mins > 0) string += `${mins} dakika ${secs > 0 ? secs + " saniye" : ""}`
    else if (secs > 0) string += `${secs} saniye`
    string = string.trim();
    const endAt = member.user.createdAt
    const gün = moment(new Date(endAt).toISOString()).format('DD')
    const ay = moment(new Date(endAt).toISOString()).format('MM').replace("01", "Ocak").replace("02", "Şubat").replace("03", "Mart").replace("04", "Nisan").replace("05", "Mayıs").replace("06", "Haziran").replace("07", "Temmuz").replace("08", "Ağustos").replace("09", "Eylül").replace("10", "Ekim").replace("11", "Kasım").replace("12", "Aralık")
    const yıl = moment(new Date(endAt).toISOString()).format('YYYY')
    const saat = moment(new Date(endAt).toISOString()).format('HH:mm')
    const kuruluş = `${gün} ${ay} ${yıl} ${saat}`;
    if (kurulus > 604800000) {
        member.roles.add(config.registration.unregistered);
        member.roles.add(config.registration.unregistered);
        member.roles.add(config.registration.unregistered);
        member.roles.add(config.registration.unregistered);
         member.roles.add(config.buttons.activity);
         member.roles.add(config.buttons.giveaway);
        member.setNickname(config.registration.autonickname);
        member.setNickname(config.registration.autonickname);
        member.guild.channels.cache.get(config.channels.welcomechannel).send(`
Sunucumuza hoş geldin ${member} Seninle birlikte \`${member.guild.memberCount}\` üyeye ulaştık!
        
Hesabın \`${kuruluş}\` tarihinde \`(${zaman})\` önce oluşturulmuş.

Kayıt Olmak İçin Ses Kanallarının Birine Girerek Teyit Verip Kayıt Olabilirsin

Kayıt Olduktan Sonra Sunucu Kurallarımızı Okumayı Unutmayınız Ceza-i İşlemlerin Ona Göre Uygulanacaktır

Sende Tagımızı (${config.registration.GuilDTag}) Alarak Ailemize Katılabilirsin

<@&${config.registration.staff}> rolündeki yetkililerimiz seninle ilgilenecektir 🎉🎉🎉`);
    } else {
        member.roles.add(config.registration.suspecios);
        member.roles.add(config.registration.suspecios);
        member.roles.add(config.registration.suspecios);
        member.setNickname(config.registration.susoeciosnickname);
        member.setNickname(config.registration.susoeciosnickname);
        member.guild.channels.cache.get(config.registration.suspecchannel).send(
new MessageEmbed()
                .setAuthor(member.user.username, member.user.avatarURL({ dynamic: true }))
                .setColor("#2c2f33")
                .setDescription(`:tada: **Sunucumuza hoş geldin ${member}!**
        
                **Hesabın \`${zaman2}\` Oluşturulmuş Yeni Olduğu İçin Şüpheliye Atıldın**
        
                **Şüpheliden Çıkmak İçin Yetkililerimize Ses Teyit Vermen Yeterlidir**!`)
                .setFooter(`Wasley Hesperos`)
                .setTimestamp());
    }
}

module.exports.conf = {
    name: "guildMemberAdd"
}

