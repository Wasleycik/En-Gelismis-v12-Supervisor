const Discord = require("discord.js");

module.exports = {
  name: "vine",
  aliases: ["vine"],
  execute: async (client, message, args, embed, author, channel, guild) => {
  if (!message.guild) {
    const mesaf = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Bu Komut Özel Mesajlarda Kullanılamaz Kusura Bakma Reis.**')
    return message.author.send(mesaf); }

    let replies = ["https://www.tercihiniyap.net/upload/media/posts/2017-07/29/tarihin-en-komik-sosyal-medya-paylasimlari_1501352931-b.jpg", "https://www.tercihiniyap.net/upload/media/entries/2017-07/29/3172-5-c652715ff4954cb234e61d366cae8536.jpg", "https://www.tercihiniyap.net/upload/media/entries/2017-07/29/3172-7-c652715ff4954cb234e61d366cae8536.jpg", "http://d.ozgurkocaeli.com.tr/gallery/700_2.jpg", "https://guzelresimler.info/content/photos/6009/bi/komik-paylasimlar-56a411f11c046.jpg", "http://img7.mynet.com/galeri/2015/09/21/045010176/5527583-600x653.jpg", "http://www.yenimeram.com.tr/wp-content/uploads/2015/10/31/ekim-ayinin-en-komik-sosyal-medya-capsleri-28.jpg", "https://images.bursadabugun.com/galeriler/2016/04/06/30374-interneti-sallayan-cezmi-kalorifer-paylasimlari-57053310a240b.jpg", "https://cdn.bolgegundem.com/d/gallery/91_1.jpg", "http://cdn.cezmikalorifer.com/wp-content/uploads/2018/03/1.jpg", "https://images.bursadabugun.com/galeriler/2016/04/06/30374-interneti-sallayan-cezmi-kalorifer-paylasimlari-5705330839c5b.jpg", "https://www.yasamsifreleri.com/wp-content/uploads/2017/04/Komik-Sosyal-Medya-Payla%C5%9F%C4%B1mlar%C4%B1.jpg", "https://www.kamupersoneli.net/images/album/1_12.png", "https://scontent-sea1-1.cdninstagram.com/vp/081400db1520e001d4df6634a6b1a900/5C4F0FBA/t51.2885-15/e35/19226965_1856561837938983_6380411949590511616_n.jpg?se=8&ig_cache_key=MTUzOTk1OTE0Mzc1NDI1ODI2NQ%3D%3D.2", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNNrbRDCfBf69ytCtU8nTX41UgPBU3FlHLsXzZfXNfnYBIoj5X0Q", "http://img7.mynet.com/galeri/2016/05/05/101708530/7061825-406x330.jpg", "https://images.bursadabugun.com/galeriler/2018/01/16/44965-efsane-haline-gelmis-komik-tweetler-5a5dece7689a6.jpg", "https://cdn.listetek.com/819f85fee8af427f923a58a4492c24bc", "https://www.muzurca.com/wp-content/uploads/2018/06/En-Komik-Twitter-Payla%C5%9F%C4%B1mlar%C4%B1-Muzurca-18.jpg", "http://img7.mynet.com/galeri/2015/09/21/044943548/7655796-600x788.jpg", "http://img7.mynet.com/galeri/2015/04/29/041826296/10-528x512.jpg", "https://i.pinimg.com/originals/ea/cb/2c/eacb2ce0401a7ed6fd4a3b8b7fd30889.jpg", "https://www.sonhaberler.com/images/album/0x0-interneti-sallayan-komik-paylasimlar-1505753992468.png", "https://images.bursadabugun.com/galeriler/2016/04/06/30374-interneti-sallayan-cezmi-kalorifer-paylasimlari-5705330f03bb1.jpg", "http://www.bilgimio.com/wp-content/uploads/ka3.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgwYb4RTN6qAuzQXuIQr6GtgQC9RlTk3lzBlt8IfY4zY7tQB7W", "https://img-s1.onedio.com/id-572ba0d014f61d1e65820a86/rev-0/w-635/listing/f-jpg-webp/s-92b4d4689583456cb2da5bff0a738d43f3f71a78.webp", "https://scontent-sea1-1.cdninstagram.com/vp/1b9603bd2fcf94019f82e9792f8fc05f/5C2724B3/t51.2885-15/e35/14350579_911416238963888_622736164_n.jpg?ig_cache_key=MTM0MDgyODEyNTk4MjMyODU0OQ%3D%3D.2", "http://d.kamuhabermerkezi.com/gallery/13216_3.jpg", "https://d.neoldu.com/gallery/3427_27.jpg"];
//İsterseniz Daha Çok Ekleye Bilirsiniz.

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.MessageEmbed()
        .setTitle("Komik Ve Eğlenceli Paylaşımlar:")
        .setColor("RANDOM")
        .setFooter(`${message.author.username} Furkan Random Komik Fotoraflar `, message.author.avatarURL )
        .setImage(replies[result]);

    message.channel.send(gifembed);
}}