const Discord = require('discord.js')
const config = require('../../../config.json');
const { MessageButton } = require('discord-buttons')


module.exports = {
  name: "nuke2",
  aliases: ["nuke2"],
  execute: async (client, message, args, author, channel, guild) => {
  const embed = new Discord.MessageEmbed().setFooter(config.bot.footer).setColor("YELLOW").setTimestamp()


  if (!message.member.hasPermission("ADMİNİSTRATOR")) return await message.channel.send('Bu komudu kullanbilmek için **Kanalları Yönet** yetkisine sahip olmalısın!');
  const a = new MessageButton()
    .setStyle('green')
    .setLabel('Evet')
    .setID('e')
  const x = new MessageButton()
    .setStyle('red')
    .setLabel('Hayır')
    .setID('h')

  client.on("clickButton", async (button) => {
    if (button.id == "e") {
      if (button.clicker.member.id != message.author.id) return;

      try {
        await button.channel.clone().then(channel => {
          channel.setPosition(button.channel.position)

        })
        return button.channel.delete()
      } catch (error) {
        console.log(error)
        return button.reply.send(`Bir hata ile karşılaşıldı lütfen konsola bak!`, true)
      }
    }
  })


  client.on('clickButton', async button => {
    if (button.id === "h") {
      if (message.member.id != button.clicker.member.id) return;
      if (NewMessage) NewMessage.delete();
      await button.reply.send(`Nuke'leme işlemi iptal edildi!`, { ephemeral: false })

    }
  })

  let NewMessage = await message.channel.send('Kanalı silip yeniden oluşturacağım, bunu yapmak istediğime eminmisin?', {
    buttons: [a, x]
  })

}}
  
 