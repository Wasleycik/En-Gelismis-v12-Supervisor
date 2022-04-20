const Discord = require('discord.js');
const data = require('quick.db');

module.exports = {
    name: "fal",
    aliases: ["falın"],
    execute: async (client, message, args, embed, author, channel, guild) => {
if(await data.fetch(`slm.${message.author.id}.${message.guild.id}.fal`)) return message.channel.send(new Discord.MessageEmbed().setColor('#00001').setDescription(`**10 saniyenin altında hızlı kullanamazsın!**`));
var gifler = ['```Hayatında hiç evlenmiceksin, Evliliğe karşı çıkacaksın.```', '```Bak görüyorum, hem de çok iyi görüyorum şükürler olsun Allah’ım bana bunları gösterdiğin için. Havuç ye göze çok iyi geliyor.```', '```Çevrende birisi var, sana dolanıp durur, üç vakte kadar gelip seni babandan isteyecek, çok mutlu olacaksınız, üç çocuğunuz olacak.```', '```Papatya fallarının her zaman tek bir sonucu vardır; elinize bakarsanız ve size kalan tek şeyin bir sap olduğunu görürsünüz.```', '```Kısa bir süre içinde beklediğin bir yerden iyi bir haber alacaksın.```', '```Sarışın mı desem, esmer mi desem, kumrala da benziyor, yok yok demeyim en iyisi.```'];
let resimler = gifler[Math.floor(Math.random() * gifler.length)];

message.channel.send(new Discord.MessageEmbed().setTitle(`${message.author.username} Bahtına bakalım 🤓`)
.setDescription(resimler).setColor('#cd0e63'));
message.delete({timeout:10000});

data.set(`slm.${message.author.id}.${message.guild.id}.fal`, 'Code World');
setTimeout(() => {
data.delete(`slm.${message.author.id}.${message.guild.id}.fal`)
}, 10000);

}
}