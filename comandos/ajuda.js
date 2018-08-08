const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
    if (!message.guild.member(message.author).hasPermission("SEND_MESSAGES")) return
	if (!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.reply("Permissões insuficientes.");
    
    var reason = message.content.split(" ").slice(1).join(" ");
    const embed1 = new Discord.RichEmbed()
  .setDescription(`:white_small_square: **Viados (Donos): Pênisvaldo e Daaniloo  
:white_small_square: **Comandos: **!sugerir e !membros.`)
  .setTimestamp()
  .setFooter(`Comando por: ${message.author.username}`, message.author.avatarURL)
  message.member.send({embed: embed1}); 
}
module.exports.help = {
    name: "ajuda"
    }
