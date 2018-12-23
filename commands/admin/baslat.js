
const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class baslatCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'baslat',
            group: 'admin',
            memberName: 'baslat',
            description: 'Yeniden Baslat',

        });
    }

async run(msg) {

msg.channel.send("Yeniden Başlatılıyor").then(msg=>{


  process.exit(0);
});
}
}
