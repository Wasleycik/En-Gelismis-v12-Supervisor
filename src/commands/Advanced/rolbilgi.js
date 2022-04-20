const Discord = require("discord.js");
const superagent = require("superagent");
const config = require("../../../config.json");


module.exports = {
  name: "roldenetim",
  aliases: ["rol-bilgi","rolbilgi","rb"],
  execute: async (client, message, args, embed, author, channel, guild) => {
    if (!message.member.hasPermission('ADMINISTRATOR')) 
    if(!message.member.roles.cache.has(config.staffrole))
		    return message.channel.send('Bu komudu kullanman için yetkin yok.') 
 const filter = (reaction, user) => {
        return ["✅"].includes(reaction.emoji.name) && user.id === message.author.id; 
    };
    if (!args[0]) return message.channel.send("**Bir rol girin.**")
        let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]) || message.guild.roles.cache.find(r => r.name.toLowerCase() === args.join(' ').toLocaleLowerCase());
        if (!role) return message.channel.send("**Geçerli bir rol gir.**");
        let membersWithRole = message.guild.members.cache.filter(member => {
            return member.roles.cache.find(r => r.name === role.name);
        }).map(member => {
            return member.user;
        })

        const status = {
            false: "Hayır",
            true: "Evet"
        }
    let sesteolmayan = message.guild.members.cache.filter(s => s.roles.cache.has(role.id)).filter(s => s.presence.status !== "offline").filter(s => !s.voice.channel).map(s => s).join(' ')
    let sesteolan = message.guild.members.cache.filter(s => s.roles.cache.has(role.id)).filter(s => s.voice.channel).map(s => s).join(', ')

    message.channel.send(`
		💎\`Seste olan/olmayanları öğrenmek için tepkiye tıklayın\`💎
    
**Rol ismi**: \`${role.name}\`
**ID**: \`${role.id}\`
**Rolü rengi**: \`${role.hexColor}\`
**---------------------------------------------------**
**Bu Rolde Toplamda Rolde \`${role.members.size}\` kişi var.**
**Bulunduğu pozisyon**: \`${role.position}\`
**Bahsedilebilir mi?**: \`${status[role.mentionable]}\`
**Bu Role Sahip üyeler**: 
${membersWithRole.join(",")}
       
`).then(x => {
x.react('✅');  
x.awaitReactions(filter, {max: 1, time: 10000, error: ['time']}).then(z => {
            let donut = z.first();
            if (donut) {
				
			  x.edit(`**Seste olanlar**:\n ${sesteolan}\n **Seste olmayan(Çevrimdışıyı saymıyorum)**: \n ${sesteolmayan}`);
            };
        });
	    });		
  }
}