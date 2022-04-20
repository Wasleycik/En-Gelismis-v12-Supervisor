const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "rol-mesaj",
  aliases: ["rolmesaj"],
  enabled: true,
  guildOnly: false,
  permLevel: 0,
  execute: async (client, message, args, embed, author, channel, guild) => {
 if (!message.member.hasPermission("ADMINISTRATOR")) return channel.send(embed.setDescription("Yetkin Yok Aga Kurcalama Banı Yersin"));
    const role =
        message.mentions.roles.first() ||
        message.guild.roles.cache.get(args[0]);

    const mesaj = args.slice(1).join(" ");

    if (!role)
        return message.channel.send(
            `Bir rol etiketlemelisin veya ID'sini yazmalısın!`
        );

    if (!mesaj) return message.channel.send(`Bir mesaj yazmalısın!`);

    role.members.forEach(async (member) => {
        member.send(mesaj).catch((x) => {
            console.log(`${member.user.tag}, bu üyelere mesaj gönderemedim!`);
        });
    });

    const members = message.guild.roles.cache
        .find((roles) => roles.id === role.id)
        .members.map((üyeler) => `<@!${üyeler.user.id}>`)
        .join("\n");

    const sleax = await message.channel.send(`Üyelere mesaj gönderiliyor!`);

    setTimeout(() => {
        sleax.edit(
            `Mesajlar gönderildi! \n\nHangi üyelere gönderildi? \n${members}`
        );
    }, 5000);
}}