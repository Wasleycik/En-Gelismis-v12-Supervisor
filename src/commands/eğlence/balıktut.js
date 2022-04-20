const Discord = require("discord.js");
const client = new Discord.Client();

module.exports = {
  
    name: 'balıktut',
    enabled: true,
    guildOnly: false,
    aliases: ["balıktut"],
    execute: async (client, message, args,  author, channel, guild ) => {

message.channel.send("Balık Tuttun Balığı Çekiyorsun..").then(message => {

var mrk = [

      "Sazan Tuttun! :fish:",
      "Köpek Balığı Tuttun İyi Para Eder Sat Sat :D",
      "Uskumru Tuttun! :fish:",
      "Mezgit Tuttun! Havyarıda Var hee ;) :fish:",
      "Japon Balığı Tuttun Yemeyi Düşünmüyorsun Herhalde?",
      "Hamsi Tuttun! :fish:",
      "Levrek Tuttun! :fish:",
      "Hiçbirşey Tutamadın Maalesef! :wastebasket:",
      "Alabalık Tuttun! :fish:",
      "Maalesef Balık Oltadan Kaçtı! :wastebasket:",
      "İstavrit Tuttun! :fish:"

    ];

    var mrk = mrk[Math.floor(Math.random() * mrk.length)];
    message.edit(`${mrk}`);
  });
}}