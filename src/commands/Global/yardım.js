const Discord = require('discord.js')
let pages = ['**Genel Herkesin Kullanabildiği Komutlar**\n\n `afk` = afk moduna geçersiniz\n `alarm` = alarm kurarsınız\n `stats` = kendi stat durumunuza bakabilirsiniz\n  `top10` = ilk 10 aktif kullanıcı statlarına bakabilirsiniz\n `zengin` = Boosterlar için nick değiştirmeyi sağlar\n `tokat` = etiketlediğiniz kişiye tokat atarsınız\n `nitrover` = Nitro verir\n `nerede` = nerede oldunu gösterir\n `link` = sunucu linkini atar\n `hediyever` = etiketlediğiniz kişiye hediye verirsiniz\n `başvuru` = Yetkili Başvurusunda Bulunabilirsiniz\n `fal` = falına bakabilirsin\n `bilgi` = Kullanıcı Bilgisini Gösterir\n `avatar` = avatarınızı gösterir\n `yetklerim` = Sizde Olan Yetkileri görebilirsiniz\n `destek` = canlı destek Başlatırsınız\n',

            '**Kayıt Komutları**\n\n `e` = kullanıcıyı erkek olarak kaydedersiniz\n `k` = kullanıcıyı Kadın olarak kaydedersiniz\n `isimler` = kullanıcının kayıtlı tüm isimlerine bakabilirsiniz\n `isim` = Kullanıcının İsmini Düzeltmenizi Sağlar\n `kayıtsız` = etiketlediğiniz kullanıcıyı Kayıtsıza Atar\n `şüpheli` = Etiketlediğiniz Kullanıcıyı Şüpheliye Atar\n `bağlantıkes` = Kullanıcıyı Kayıt Ettikten Sonra Kayıt Kanalından Çıkarabilirsiniz\n' ,


             '**Moderasyon Komutları**\n\n `Mute` = Chatta Kullanıcıyı Mutelersiniz\n `Vmute` = Ses Kanallarında Kullanıcıyı Susturursunuz\n `jail` = kullanıcıyı Silivriye Atarsınız\n `ban` = kullanıcıyı banlarsınız\n `sil` = Chatta 100 e kadar mesaj silebilirsiniz\n `sil2` = Etiketlediğiniz kullanıcının belirttiğiniz kadar mesajını siler\n`Warn` = Kullanıcıyı Uyarırsınız\n `unmute` = Kullanıcının cahattaki mutesini açarsınız\n `unvmute` = Kullanınıcın ses kanallarındaki susturmasını açarsınız\n `unjail` = Kullanıcıyı Silivriden Çıkarırsınız\n `unban` = Banlı Kullanıcının Banını Açabilirsiniz\n `süreliban` = Süreli bir şekilde banlarsınız\n `seskes` = ses kanalındaki bir kullanıcıyı o kanaldan atar\n `sürelirol` = süreli bir şekilde rol verebilirsiniz\n `snipe` = En son silinen mesajı atar\n `say` = sunucudaki üye sayısını gösterir\n `sesli` = sesli kanaldaki aktif kullanıcı sayısını verir\n `oylama` = Bir Oylama Başlatırsınız\n `ysay1` = Aktif Olup seste olmayan yetkilileri sayar\n `ysay` = seste olmayan tüm yetkilileri sayar (AFK olanlar dahil)\n `denetim` = Roldaki üye sayısı ve rol bilgisini verir\n `ytb` = Bir Kullanıcıya Yetki verirsiniz\n `kilit` = Kanalı Kilitleyip Açmanızı Sağlar\n `reklamtarama` = Nick Ve Durumunda Reklam Olan kullanıcıları listeler\n `rolsüz` = Rol ü OLmayanlara Rol verir\n `ytçağır` = Yetkililere Dm den mesaj atar\n `topteyit` = Toplam Kayıtlara Bakarsınız\n `kayıtlarım` = kendi kayıt verilerinize bakabilirsiniz\n',

'**Yetkili Başvuru Sistemi**\n\n  `başvur` = Bir Başvuru Talebi Oluşturursunuz\n `başvuru-banla` = gereksiz yere başvuruda trool vb yapan kişiler sistemden banlanır\n `başvuru-durum` = sistemi açıp kapatmaya yarar\n `ytb` = Başvuran Kişinin Başvurusu Kabul edilince YT vermeyi Sağlar',

'**Eğlence Komutları**\n\n `8ball` = oyun\n `adminban` = oyun\n `atatürk` = oyun\n `ambulans` = oyun\n `atla` = oyun\n `balıktut` = oyun\n `kaçcm` = oyun\n `kapaklaf` = oyun\n `token` = oyun\n `vine` = oyun\n `tokat` = oyun\n `taş kağıt makas` = oyun\n `hacının şalgamı` = oyun\n',

]
let page = 1


module.exports = {
    name: 'help',
    aliases: ["yardım","h","y"],
    execute: async (client, message, args, author, channel, guild ) => {
    const embed = new Discord.MessageEmbed()
        .setColor("#2f3136")
        .setThumbnail(client.user.avatarURL({ dynamic: true }))
        .setFooter(`${pages.length} sayfadan ${page}. sayfa`)
        .setDescription(pages[page - 1])
        .setColor("RANDOM")

    message.channel.send({ embed }).then(msg => {
        msg.react('⬅').then(r => {
            msg.react('➡')

            const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id
            const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id

            const backwards = msg.createReactionCollector(backwardsFilter, { timer: 6000 })
            const forwards = msg.createReactionCollector(forwardsFilter, { timer: 6000 })

            backwards.on('collect', (r, u) => {
                if (page === 1) return r.users.remove(r.users.cache.filter(u => u === message.author).first())
                page--
                embed.setDescription(pages[page - 1])
                embed.setFooter(`${pages.length} sayfadan ${page}. sayfa`)
                msg.edit(embed)
                r.users.remove(r.users.cache.filter(u => u === message.author).first())
            })

            forwards.on('collect', (r, u) => {
                if (page === pages.length) return r.users.remove(r.users.cache.filter(u => u === message.author).first())
                page++
                embed.setDescription(pages[page - 1])
                embed.setFooter(`${pages.length} sayfadan ${page}. sayfa`)
                msg.edit(embed)
                r.users.remove(r.users.cache.filter(u => u === message.author).first())
            })
        })
    })
} }