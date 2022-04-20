const Discord = require('discord.js')
const { MessageButton } = require('discord-buttons')
const config = require('../../../config.json')

module.exports = {
    name: "kilit",
    aliases: [],
    execute: async (client, message, args, embed, author, channel, guild) => {
 
            if (!message.member.hasPermission('MANAGE_CHANNELS') && !message.member.hasPermission("ADMINISTRATOR")) return   message.channel.send("Komutu kullanabilmek için geçerli yetkin olmalı").then(x => x.delete({timeout: 10000}));

    var everyone = message.guild.roles.cache.find(a => a.name === "@everyone");
    var permObjesi = {};
    var everPermleri = message.channel.permissionOverwrites.get(everyone.id);

    const buton1 = new MessageButton()
        .setStyle('green')
        .setLabel('Evet')
        .setID('1')

    const buton2 = new MessageButton()
        .setStyle('red')
        .setLabel('Hayır')
        .setID('2')

    const buton3 = new MessageButton()
        .setStyle('blurple')
        .setLabel('Kanalı Aç')
        .setID('3')
try{
    const oldembed = new Discord.MessageEmbed().setColor('RED').setDescription(`${message.author} kanalı kilitlemek istediğine eminmisin?`)
    const newEmbeds = new Discord.MessageEmbed().setColor('GREEN').setDescription(`${config.emojis.yes} <@!${message.author.id}> tarafından <#${message.channel.id}> kanalı kilitlendi.\n Açmak ister isen aşağıdaki butondan açabilirsin.`)
    let oldMsg = await message.channel.send(oldembed, {
        buttons: [buton1, buton2]
    })
    var filter = (button) => button.clicker.user.id === message.author.id;

    let collector = await oldMsg.createButtonCollector(filter, { time: 9999999 })

    collector.on("collect", async (button) => {

        if (button.id === '1') {
            if (message.member.id != button.clicker.member.id && !user.id) return button.reply.send(`Komutu sadece ${message.author} yani komutu kullanan kişi kullanabilir.`, true)
            await button.reply.defer()
            message.react(config.emojis.yes)
            permObjesi["SEND_MESSAGES"] = false;
            await  message.channel.createOverwrite(everyone, permObjesi);
            if (oldMsg) await oldMsg.edit({
                embed: newEmbeds,
                buttons: buton3
            })
        }
    })

    const hayir = new Discord.MessageEmbed().setColor('RED').setDescription(`${config.emojis.no} ${message.author} tarafından kanal kilitlenme reddedildi. `)
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
    const kilitac = new Discord.MessageEmbed().setColor('GREEN').setDescription(`${config.emojis.yes} Kanalın kilidi açıldı.`)
    collector.on("collect", async (button) => {
        if (button.id === '3') {
            if (message.member.id != button.clicker.member.id) return button.reply.send(`Komutu sadece ${message.author} yani komutu kullanan kişi kullanabilir.`, true)
            await button.reply.defer()
            permObjesi["SEND_MESSAGES"] = true;
            await  message.channel.createOverwrite(everyone, permObjesi);
            if (oldMsg) oldMsg.delete({ timeout: 5000 });
            if (oldMsg) await oldMsg.edit({
                embed: kilitac,
                buttons: null
            })
        }
    })

} catch (error) {
    message.reply(`Bir hata oluştu`)
    console.log(error)}

}

}