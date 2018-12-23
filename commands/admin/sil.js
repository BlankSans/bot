
const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class silCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'sil',
            group: 'admin',
            memberName: 'sil',
            description: 'Mesaj Sil',
            args: [
                {
                    key: 'sil',
                    prompt: 'Kaç Mesaj Birden Silinecek',
                    type: 'string'
                }
            ]
        });
    }

async run(msg, args) {
const { sil } = args;
  msg.channel.bulkDelete(sil + 1).then(() => {
    msg.channel.send("Deleted "+sil+" messages.").then(msg => msg.delete(1000));
  });
}
}
