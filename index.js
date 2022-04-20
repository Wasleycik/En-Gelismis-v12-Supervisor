const { Client, MessageEmbed, Collection } = require("discord.js");
const client = (global.client = new Client({ fetchAllMembers: true }));
const { readdir } = require("fs");
const config = require("./config.json");
const Discord = require('discord.js');
const db = require("quick.db");
const moment = require('moment');
const ms = require("ms");
require("moment-duration-format");
const buttons = require('discord-buttons');
buttons(client)
const commands = client.commands = new Collection();
const aliases = client.aliases = new Collection();
client.cooldown = new Map();
client.commandblocked = [];

let qdb = require("quick.db");
let sunucuayarDB = new qdb.table("sunucuayar");
let rolAyarlarDB = new qdb.table("rolayarlar");
let prefixDB = new qdb.table("prefix");
let profilDB = new qdb.table("profil");
let guvenliKisiDB = new qdb.table("guvenlikisi");
let sesdb = new qdb.table("stats");


require("./src/helpers/function")(client);

readdir("./src/commands/", (err, files) => {
    if (err) console.error(err)
    files.forEach(f => {
        readdir("./src/commands/" + f, (err2, files2) => {
            if (err2) console.log(err2)
            files2.forEach(file => {
                let prop = require(`./src/commands/${f}/` + file);
                console.log(`[Wasley-Commands] ${prop.name} yüklendi!`);
                commands.set(prop.name, prop);
                prop.aliases.forEach(alias => {
                    aliases.set(alias, prop.name);
                });
            });
        });
    });
});

readdir("./src/events", (err, files) => {
    if (err) return console.error(err);
    files.filter((file) => file.endsWith(".js")).forEach((file) => {
        let prop = require(`./src/events/${file}`);
        if (!prop.conf) return;
        client.on(prop.conf.name, prop)
        console.log(`[Wasley-Events] ${prop.conf.name} yüklendi!`);
    });
});



client.on("message", async message => {
    if (message.content === "!buton-rol" && message.author.id === config.bot.owner) {
        const Giveaway = new buttons.MessageButton()
            .setStyle("green")
            .setLabel("🎁 Çekiliş Katılımcısı")
            .setID("Giveaway");
        const Activity = new buttons.MessageButton()
            .setStyle("green")
            .setLabel("🎉 Etkinlik Katılımcısı")
            .setID("Activity");

        message.channel.send(`Merhaba!
 
Çekiliş Katılımcısı alarak **nitro, spotify, netflix ve benzeri çekilişlere katılıp ödül sahibi** olabilirsiniz.

Aşağıda bulunan butonlardan **Etkinlik Katılımcısı alarak konserlerimizden, oyunlarımızdan, ve etkinliklerimizden** faydalanabilirsiniz.

\`NOT:\` Kayıtlı , kayıtsız olarak hepiniz bu kanalı görebilmektesiniz. Bu sunucumuzda everyone here atılmayacağından dolayı kesinlikle rollerinizi almayı unutmayın.
`,
            {
                buttons: [Giveaway, Activity]
            });
    }



    if (message.content === "!buton-bilgi" && message.author.id === config.bot.owner) {

        const one = new buttons.MessageButton()
            .setStyle("gray")
            .setLabel("I")
            .setID("one");

        const two = new buttons.MessageButton()
            .setStyle("gray")
            .setLabel("II")
            .setID("two");

        const three = new buttons.MessageButton()
            .setStyle("gray")
            .setLabel("III")
            .setID("three");

        const four = new buttons.MessageButton()
            .setStyle("gray")
            .setLabel("IV")
            .setID("four");

        const five = new buttons.MessageButton()
            .setStyle("gray")
            .setLabel("V")
            .setID("five");
        message.channel.send("**Merhaba!** \n\n Aşşağıdaki butonlarla etkileşime girerek **sunucumuzdaki durumunuz hakkında bilgi edinebilirsiniz.** \n\n **1 -** `Sunucumuza daha önceden hangi isimlerle kayıt olduğunuzu kontrol edersiniz.` \n **2 -** `Sunucumuza daha önceden kayıt olup olmadığınızı kontrol edersiniz.` \n **3 -** `Sunucumuzda daha önceden ceza alıp almadığınızı kontrol edersiniz.` \n **4 -** `Sunucumuzdaki rollerinizi kontrol edersiniz.` \n **5 -** `Sunucumuza ne zaman katıldığınızı kontrol edersiniz.`", { buttons: [one, two, three, four, five] })
    }
});


client.login(config.bot.token).then(x => console.log(`Bot ${client.user.username} olarak giriş yaptı!`)).catch(err => console.log(`Bot Giriş yapamadı sebep: ${err}`));

client.on('message', async message => {
if (message.content === 'Wasley!fakekatıl') { 
  client.emit('guildMemberAdd', message.member || await message.guild.fetchMember(message.author));
    }
});

////////////////// snipe

client.on("messageDelete", async (message) => {
    if (message.channel.type === "dm" || !message.guild || message.author.bot) return;
    let snipe = {
        mesaj: message.content,
        mesajyazan: message.author.id,
        ytarihi: message.createdTimestamp,
        starihi: Date.now(),
        kanal: message.channel.id
    }
    await db.set(`snipe.${message.guild.id}`, snipe)
});



/////////////////////////////////// sa as sistemi///////// https://discord.gg/hBRHeTssX5

client.on("message", async message => {
  let data = ["sa", "Sa", "sA", "SA", "sea", "Sea", "SEA"];
  if (data.includes(message.content)) {
    message.reply("As Kardeşim Hoş Geldin Sefa Getirdin!");
  }
});

client.on("message", async message => {
  let data = ["aile", "Aile", "family", "aile herşeydir dostum", "ayle", "Aile herşeydir dostum"];
  if (data.includes(message.content)) {
    message.reply("Aile Herşeydir Dostum!");
  }
});

client.on("message", async message => {
  let data = [
    "gnydn",
    "günaydın",
    "Günaydın",
    "gunaydin",
    "gunaydın",
    "Gunaydın",
    "Gunaydin"
  ];
  if (data.includes(message.content)) {
    message.reply("Sanada Günaydın Canım. 😯🌄🌅");
  }
});

client.on("message", async message => {
  let data = [
    "iyi geceler",
    "iyi akşamlar",
    "iyi gclr",
    "ii geceler",
    "iyi aksamlar",
    "Iyi Geceler",
    "İyi geceler",
    "İyi akşamlar"
  ];
  if (data.includes(message.content)) {
    message.reply("Saol Knka Sanada İyi Geceler. 🌙🌜");
  }
});

/////////////////////////////////////////////// stat///////  https://discord.gg/hBRHeTssX5



//////////////////////////// ddos koruma /////////////////////////// https://discord.gg/hBRHeTssX5

client.on('message', msg => {

if(client.ping > 550) {

            let bölgeler = ['singapore', 'eu-central', 'india', 'us-central', 'london',
            'eu-west', 'amsterdam', 'brazil', 'us-west', 'hongkong', 
            'us-south', 'southafrica', 'us-east', 'sydney', 'frankfurt',
            'russia']
           let yenibölge = bölgeler[Math.floor(Math.random() * bölgeler.length)]
           let sChannel = msg.guild.channels.find(c => c.name === "saldırı-koruma")

           sChannel.send(`⚠UYARI⚠\n \n🔸 Sunucunun Pingi Yükseldiğinden Dolayı Bölge Değiştirildi!\n🔸 Yeni Bölge: ${yenibölge} `+ client.ping)
           msg.guild.setRegion(yenibölge)
           .then(g => console.log("🌍 Bölge:" + g.region))
           .then(g => msg.channel.send("✅ Bölge **"+ g.region  + " Olarak Değiştirildi! 🏡"))
           .then(msg.reply('✅ Bölge Değiştirildi! ')) 
           .catch(console.error);
}});

//////////////////////////başvuru sistemi///////////////////////////// https://discord.gg/hBRHeTssX5
const disbut = require('discord-buttons');
 
client.on('clickButton', async (button) => {

  const onybuton = new disbut.MessageButton()
    .setLabel('Onaylandı')
    .setStyle('green')
    .setID('ony')
    .setDisabled();

    const data = await db.get(`basvur.${button.message.id}`)
    if(!data) return;
    const basvuruGonderenID = data;
    const onaymsj = new Discord.MessageEmbed()
    .setDescription(`**Tebrikler Başvurunuz Onaylandı**
                    
                    Başvuru Yapan : <@${basvuruGonderenID}>  
                    Başvuruyu Kabul Eden : \`${button.clicker.user.tag}\`  

                    Hayırlı Olsun Sende Artık Ailemizin Yetkili Bir Üyesisin :)`)
    .setColor('RANDOM');




  if(button.id === 'onay'){
    button.reply.defer()
	const isimdes = client.users.cache.get(basvuruGonderenID);
    await button.message.edit(`<@${basvuruGonderenID}> adlı kişinin, Başvurusu \`${button.clicker.user.tag}\` isimli yetkili tarafından Kabul edildi`, onybuton)
    await client.channels.cache.get(config.ytv.onayred).send(`<@${basvuruGonderenID}>,`, onaymsj)
    await client.guilds.cache.get(config.Guild.GuildID).members.cache.get(basvuruGonderenID).roles.add(config.ytv.yetkiverilecek)
	isimdes.send('Hey Selam! Ben Wasley :wave: \nYaptığın yetkili başvurusu onaylandı öncelikle tebrik ederim artık yetkili ekibimizdensin. :partying_face: \nAncak bazı görevlerin olucak alta bunları anlatımcam iyi dinle olur mu :slight_smile: \n\n\n **1 -** <#933735081254748232> Kanalında Aktif Bir Şekilde Çalışmak \nKayıt etme Komutu = (erkek).e @etiket İsim  Yaş (kadın).k @etiket İsim  Yaş \n**2 -** Bildiğin Hatalar Varsa Yardım Edebilirsin.\n\n**3 -** <#880370182592286730> Kanalını Oku Kurala Bile Uymadığın Zaman sende üyeler gibi ceza yiyebilirsin.\n\n**4 -** <#880370182592286730> Kanalınıda Okumayı Tavsiye Ederiz Aynı Şekilde Uymassan Yetkin Gidebilir vb.\n\n**5 **- <#880423611633111080> Her Etiket Geldiğinde Bakman Senin İçin İyi Olabilir Arada Toplantılar Olabilir Eğer Zorunlu olan Toplantılara Gelmezsen Destek Ekibinden Atılırsın.\n\n\n **Evet ama hep böyle sıkı yönetim mi var hep çalışmak mı var?**\nTabikide hayır. Arasıra yetkili ekibimiz arasında oynadığımız eğlenceli vakitlerde oluyor, birlikte oyunlar oynar şakalaşırız :) \n\n **Gelelim Ektiğimizi Biçmeye**\nAktif ve Düzenli Çalışmanın ardından tabikide ödüller var eğer kendini gösterirsen sırasıyla yetkin yükselicek ve daha üst konumlarda görev alıcaksın. \n O zaman Şimdiden kolay gelsin :) Wasley Yetkili Ekibine Hoş Geldin :heart:')
  }
  if(button.id === 'red'){
    button.reply.defer()


    const sorular = [
      '**Reddedilme Sebebi?** <cevap vermek için 3 dakikan var>'
    ]
    let sayac = 0
    
    const filter = m => m.author.id === button.clicker.user.id
    const collector = new Discord.MessageCollector(button.channel, filter, {
      max: sorular.length,
      time: 3000 * 60
    })

    button.channel.send(sorular[sayac++])
    collector.on('collect', m => {
      if(sayac < sorular.length){
        m.channel.send(sorular[sayac++])
      }
    })


    collector.on('end', collected => {
      if(!collected.size) return button.channel.send('**Süre Bitti!**');
      button.channel.send('**Başvurunuz Başarıyla Reddedildi.**');

           
    const redbuton = new disbut.MessageButton()
    .setLabel('Reddedildi')
    .setStyle('red')
    .setID('red')
    .setDisabled();

    const redmsg = new Discord.MessageEmbed()
    .setAuthor('Wasley was here?', button.message.guild.iconURL({dynamic: true, type: 'gif', size: 1024}))
    .setDescription(`<@${basvuruGonderenID}> Başvurunuz, \`${collected.map(m => m.content).slice(0,1)}\` nedeniyle ${button.clicker.user} tarafından Reddedildi`)
    .setColor('RED');

     button.message.edit(`<@${basvuruGonderenID}> adlı kişinin, Başvurusu, \`${collected.map(m => m.content).slice(0,1)}\` Sebebiyle, \`${button.clicker.user.tag}\` isimli yetkili tarafından Başarıyla Reddedildi`, redbuton)
     client.channels.cache.get(config.ytv.onayred).send(`<@${basvuruGonderenID}>,`, redmsg)
          })

    
  }
  db.delete(`basvuru.${button.message.id}`)

});

///////////////////////////// link koruma////////////////////////// https://discord.gg/hBRHeTssX5
client.on("message", async (msg) => {
  if (!msg.guild || msg.author.id === client.user.id) return;
  let reklamKoruma = await sunucuayarDB.get(`sunucuayar.reklam_koruma`);

  if (reklamKoruma) {
    try {
      const kelime = ["discord.gg", "discord.me", "discordapp.com", "discord.io", "discord.tk"];
      if (kelime.some(reklam => msg.content.includes(reklam))) {
        if (msg.member.permissions.has(8)) return
        msg.channel.send(`Hey ${msg.author}, sunucuda link paylaşamazsın!`)
        if (msg.deletable) msg.delete({
          timeout: 200
        }).catch(err => {});
      } else {
        let links = msg.content.match(/(http[s]?:\/\/)(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,6}?\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/gi);
        if (!links) return;
        if (msg.member.permissions.has(8)) return
        if (msg.deletable) msg.delete({
          timeout: 200
        }).catch(err => {});
        msg.channel.send(`Hey ${msg.author}, sunucuda link paylaşamazsın!`).then(x => x.delete({
          timeout: 5000
        }))
      }
    } catch (err) {}

  }
})

client.on("messageUpdate", async (oldMsg, newMsg) => {
  if (!newMsg.guild || newMsg.author.id === client.user.id) return;
  let reklamKoruma = await sunucuayarDB.get(`sunucuayar.reklam_koruma`);
  if (reklamKoruma) {
    try {
      if (newMsg.member.permissions.has(8)) return
      const kelime = ["discord.gg", "discord.me", "discordapp.com", "discord.io", "discord.tk"];
      if (kelime.some(reklam => newMsg.content.includes(reklam))) {
        newMsg.channel.send(`Hey ${newMsg.author}, sunucuda link paylaşamazsın!`)
        if (newMsg.deletable) newMsg.delete({
          timeout: 200
        }).catch(err => {});
      } else {
        let links = newMsg.content.match(/(http[s]?:\/\/)(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,6}?\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/gi);
        if (!links) return;
        if (newMsg.deletable) newMsg.delete({
          timeout: 200
        }).catch(err => {});
        newMsg.channel.send(`Hey ${newMsg.author}, sunucuda link paylaşamazsın!`).then(x => x.delete({
          timeout: 5000
        }))
      }
    } catch (err) {}

  }
});


////////////////////////////küfür koruma//////////////////////////////////////

const kufur = require("./kufurler.json");
client.on("message", async function (msg) {
  if (!msg.guild || msg.author.id === client.user.id) return;
  let kufurKoruma = await sunucuayarDB.get(`sunucuayar.kufur_koruma`);
  if (kufurKoruma) {
    try {
      let args = msg.content.split(" ");
      const kufurler = kufur.kufurler
      if (kufurler.some(word => args.some(c => word.toLowerCase() == c.toLowerCase()))) {
        if (!msg.member.permissions.has(8)) {
          msg.delete().then(msg => {
            msg.reply(" etme eyleme kardeşim günah ya.").then(m => m.delete({
              timeout: 2000
            })).catch(err => {});
          });
        }
      }
    } catch (err) {}

  }
});


/////////////////////////////////////////////////////// https://discord.gg/hBRHeTssX5

client.on("message", async message => {
  if(message.author.id === client.user.id) return;
  if(message.guild) return;
 //DCS 
client.channels.cache.get(config.channels.botdmlog).send(new Discord.MessageEmbed().setAuthor('Bota Dm Den Mesaj Gönderildi!').setFooter('Dm Log!').setDescription(`Gönderen kişi: \`${message.author.tag}\`\n Gönderen Id Si: \`${message.author.id}\``).setTimestamp().setThumbnail(client.user.avatarURL).addField("Mesajı;",
message.content).setColor("RANDOM"))//DCS!
})

///////////////////////////////////////////////////////  dm hg mesajı https://discord.gg/hBRHeTssX5


client.on('guildMemberAdd', member => {
member.send(""+member.guild.name+" \`Adlı Sunucumuza Sunucumuza Hoşgeldin Seni Aramızda Gördüğümüze Sevindik\` 🥰\n\n **Ailemize Katılmak İstermisin Sadece Yapman Gereken** \`Tag: ✦\` Almak\n\n **Sunucu İçi Cezalar** <#948902013406679090> <#880370182592286730> **Kanallarını Okuduğun Varsayılarak Uygulanmaktadır**\n\n **Yetkili Alımlarımız Her Zaman Açıktır Eğer Yetkili Olmak İstersen** <#938393285007917096> **Kanalına Gidip \`.başvur\`  Yazıp Çıkan Soruları Cevaplaman Yeterlidir**");
});

///////////////////////////////////////////////////////  Etiket Log https://discord.gg/hBRHeTssX5
 client.on('ready', () => {
    setInterval(function() {
  let ChannelsAmca = client.channels.cache.get("935958554546942042")
  if(ChannelsAmca) ChannelsAmca.send("<@&880371767439396934> Nasılsınız Nörüyonuz Yüzünüzü gören cennetlik :]")
      }, 1000 * 60 * 60 * 12)     //1000 = 1 sn //10000 = 10 sn //60000 = 1dk
  })
 ///////////////////////DOĞRULUK CESARET//////////////////////////////// https://discord.gg/hBRHeTssX5


client.on("clickButton",async(button) =>{
if(button.id === "button_dc_c"){
  const disbut = require ('discord-buttons')
  const cesaret = ["Gruptan birini sırtına alarak odada gezdir.","Kafanı tişörtüne sar ve bir tur öyle otur.","Aldığın son mesajı sesli bir şekilde oku.","50 Jumping Jack (zıplama hareketi) yap.","Sadece ayak parmaklarını kullanarak bir Facebook (veya başka bir sosyal medya) postu paylaş.","Hayalindeki işin pandomimini yap.","Rastgele birini ara ve onlara doğumgünün kutlu olsun şarkısı söyle.","Dört tur boyunca flamingo gibi ayakta dur.","Tuvalet kağıdından eşarp yapıp kafana sar ve fotoğraf çektir.",
  "Eline biraz pudra dök ve solundaki insanın yanağına bir tane şaplak at.","Gözlerini bağla ve 10 kere etrafında dön ve sokakta bir tur atıp gel.",
"Bir miktar şekeri burnuna çek.","Bir kaşık tuz ye.","Utanç verici bir fotoğrafını online yayınla","Pastel boyayla tırnaklarını boya.","Öğretmenlerinden birine bir e-posta gönder ve gününün nasıl geçtiğini anlat. is going.","Sokakta buz satmaya çalış.","Macerana dansı yap.","1dakika boyunca ‘evet’ veya ‘hayır’ deme.","2 tur boyunca Çinli aksanı yap.","Önümüzdeki 3 tur boyunca sağındaki kişiyle bir tişörtü paylaş.","Çarpım tablosundan 2’yi baştan sona tekrar et.","Tişörtünün önüne 2 plastik veya karton bardak bantla.",
"Solundaki kişinin poposuna şaplak at.","Sağındaki kişiyi yanağından öp.","5 dakika boyunca öpüş.","En sevdiğinin ünlünün taklidini yap.","Dışarı çık ve “I’m a Little Teapot” şarkısını bütün hareketleriyle birlikte söyle.","Sağındaki nesneyle ilgili bir hikaye uydur."
]
  const random = Math.floor(Math.random()*cesaret.length)
  const buton = new disbut.MessageButton()
  .setEmoji("✔️")
  .setStyle("url")
  .setURL("https://discord.gg/nzfU6xsfFS")
  .setLabel("Destek Sunucusu")
  
  const embed = new Discord.MessageEmbed()
  .setTitle('Doğruluk Cesaret')
  .setDescription(`İşte Cesaret Görevin : **${cesaret[random]}**`)
  .setColor('GREEN')
  .setFooter(client.user.username ,client.user.avatarURL())
  .setTimestamp()
  const buttonRow = new disbut.MessageActionRow()
  .addComponent(buton)
  
  button.reply.send({embed : embed , component : buttonRow})
}
})
client.on("clickButton",async(button) =>{
  if(button.id === "button_dc_d"){
    const disbut = require ('discord-buttons')
const dogruluk = ["Tek başına mı biriyle birlikte mi yaşamayı tercih edersin?","Sihir dünyasında mı yoksa süper kahramanlar dünyasında mı yaşamayı tercih edersin?","Ebeveynlerin bakmazken hiç abur cubur kaçırdın mı?","Yaşayacak sadece 1 günün daha olsa ne yapardın?","Hangi üniversiteye gitmeyi planlıyorsun?","Herhangi bir dinozor olabilsen hangisi olurdun?","En nefret ettiğin şey ne?","Dünyadaki herhangi bir insanla çıkma şansın olsaydı bu kim olurdu?",
"Doğruluk mu Cesaret mi sorularında hiç yalan söyledin mi?","Bir ev işinden kurtulabilsen hangisi olurdu?","En sevdiğin şarkı ne?","Daha önce hiç nargile içtin mi? İçtiysen anlat!","Eğer yapabilsen her gün yiyeceğin yemek ne olurdu?","En çirkin arkadaşın kim?","Ne tarzda lezzetli bir atıştırmalık sizi tahrik eder?","Hayatın boyunca kaç tane en iyi arkadaşın oldu?","Gittiğin en güzel yer neresi?","Banliyöde bir evde mi yaşamak istersin yoksa büyük bir şehirde apartman dairesinde mi?","Kız arkadaşının/Erkek arkadaşının en sevdiğin tarafı nedir?","30 yaşındaki seni anlat.","Daha önce birine verdiğin en kötü hediye nedir?","Sol tarafındaki kişiyi öpme düşüncesi seni heyecanlandırıyor mu?","Büyükannen ve büyükbabanın söylediği en komik şey nedir?","Bir günlüğüne bir işi denesen hangisini denerdin?","Hangi kurgusal karakterle evlenmek isterdin?","En kötü alışkanlıkların neler?","Hiç bir grup kurma / restoran açma konusunda hayal kurdun mu? Adı ne olurdu?","Daha önce hiç annenle babanı bastın mı?","Herhangi bir hayvan olabilsen hangisi olurdun?","Eğer kendi isminden başka bir isim alacak olsaydın neyi seçerdin?"]
    const random = Math.floor(Math.random()*dogruluk.length)
    const buton = new disbut.MessageButton()
    .setEmoji("✔️")
    .setStyle("url")
    .setURL("https://discord.gg/nzfU6xsfFS")
    .setLabel("Destek Sunucusu")
    const embed = new Discord.MessageEmbed()
    .setTitle('Doğruluk Cesaret')
    .setDescription(`İşte Doğruluk Sorun : **${dogruluk[random]}**`)
    .setColor('GREEN')
    .setFooter(client.user.username ,client.user.avatarURL())
    .setTimestamp()
    const buttonRow = new disbut.MessageActionRow()
    .addComponent(buton)
    button.reply.send({embed : embed , component : buttonRow})
  }
  })

/////////////////////url koruma////////////////////////////////// https://discord.gg/hBRHeTssX5
const request = require('request'); //eğer bu satırda hata verir ise bu satırı silin 
let Options = {
    "Vanity_URL": config.bot.guildVanityURL,
    "Log_Channel": config.channels.urlguardlog,
};

client.on('guildUpdate', async (oldGuild, newGuild) => {
    if (oldGuild.vanityURLCode === newGuild.vanityURLCode) return;
    let entry = await newGuild.fetchAuditLogs({
        type: 'GUILD_UPDATE'
    }).then(audit => audit.entries.first());
    if (!entry.executor || entry.executor.id === client.user.id) return;
    let channel = client.channels.cache.get(Options.Log_Channel);
    if (channel) channel.send(`${entry.executor} adlı kişi vanity url'yi çalmaya çalıştığı için banlandı ve url eski haline getirildi.`)
    if (!channel) newGuild.owner.send(`${entry.executor} adlı kişi vanity url'yi çalmaya çalıştığı için banlandı ve url eski haline getirildi.`)
    newGuild.members.ban(entry.executor.id, {
        reason: `${entry.executor.tag} adlı kişi vanity url'yi çalmaya çalıştığı için koruma tarafından banlandı.`
    });
    const settings = {
        url: `https://discord.com/api/v6/guilds/${newGuild.id}/vanity-url`,
        body: {
            code: Options.Vanity_URL
        },
        json: true,
        method: 'PATCH',
        headers: {
            "Authorization": `Bot ${Options.Bot_Token}`
        }
    };
    request(settings, (err, res, body) => {
        if (err) {
            return console.log(err);
        }
    });
});

///////////////////////// Çıkanı Banla ////////////////////////////// https://discord.gg/hBRHeTssX5

client.on('guildMemberRemove', member => {
  const channel = client.channels.cache.get(config.channels.invitelog);
  channel.send(`${member} Adlı Üye Sunucudan Çıktı. Banlamak İstiyorsan \`👍\` tepkisine tıklayın.\n**NOT**:\n Sebepsiz Yere Kimseyi Banlamayın Eğer Banlarsanız Bunun Sonucunda Yetkiniz Çekilebilir Yada Banlanırsınız`).then(sent => {
    sent.react('👍').then(() => sent.react('👎'));
    sent.awaitReactions((reaction, user) => member.guild.members.cache.get(user.id).hasPermission('BAN_MEMBERS') && !user.bot, { max: 1, time: 60000, errors: ['time' ]}).then(collected => {
      collected = collected.first();
      if(collected.emoji.name == '👍') {
        member.guild.members.ban(member.user.id);
        sent.reactions.removeAll();
        return channel.send(`${member}, ${collected.users.cache.filter(a => a.id !== client.user.id).first()} tarafından yasaklandı.`);
      } else {
        sent.reactions.removeAll();
        return channel.send(`${member} için yasaklama işlemi iptal edildi.`);
      };
    });
  });
});

///////////////////////// TİCKET SİSTEMİ ////////////////////////////// https://discord.gg/hBRHeTssX5

const csri = config.roles.ticketdestek
client.on("clickButton", async button => {

//------------\\
const evet = new disbut.MessageButton()
.setStyle("green")
.setLabel("Evet")
.setID("Evet");
const hayır = new disbut.MessageButton()
.setStyle("red")
.setLabel("Hayır")
.setID("Hayır");
const geriyükle = new disbut.MessageButton()
.setStyle("green")
.setLabel("Geri Yükle")
.setID("GeriYükle");
const sil = new disbut.MessageButton()
.setStyle("red")
.setLabel("Desteği Kapat")
.setID("DesteğiKapat");
const kilit = new disbut.MessageButton()
.setStyle("grey")
.setLabel("Kapat")
.setEmoji("🔒")
.setID("Kilit");
//------------\\

//------------\\
let member = button.guild.members.cache.get(button.clicker.user.id)
let kanal  = button.guild.channels.cache.get(button.channel.id)
let data   = await qdb.get(`destekkullanıcı_${member.id}`);
let data2  = await qdb.get(`destekkanal_${kanal.id}`);
let user   = button.guild.members.cache.get(data2);

//------------\\

//------------\\
if(button.id === "ticket"){
if(data) return button.reply.send("> **Başarasız!** Zaten aktif destek talebiniz bulunuyor. **Kanal:** <#" + data +">", true);

button.reply.think(true).then(async a => {
  if(!button.guild.channels.cache.find(c => c.name === "Destek Sistemi")){
button.guild.channels.create('Destek Sistemi' , {type: 'category'})
  }
  setTimeout(() => {
    const csk = button.guild.channels.cache.find(c => c.name === "Destek Sistemi")
button.guild.channels.create('destek-' + member.user.username , { type: 'text', reason: 'Destek '+ member.user.tag }).then(async c => {
c.setParent(csk.id);

await qdb.set(`destekkanal_${c.id}`, member.id);
await qdb.set(`destekkullanıcı_${member.id}`, c.id);

          let role = button.guild.roles.cache.find(a => a.name === '@everyone')      
          await c.createOverwrite(role.id, {
              SEND_MESSAGES: false,
              VIEW_CHANNEL: false
            });
  
          await c.createOverwrite(csri, {
              SEND_MESSAGES: true,
              VIEW_CHANNEL: true
            });
  
          await c.createOverwrite(member.id, {  
              SEND_MESSAGES: true,
              VIEW_CHANNEL: true
            })

a.edit("> **Başarılı!** Destek talebiniz oluşturuldu. **Kanal:** <#" + c.id +">")
await c.send(`${member.user}, Hoş Geldin destek ekibi sizinle ilgilenecektir. \n<@&`+csri+">", kilit)
})
  }, 2000)
})
} else {



//------------\\

//------------\\
if(button.id === "Kilit"){
button.message.edit(`> **Dikkat!** Destek talebini kapatmak istediğine emin misin?`,{
buttons: [evet, hayır]
})

button.reply.defer()
} else {
//------------\\

//------------\\
if(button.id === "Evet"){

 await kanal.createOverwrite(user, {  
              SEND_MESSAGES: false,
              VIEW_CHANNEL: false
            })

await button.message.delete()
await button.channel.send("> **Kapalı!** <@" + member + `> Tarafından destek talebi kapatıldı.`,{
buttons: [geriyükle, sil]
})

await kanal.setName("kapalı-"+ user.user.username)

button.reply.defer()
} else {
//------------\\

//------------\\
if(button.id === "GeriYükle"){
  await await kanal.setName("destek-"+ user.user.username)
          await kanal.createOverwrite(user, {  
              SEND_MESSAGES: true,
              VIEW_CHANNEL: true
            })

await button.channel.send("> **Dikkat!** <@" + user + `> Destek talebi tekrar açıldı.`,{
buttons: [kilit]
})

await button.message.delete()
button.reply.defer()
} else {
//------------\\

//------------\\
if(button.id === "DesteğiKapat"){
await qdb.delete(`destekkanal_${kanal.id}`);
await qdb.delete(`destekkullanıcı_${user.id}`);

button.channel.delete()
button.reply.defer()
} else {
//------------\\

//------------\\
if(button.id === "Hayır"){
button.message.edit("<@" + user + `> Destek ekibimiz seninle ilgilenecek.\n @everyone - @here`,  kilit)

button.reply.defer()
} else {
}}}}}
}
//------------\\

}); 

client.on("guildMemberRemove", async member => {

//------------\\
let data   = await qdb.get(`destekkullanıcı_${member.id}`);
let data2  = await qdb.get(`destekkanal_${data}`);
let kanal  = member.guild.channels.cache.get(data)
//------------\\

if(!data) return;

//------------\\
await qdb.delete(`destekkanal_${data.id}`);
await qdb.delete(`destekkullanıcı_${member.id}`);

kanal.delete()
//------------\\

})
client.on("channelDelete", async channel => {

//------------\\
let data  = await qdb.get(`destekkanal_${channel.id}`);
let data2   = await qdb.get(`destekkullanıcı_${data}`);
//------------\\

if(!data) return;

//------------\\
await qdb.delete(`destekkanal_${channel.id}`);
await qdb.delete(`destekkullanıcı_${data}`);

//------------\\

})

///////////////////// Yasak Tag //////////////////////////



//////////////////////// özel oda //////////////////////////////////

client.on('voiceStateUpdate', async (oldState, newState) => {
  if (newState.channel != null && newState.channel.name.startsWith('2 Kişilik Oda')) {newState.guild.channels.create(`🎧 ${newState.member.displayName}`, {type: 'voice',
    parent: newState.channel.parent,})
   .then((cloneChannel) => {newState.setChannel(cloneChannel);
    cloneChannel.setUserLimit(2);})}
  if (newState.channel != null && newState.channel.name.startsWith('3 Kişilik Oda')) {newState.guild.channels.create(`🎧 ${newState.member.displayName}`, {type: 'voice',
    parent: newState.channel.parent,})
   .then((cloneChannel) => {newState.setChannel(cloneChannel);
    cloneChannel.setUserLimit(3);})}
if (newState.channel != null && newState.channel.name.startsWith('4 Kişilik Oda')) {newState.guild.channels.create(`🎧 ${newState.member.displayName}`, {type: 'voice',
    parent: newState.channel.parent,})
   .then((cloneChannel) => {newState.setChannel(cloneChannel);
    cloneChannel.setUserLimit(4);})}
if (newState.channel != null && newState.channel.name.startsWith('5 Kişilik Oda')) {newState.guild.channels.create(`🎧 ${newState.member.displayName}`, {type: 'voice',
    parent: newState.channel.parent,})
   .then((cloneChannel) => {newState.setChannel(cloneChannel);
    cloneChannel.setUserLimit(5);})}
if (newState.channel != null && newState.channel.name.startsWith('15 Kişilik Oda')) {newState.guild.channels.create(`🎧 ${newState.member.displayName}`, {type: 'voice',
    parent: newState.channel.parent,})
   .then((cloneChannel) => {newState.setChannel(cloneChannel);
    cloneChannel.setUserLimit(15);})}
// Kullanıcı ses kanalından ayrılınca ve kanalda kimse kalmazsa kanalı siler;
if (oldState.channel != undefined) {
  if (oldState.channel.name.startsWith('🎧')) {
    if (oldState.channel.members.size == 0) {oldState.channel.delete();}
      else { // İlk kullanıcı ses kanalından ayrılınca kanaldaki başka kullanıcı adını kanal adı yapar.
        let matchMember = oldState.channel.members.find(x => `🎧 ${x.displayName} kanalı` == oldState.channel.name);
        if (matchMember == null) {
        oldState.channel.setName(`🎧 ${oldState.channel.members.random().displayName} kanalı`)
          }
       }
     }
   }
});

////////////// Çık Gir Yapana Ban /////////////////////


client.on('guildMemberAdd', (member) => {
    if (member.user.bot) return;
    db.add(`girişçıkış.${member.id}`, 1);
   	 if(db.get(`girişçıkış.${member.id}`) >= 5){//5 defa çık gir yaparsa
     member.guild.members.ban(member.id, { reason: `Sunucudan çok fazla çık gir yapma` })
     client.channels.cache.get(config.penals.ban.log).send(`${member} adlı kullanıcı sunucuya kısa süre içinde defalarca çık gir yaptığı için sunucudan banlandı!`)
	}
});
setInterval(() => {
db.all().filter(data => data.ID.endsWith("girişçıkış")).forEach(data => {
db.delete(data.ID)
})
}, 60*1000*30)// 1 dakikada verileri siler yani 1 dakikada kullanıcı 5 sefer çık gir yaparsa sunucudan banlanır

////////////// Rol Log /////////////////////////



///////////

