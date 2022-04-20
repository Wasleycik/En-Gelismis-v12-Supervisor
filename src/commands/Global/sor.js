const Discord = require("discord.js");
const get = require("request")
module.exports = {
    name: "hesperos",
    aliases:  ['Hesperos', 'was', 'Wasley'],
    execute: async (client, message, args, embed, author, channel, guild) => {
let soru = args.join(' ');
if(!soru) return message.reply(' Reis Sohbet Edeceksen Birşeyler Yaz Bari :)')
let encodedsoru = encodeURI(soru)
get(`https://api.codare.fun/sor/${encodedsoru}`, async function (err, resp, body) { 
body = JSON.parse(body); 
if(err) return message.channel.send('**Hata oluştu Eror Verdim Yapma Bi Daha**')
message.channel.send(body.cevap)
    }) 
}}