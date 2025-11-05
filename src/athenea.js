const { Client, Collection, Events, GatewayIntentBits, Partials } = require('discord.js');
const fs = require('fs');
require('colors');

var { Token, Prefix } = require('./config.json');

let client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ],
    partials: [Partials.Channel]
});

let BANNER = `
▄▄▄     ▄▄▄█████▓ ██░ ██ ▓█████  ███▄    █ ▓█████ ▄▄▄
▒████▄   ▓  ██▒ ▓▒▓██░ ██▒▓█   ▀  ██ ▀█   █ ▓█   ▀▒████▄
▒██  ▀█▄ ▒ ▓██░ ▒░▒██▀▀██░▒███   ▓██  ▀█ ██▒▒███  ▒██  ▀█▄
░██▄▄▄▄██░ ▓██▓ ░ ░▓█ ░██ ▒▓█  ▄ ▓██▒  ▐▌██▒▒▓█  ▄░██▄▄▄▄██
 ▓█   ▓██▒ ▒██▒ ░ ░▓█▒░██▓░▒████▒▒██░   ▓██░░▒████▒▓█   ▓██▒
 ▒▒   ▓▒█░ ▒ ░░    ▒ ░░▒░▒░░ ▒░ ░░ ▒░   ▒ ▒ ░░ ▒░ ░▒▒   ▓▒█░
  ▒   ▒▒ ░   ░     ▒ ░▒░ ░ ░ ░  ░░ ░░   ░ ▒░ ░ ░  ░ ▒   ▒▒ ░
  ░   ▒    ░       ░  ░░ ░   ░      ░   ░ ░    ░    ░   ▒
      ░  ░         ░  ░  ░   ░  ░         ░    ░  ░     ░  ░
`;

whitelist = ['1416596429949898832'];

client.once(Events.ClientReady, (readyClient) => {
    console.clear()
    console.log(BANNER.green)
	console.log(" [+] ".green + ` Registrado como: ${readyClient.user.tag}. `.white);
    client.user.setPresence({
    activities: [
      {
        name: 'Fuck U',
        type: 1,
        url: 'https://twitch.tv/MastantuonoJR'
      }
    ],
    status: 'dnd'
  });
});

client.commands = new Collection();

const files = fs.readdirSync('./cmds').filter(file => file.endsWith('.js'));

for (const file of files) {
    var command = require(`./cmds/${file}`);
    client.commands.set(command.name, command)
}

client.on('messageCreate', async (message) => {
    if (!message.content.startsWith(Prefix) || message.author.bot || !whitelist.includes(message.author.id)) return;
    
    const args = message.content.slice(Prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = client.commands.find((c) => c.name === command);

    if (cmd) {
        cmd.execute(client, message);
    }
});

client.login(Token);
