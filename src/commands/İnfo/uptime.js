const moment = require("moment");
require("moment-duration-format");

module.exports = {
    name: "uptime-süresi",
    aliases: ["uptime"],

    execute: async (client, message, args, embed, author, channel, guild) => {
        message.channel.send( `
Botun çalışma süresi: " **${moment.duration(client.uptime).format('D [gün], H [saat], m [dakika], s [saniye]')}** "`) 
    }
}
