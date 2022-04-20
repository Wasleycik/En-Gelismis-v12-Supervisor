const Discord = require("discord.js")
let destekKanal = "880573351960121414"
module.exports = {
    name: "destek",
    aliases: [],
    enabled: true,
    guildOnly: false,
    execute: async (client, message, args,  author, channel, guild) => { 
  
  let isEnabled
  let mesaj = args.slice(0).join(" ")
  if(!mesaj) return message.reply("**Neden Destek İstediğinizi Yazmanız Gerekir!\nÖrnek: `!canlıdestek Botun Bir Komutu Çalışmıyor.`**")
  
  message.reply("✅ **Canlı Destek Talebinizi Gönderdiniz!\nEn Kısa Sürede Sizin ile İletişime Geçeceklerdir!**")
  let chan = message.channel
  
  const embed = new Discord.MessageEmbed()
    .setTitle(`🛠 Destek Talebi Bilgiler 🛠`)
    .setColor("BLUE") 
    .setDescription(`**🚉 Sunucu**\n● | ${message.guild.name}\n● | (${message.guild.id}) \n \n**📮 Kanal**\n● | ${message.channel.name}\n● | (${message.channel.id})\n \n**📝 Destek İsteyen**\n● | ${message.author.tag}\n● | (${message.author.id})\n \n**📩 Gelen Mesajı**\n● | ${mesaj}`)
    .setFooter("🔧 Canlı Destek Sistemi ")
    .setTimestamp()
  client.channels.cache.get(destekKanal).send(embed)
  const collector = client.channels.cache.get(destekKanal).createMessageCollector(message => message.content.startsWith(""), {time: 86400000})
  
  client.channels.cache.get(destekKanal).send("⚠️ **Destek Talebi Geldi** ⚠️\n \n**✅ Kabul Etmek İstiyorsan `katıl`\n❌ Red Etmek İstiyorsan `kapat` Yazabilirsin!**")
  console.log("s1")
  collector.on("collect", m => {
      console.log("s2")
    if (m.content == "kapat") collector.stop("aborted")
    if (m.content == "katıl") collector.stop("success")
      console.log("s3")
  });
    console.log("s4")
  collector.on("end", (collected, reason) => {
    if (reason === "time")
      return message.reply("**🔌 Bağlantı ZAMAN Aşımına Uğradı**")
    if (reason === "aborted") {
      message.reply("**🛑 Red Edildi 🛑**");
    client.channels.cache.get(destekKanal).send("**📡 Bağlantı Başarıyla Red Edildi ✅**")
    }
    if (reason === "success") {
      client.channels.cache.get(destekKanal).send("**Destek Talebi Açan Sunucuya Bağlanıldı!\n❌ Kapatmak için `kapat` Yazabilirsiniz!**")
      chan.send(`**${message.author}, Destek Talebiniz Yetkili Tarafından Alındı!\nDestek Talebini Kapatmak İstiyorsan \`kapat\` Yazabilirsin!**`)
      isEnabled = true
      client.on("message", message => {
        function contact() {
          if (isEnabled === false) return
          if (message.author.id === client.user.id) return
          if (message.content.startsWith("kapat")) {
            message.channel.send("**❌ Arama Kapatıldı**")
            if (message.channel.id === chan.id)
              client.channels.cache.get(destekKanal).send("**❌ Arama Karşı Taraftan Kapatıldı!**")
            if (message.channel.id === destekKanal)
              chan.send("**Arama Karşı Taraftan Kapatıldı! ❌**")
            return (isEnabled = false)
          }
          if (message.channel.id === chan.id)
            client.channels.cache.get(destekKanal).send(`**${message.author.tag}**: ${message.content}`)
          if (message.channel.id === destekKanal) 
            chan.send(`**${message.author.tag}**: ${message.content}`)
        }
        contact(client);
      })
    }
  })
}
}