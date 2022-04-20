const { MessageEmbed } = require("discord.js");
const qdb = require("quick.db");
const config = require("../../../config.json");

module.exports = {
    name: "allmute",
    aliases: ["all-mute", "allmute"],
    execute: async (client, message, args, author, channel, guild) => {
 
    if(!message.guild) return;
    let embed = new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setFooter(config.bot.footer).setColor("RANDOM");


    if(!message.member.roles.cache.has(config.bot.owner)) return  
    if(message.author.id !== config.bot.owner)
    message.react(client.config.emoji.red);
    if(!message.member.voice.channel) return message.channel.send(embed.setDescription(`:x: Bir ses kanalında **bulunmuyorsun!**`)).then(x => x.delete({timeout: 10000}));
    let kanal = message.member.voice.channel.id
    let firstChannelMembers = message.guild.channels.cache.get(kanal).members.array().filter(x => x.id !== message.member.id);

    firstChannelMembers.forEach((x, i) => {
    setTimeout(async () => {
        x.voice.setMute(true).catch(e => { })
    }, i*200)
    })
   
    await message.channel.send(embed.setDescription(`**${message.guild.channels.cache.get(kanal).name}** Adlı kanaldaki \`${firstChannelMembers.length}\` üyeler susturuldu!`)).catch(e => { })
}}