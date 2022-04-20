const Discord = require("discord.js");

module.exports = {
    name: "taş kağıt makas",
    aliases: ['taş', 'tas', 'kağıt', 'kagıt', 'kagit', 'kağit', 'makas', 'tkm', 'taskagitmakas', 'taskagıtmakas', 'taskağıtmakas', 'tas-kagıt-makas'],
    execute: async (client, message, args, embed, author, channel, guild) => {
        function get_random(list) {
            return list[Math.floor((Math.random() * list.length))];
        };
            //<:tas:383865914086522890> <:kagit:383865913696583686> <:makas:383865913583206400>
        var yazitura = ["T-K-M **|** Sonuç: **🗿 (TAŞ)** ","T-K-M **|** Sonuç: **📄** (KAĞIT)","T-K-M **|** Sonuç: **✂️** (MAKAS)"] ;
        var sonuc = get_random(yazitura);
        message.channel.send('3.. 2.. 1..').then(msg => {
            setTimeout(() => {
                msg.edit("🗿")
            }, 1000);
            setTimeout(() => {
                msg.edit("📄")
            }, 2000);
            setTimeout(() => {
                msg.edit("✂️")
            }, 3000);
            setTimeout(() => {
                msg.edit("🗿")
            }, 4000);
            setTimeout(() => {
                msg.edit("📄")
            }, 5000);
            setTimeout(() => {
                msg.edit("✂️")
            }, 6000);
            setTimeout(() => {
                msg.edit("🗿")
            }, 7000);
            setTimeout(() => {
                msg.edit("📄")
            }, 8000);
            setTimeout(() => {
                msg.edit("✂️")
            }, 9000);
            setTimeout(() => {
                msg.edit(sonuc)
            }, 10000);
        });
    }
};
