const { MessageEmbed } = require('discord.js');
const config = require("../../../config.json")

module.exports = {
    name: "link",
    aliases: ['sunucudaveti','sunucu-daveti','sunuculink','sunucu-link'],
    owner: true,
    execute: async (client, message, args, embed, author, channel, guild) => {

    
    message.delete()
    message.channel.send(config.bot.guildVanityURL);

}}