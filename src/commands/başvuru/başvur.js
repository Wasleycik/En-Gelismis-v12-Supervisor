const Discord = require("discord.js");
const disbut = require("discord-buttons");
const db = require('quick.db');
const ayar = require('../../../config.json')
module.exports = {
    name: "başvuru",
    aliases: ["Başvur","başvur","başvuru"],
    enabled: true,
    guildOnly: false,
    execute: async (client, message, args, embed, author, channel, guild) => { 
    message.delete()
	const basvurdata = await db.get(`basvurbilgi`);
	if(basvurdata) return message.reply(`Başvurular geçici olarak durdurulmuştur.`);
	
	const bandata = await db.get(`ban.${message.author.id}`)
	if(bandata) return message.reply("Başvurulardan banlısın");
		
  let category = message.guild.channels.cache.get(ayar.ytv.basvurkategori);
            
  message.guild.channels.create(`${message.author.username}-başvur`, {
    parent: category,
    permissionOverwrites: [
        {id: ayar.ytv.everyoneid, deny: [('VIEW_CHANNEL'), ('SEND_MESSAGES')]},
		{id: ayar.ytv.adminrol, allow: [('VIEW_CHANNEL'), ('SEND_MESSAGES')]},
        {id: message.author.id, allow: [('VIEW_CHANNEL'), ('SEND_MESSAGES')]}]
    }).then( async baschannel => {

    
  const sorular = [
    '**Kayıt Yapmayı Biliyormusun?** evet/hayır',
    '**Partnerlik Yapmayı Biliyormusun?** evet/hayır',
    '**Günde Kaç Saat Aktifsiniz?** 1/24 saat',
    '**Başka Sunucuda Yetkili Oldunuz Mu?** evet/hayır',
    '**Discord Platformunda Kaç Senedir Bulunuyorsunuz?** yıl',
    '**Sunucuya hangi konuda destek vermeyi planlıyorunuz?** İnvite / Ses Ve Chat Aktfiliği / Partner Kasma',
    '**Neden Yetkili Olmak İstiyorsun?** cevabınız'
  ]
  let sayac = 0
  
  const filter = m => m.author.id === message.author.id
  const collector = new Discord.MessageCollector(baschannel, filter, {
    max: sorular.length,
    time: 2000 * 60
  })
  baschannel.send(`Merhaba ${message.author}, demek sunucumuzda yetkili olmak istiyorsun ama önce bazı soruları cevaplaman gerek başarılar\n:hourglass: Unutma!!! Tüm soruları cevaplaman için tam 2 Dakikan var hızlı ol :) `);
  baschannel.send(sorular[sayac++])
  collector.on('collect', m => {
    if(sayac < sorular.length){
      m.channel.send(sorular[sayac++])
    }
  })

  collector.on('end', collected => {
    if(!collected.size) return baschannel.send('**Süre Bitti!**\nBu kanal 5 saniye sonra silinecektir').then(
      setTimeout(function() {
        baschannel.delete();
         }, 5000));
    baschannel.send('**Başvurunuz Başarıyla iletilmiştir!**\nBu kanal 5 saniye sonra silinecektir').then(
      setTimeout(function() {
        baschannel.delete();
         }, 5000));
    let sayac = 0
    
    const onybuton = new disbut.MessageButton()
    .setLabel('Onayla')
    .setStyle('green')
    .setID('onay');
    const redbuton = new disbut.MessageButton()
    .setLabel('Reddet')
    .setStyle('red')
    .setID('red');
    let row = new disbut.MessageActionRow()
    .addComponents(onybuton, redbuton);

    const log = new Discord.MessageEmbed()
    .setAuthor(message.author.username + ` (${message.author.id})`, message.author.avatarURL({dynamic: true}))
	.setTitle('Yeni Başvuru Geldi!')
	.setDescription('Aşağıdaki butonlardan onay/red işlemlerini gercekleştirebilirsiniz')
    .setColor('BLUE')
    .addField('Başvuran Hakkında',[
      `**Kayıt Yapmayı Biliyormusun?: **\t\t${collected.map(m => m.content).slice(0,1)}`,
      `**Partnerlik Yapmayı Biliyormusun?: **\t\t${collected.map(m => m.content).slice(1,2)}`,
      `**Günde Kaç Saat Aktifsiniz?: **\t\t${collected.map(m => m.content).slice(2,3)}`,
      `**Başka Sunucuda Yetkili Oldunuz Mu?: **\t\t${collected.map(m => m.content).slice(3,4)}`,
	    `**Discord Platformunda Kaç Senedir Bulunuyorsunuz?: **\t\t${collected.map(m => m.content).slice(4,5)}`,
      `**Sunucuya hangi konuda destek vermeyi planlıyorunuz?: **\t\t${collected.map(m => m.content).slice(5,6)}`,
      `**Neden Yetkili Olmak İstiyorsun?: **\t\t${collected.map(m => m.content).slice(6,7)}`
    ])
    .setTimestamp()
    .setFooter('Wasley was here?', message.guild.iconURL());
    client.channels.cache.get(ayar.ytv.yetkililog).send({
		buttons: [onybuton, redbuton],
	    embed: log}).then(async m => {
      db.set(`basvur.${m.id}`, message.author.id);
    })

  })
  
})
}}