const { MessageEmbed } = require("discord.js");
const qdb = require("quick.db");
const config = require("../../../config.json");

module.exports = {
  name: "all-unmute",
  aliases: ["allunmute"],
  enabled: true,
  guildOnly: false,
  permLevel: 4,
  execute: async (client, message, args, author, channel, guild) => {
 
    if(!message.guild) return;
    let embed = new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setFooter(config.bot.footer).setColor("RANDOM");

   
    if(!message.member.roles.cache.has(config.bot.owner))
    if(message.author.id !== config.bot.owner)
    if(!message.member.roles.cache.has(config.bot.owner)) return  message.react(":x:");

    if(!message.member.voice.channel)return message.channel.send(embed.setDescription(`:x: Bir ses kanalında **bulunmuyorsun!**`)).then(x => x.delete({timeout: 10000}));


    let kanal = message.member.voice.channel.id

    if(!kanal) return message.channel.send(embed.setDescription(`Bir ses kanalında **bulunmuyorsun!**`))
    if(!message.guild.channels.cache.get(kanal).members.array().filter(x => x.id !== message.member.id).size <= 0) return message.channel.send(embed.setDescription(`:x: Bulunduğun kanalda senden başkası **bulunmuyor!**`)).catch(e => { })

    let firstChannelMembers = message.guild.channels.cache.get(kanal).members.array().filter(x => x.id !== message.member.id);

    firstChannelMembers.forEach((x, i) => {
    setTimeout(async () => {
        x.voice.setMute(false)
    }, i*200)
    })
   
  await message.channel.send(embed.setDescription(`**${message.guild.channels.cache.get(kanal).name}** Adlı kanaldaki \`${firstChannelMembers.length}\` üyelerin susturulmasını kaldırdım!`)).catch(e => { })
  message.react("✅")
}}
