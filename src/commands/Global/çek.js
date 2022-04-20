const Discord = require('discord.js')
const { MessageButton } = require('discord-buttons')
const config = require('../../../config.json')

module.exports = {
  name: "çek",
  aliases: ["çek"],
  execute: async (client, message, args, embed, author, channel, guild) => {

    const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!user.voice.channel) return;
    if (user.voice.channel.id === message.member.voice.channel.id) return;
    if (!message.member.voice.channel) return;

    const buton1 = new MessageButton()
        .setStyle('green')
        .setLabel('Evet')
        .setID('1')

    const buton2 = new MessageButton()
        .setStyle('red')
        .setLabel('Hayır')
        .setID('2')
try {
    const oldembed = new Discord.MessageEmbed().setColor('RED').setDescription(`${user}, ${message.author} seni <#${message.member.voice.channel.id}> sesli kanalına çekmek istiyor kabul ediyormusun?`)
    const newEmbeds = new Discord.MessageEmbed().setColor('GREEN').setDescription(`${config.emojis.yes} ${user} Adlı kullanıcı <@!${message.author.id}> tarafından <#${message.member.voice.channel.id}> kanalına çekildi`)
    let oldMsg = await message.channel.send(oldembed, {
        buttons: [buton1, buton2]
    })
    var filter = (button) => button.clicker.user.id != message.author.id;

    let collector = await oldMsg.createButtonCollector(filter, { time: 9999999 })

    collector.on("collect", async (button) => {

        if (button.id === '1') {
            if (message.member.id != button.clicker.member.id && !user.id) return button.reply.send(`Komutu sadece ${message.author} yani komutu kullanan kişi kullanabilir.`, true)
            await button.reply.defer()
            message.react(config.emojis.yes)            
            user.voice.setChannel(message.member.voice.channel.id)
            if (oldMsg) oldMsg.delete({ timeout: 5000 });
            if (oldMsg) await oldMsg.edit({
                embed: newEmbeds,
                buttons: null
            })
        }
    })

    const hayir = new Discord.MessageEmbed().setColor('RED').setDescription(`${config.emojis.no} ${user} Adlı kullanıcı <#${message.member.voice.channel.id}> kanalına gelmeyi reddetti.`)
    collector.on("collect", async (button) => {
        if (button.id === '2') {
            if (message.member.id != button.clicker.member.id) return button.reply.send(`Komutu sadece ${message.author} yani komutu kullanan kişi kullanabilir.`, true)
            await button.reply.defer()
            message.react(config.emojis.no)
            if (oldMsg) oldMsg.delete({ timeout: 5000 });
            if (oldMsg) await oldMsg.edit({
                embed: hayir,
                buttons: null
            })
        }
    })
} catch (error) {
    message.reply(`Bir hata oluştu`)
    console.log(error)}

}
}
