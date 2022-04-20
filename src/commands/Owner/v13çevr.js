const Discord = require("discord.js");
const db = require('quick.db');
module.exports = {
  name: "v13",
  aliases: ["v13çevir"],
  enabled: true,
  guildOnly: false,
  permLevel: 0,
  execute: async (client, message, args, author, channel, guild) => {
 if (!message.member.hasPermission("ADMINISTRATOR")) return channel.send(embed.setDescription("Komutu kullanabilmek için geçerli yetkin olmalı"));
  let v12kod = args.slice(0).join(" ");
  if (!v12kod) {
    return message.channel.send(
      "Kodunu V13 Geçirmem İçin Kodunu Yazmalısın."
    );
  }
  if (v12kod.length > 1800) {
    return message.channel.send(
      "**Kodun 1800 Karakterden Fazla Bölerek Yazarmısın ?**"
    );
  }
  let v13kod = v12kod
    .split("channel.send(embed);")
    .join("channel.send({ embeds: [embed, embed2] });")
    .split("channel.send('Hello!', { embed });")
    .join("channel.send({ content: 'Hello!', embeds: [embed, embed2] });")
    .split("interaction.reply('Hello!', { ephemeral: true });")
    .join("interaction.reply({ content: 'Hello!', ephemeral: true });")
    .split("const client = new Client({ ws: { intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });")
    .join("const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });")
    .split("const collector = message.createReactionCollector(filter, { time: 15000 });")
    .join("const collector = message.createReactionCollector({ filter, time: 15000 });")
    .split("const client = new Discord.Client({ disableMentions: 'everyone' });")
    .join("const client = new Discord.Client({ allowedMentions: { parse: ['users', 'roles'], repliedUser: true } });")
    .split("channel.send('content', { reply: 'sayi' });")
    .join("channel.send({ content: 'content', reply: { messageReference: 'sayi' }});")
    .split("message.reply('content')")
    .join("message.reply({ content: 'content', allowedMentions: { repliedUser: false }})")
    .split("permissions.has('SEND_MESSAGES')")
    .join("permissions.has(Permissions.FLAGS.SEND_MESSAGES)")
    .split("if(channel.type === 'text') channel.send('Content');")
    .join("if(channel.type === 'GUILD_TEXT') channel.send('Content');")
    .split("client.fetchApplication().then(application => console.log(application.name))")
    .join("console.log(client.application.name);")
    .split("client.generateInvite([Permissions.FLAGS.SEND_MESSAGES]);")
    .join("client.generateInvite({ scopes: ['bot'], permissions: [Permissions.FLAGS.SEND_MESSAGES] })")
    .split("client.user.setPresence({ activity: { name: 'with discord.js' } });")
    .join("client.user.setPresence({ activities: [{ name: 'with discord.js' }] });")
    .split("guild.addMember(user, { accessToken: token });")
    .join("guild.members.add(user, { accessToken: token });")
    .split("guild.fetchBan(user);")
    .join("guild.bans.fetch(user);")
    .split("guild.fetchBans();")
    .join("guild.bans.fetch();")
    .split("guild.fetchInvites();")
    .join("guild.invites.fetch();")
    .split("guild.member(user);")
    .join("guild.members.cache.get(user.id)")
    .split("console.log(guild.owner);")
    .join("guild.fetchOwner().then(console.log);")
    .split("guild.voice")
    .join("guild.me.voice")
    .split("channel.createOverwrite(user, { VIEW_CHANNEL: false });")
    .join("channel.permissionOverwrites.create(user, { VIEW_CHANNEL: false });")
    .split("channel.updateOverwrite(user, { VIEW_CHANNEL: false });")
    .join("channel.permissionOverwrites.edit(user, { VIEW_CHANNEL: false });")
    .split("member.ban('reason')")
    .join("member.ban({ reason: 'reason' })")
    .split("member.hasPermission(Permissions.FLAGS.SEND_MESSAGES);")
    .join("member.permissions.has(Permissions.FLAGS.SEND_MESSAGES);")
    .split("guild.members.ban('', 'reason')")
    .join("guild.members.ban('', { reason: 'reason' })")
    .split("message.delete({ timeout: 10000 });")
    .join("setTimeout(() => message.delete(), 10000);")
    .split("channel.messages.delete('123456789012345678', { timeout: 10000 });")
    .join("setTimeout(() => channel.messages.delete('123456789012345678'), 10000);")
    .split("shard.respawn(500, 30000);")
    .join("shard.respawn({ delay: 500, timeout: 30000 });")
    .split("client.shard.respawnAll(5000, 500, 30000);")
    .join("client.shard.respawnAll({ shardDelay: 5000, respawnDelay: 500, timeout: 30000 });")


  if (v12kod == v13kod) {
    return message.channel.send("**Bu Kod Zaten v13 İle Uyumlu**");
  }

    
    const embed = new Discord.MessageEmbed()
    .setColor("BLURPLE")
    .addField(
      ` V13 Kod:`,
      `   \`\`\`
${v13kod}\`\`\` `
    )


 message.channel.send(embed);
  message.author.send(   ` V13 Kod:`,
      `   \`\`\`
${v13kod}\`\`\` `)
  db.add(`çevrilenkod`, 1);


  
}}