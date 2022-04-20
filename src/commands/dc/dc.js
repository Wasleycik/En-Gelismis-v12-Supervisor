const disbut = require ('discord-buttons')
const Discord = require ('discord.js')
module.exports = {
    name: "dc",
    aliases: [],
    enabled: true,
    guildOnly: false,
    execute: async (client, message, args,  author, channel, guild) => { 
    const buton = new disbut.MessageButton()
    .setEmoji("✔️")
    .setStyle("green")
    .setLabel("Cesaret")
    .setID("button_dc_c")
    const buton2 = new disbut.MessageButton()
    .setEmoji("✔️")
    .setStyle("green")
    .setID("button_dc_d")
    .setLabel("Doğruluk")
    const embed = new Discord.MessageEmbed()
    .setTitle('Friday')
    .setDescription('Doğruluk ve Cesaret Görevleri İstiyorsan Aşağıdaki Butonlara Tıkla!')
    .setColor('GREEN')
    .setFooter(client.user.username ,client.user.avatarURL())
    .setTimestamp()
    const buttonRow = new disbut.MessageActionRow()
    .addComponent(buton)
    .addComponent(buton2)
    message.channel.send({embed : embed , component : buttonRow})
}
}