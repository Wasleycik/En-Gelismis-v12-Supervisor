const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: "özelodasil",
    aliases: [],
    enabled: true,
    guildOnly: false,
    execute: async (client, message, args,  author, channel, guild) => { 
  
if(message.author.id !== message.guild.owner.id) return message.channel.send(' Bu komutu kullanmak için sunucu sahibi olman gerek!')
  
  if (!message.guild.channels.cache.find(channel => channel.name === "➕│2 Kişilik Oda")) return message.channel.send(" Zaten kurulu değil.")

    let msgg = await message.reply(`Geçici Oda Sistemini Silmek İstiyor musun? (Evet/Hayır)`);

    let messages = await msgg.channel.awaitMessages((m) => m.author.id == message.author.id && ["evet", "hayır", "hayir","Hayır","HAYIR"].some(cevap => m.content.toLowerCase().includes(cevap)), {
        max: 1,
        time: 15000
    });

    if (messages.size <= 0) {
        return message.reply("Cevap vermediğin için iptal ettim");
    }

 let reply = messages.first();
    if (reply.content.toLocaleLowerCase().includes("evet")) {

      message.guild.channels.cache.find((c) => c.type === "category" && c.name === "🔒 2 Kişilik Odalar").delete()
message.guild.channels.cache.find((c) => c.type === "voice" && c.name === "➕│2 Kişilik Oda").delete()
  
message.guild.channels.cache.find((c) => c.type === "category" && c.name === "🔒 3 Kişilik Odalar").delete()
message.guild.channels.cache.find((c) => c.type === "voice" && c.name === "➕│3 Kişilik Oda").delete()
  
message.guild.channels.cache.find((c) => c.type === "category" && c.name === "🔒 4 Kişilik Odalar").delete()
message.guild.channels.cache.find((c) => c.type === "voice" && c.name === "➕│4 Kişilik Oda").delete()
  
message.guild.channels.cache.find((c) => c.type === "category" && c.name === "🔒 5 Kişilik Odalar").delete()
message.guild.channels.cache.find((c) => c.type === "voice" && c.name === "➕│5 Kişilik Oda").delete()
  
message.guild.channels.cache.find((c) => c.type === "category" && c.name === "🔒 15 Kişilik Odalar").delete()
message.guild.channels.cache.find((c) => c.type === "voice" && c.name === "➕│15 Kişilik Oda").delete()

        message.reply(`Geçici Oda Sistemini Sildim.`);
    }
  else message.reply("İşlemi iptal ettim..");

}

}