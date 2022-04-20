const Discord = require('discord.js')

module.exports = {
  name: "unbanall",
  aliases: ["banremoveall"],
  execute: async (client, message, args, embed, author, channel, guild) => {
    const bans = await message.guild.fetchBans()

    for (const cross of bans.array()) {
        await message.guild.members.unban(cross.user.id)
        message.react('✅')
    }

}

}