const discord = require('discord.js');
module.exports = {
    name: "rozet",
    aliases: ["rozetbilgi","rozetlerim"],
    execute: async (client, message, args, author, channel, guild) => {
    let user;

  if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }

    const member = message.guild.member(user);

    message.author || message.mentions.users.first()
    let flaggie = user.flags
    if(message.author.bot){ var bot = "✅" }
    if(!message.author.bot){ var bot = "❎" }
    if((flaggie.any('PARTNERED_SERVER_OWNER'))) {var partner = "✅"}
    if(!(flaggie.any('PARTNERED_SERVER_OWNER'))) {var partner = "❎"}
    if((flaggie.any('HOUSE_BRILLIANCE'))) {var brillance = "✅"}
    if(!(flaggie.any('HOUSE_BRILLIANCE'))) {var brillance = "❎"}
    if((flaggie.any('HOUSE_BRAVERY'))) {var bravery = "✅"}
    if(!(flaggie.any('HOUSE_BRAVERY'))) {var bravery = "❎"}
    if((flaggie.any('HOUSE_BALANCE'))) {var balance = "✅"}
    if(!(flaggie.any('HOUSE_BALANCE'))) {var balance = "❎"}
    if((flaggie.any('EARLY_SUPPORTER'))) {var early = "✅"}
    if(!(flaggie.any('EARLY_SUPPORTER'))) {var early = "❎"}
    if((flaggie.any('VERIFIED_DEVELOPER'))) {var devepoler = "✅"}
    if(!(flaggie.any('VERIFIED_DEVELOPER'))) {var devepoler = "❎"}
    const embed = new discord.MessageEmbed()
    .setThumbnail(user.avatarURL())
    .setTitle(`${user.username} Kişisinin Rozetleri!`)
    .addField(`Discord Partner`, `${partner}`)
    .addField(`HypeSquad Brillance:`, `${brillance}`)
    .addField('HypeSquad Bravery:', `${bravery}`)
    .addField('HypeSquad Balance:', `${balance}`)
    .addField('Nitro early:', `${early}`)
    .addField('Doğrulanmış bot sahibi:', `${devepoler}`)
    .addField('Bot mu:', `${bot}`)
    .setFooter(`Dark Winner Code`)
    .setColor('RANDOM')
    .setTimestamp()
    return message.channel.send(embed)
}}