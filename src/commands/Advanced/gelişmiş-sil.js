const config = require("../../../config.json");

module.exports = {
    name: "sil2",
    aliases: ["temizle2", "sil2"],
    execute: async (client, message, args, embed, author, channel, guild) => {
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    const sayı = Number(args[1]);
if (!message.member.roles.cache.has(config.penals.mute.staff) && !message.member.hasPermission("ADMINISTRATOR")) return channel.send(embed.setDescription("Knk Yetkin Yok Kurcalama Ban Yersin"));
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Bu komutu kullanabilmek için "MESAJLARI YÖNET" iznine sahip olmalısın!`);
    if (!member) return message.reply("Bir kullanıcı belirtmeyi veya sayı belirtmeyi unuttun.");
    if (!sayı) return message.reply("Mesaj silmek için bir sayı belirtmelisin.");
    if (sayı > 100) return message.channel.send(`100'den fazla mesaj silemezsin.`)

    message.channel.messages.fetch({
        limit: 100,
    }).then((messages) => {
        if (member) {
            const cs = member ? member.id : client.user.id;
            messages = messages.filter(m => m.author.id === cs).array().slice(0, sayı);
            message.reply(`Başarılı **${member.user.tag}** adlı üyenin ${sayı} tane mesajını sildin.`).then(x => x.delete({ timeout: 5000 }))
        }
        try {
            message.channel.bulkDelete(messages)
        } catch (err) {
            message.channel.send(`Silmeye çalıştığın mesajlar 14 gün önce yazıldığı için silemiyorum.`)
        }
    });
}}