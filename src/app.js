import { client, channelsList } from './client';
import { rollController } from './commands/dice.js';
import { characterController } from './commands/character.js';

class Bot {
    constructor(client) {
        this.client = client;
        this.regexpCommand = new RegExp(/^!([a-zA-Z0-9]+)(?:\W+)?(.*)?/);
        this.commands = {
            github: {
                response: 'https://github.com/JJKneiss'
            },
            about: {
                response: `Hello! I am August, the Punk team's custom bot.`
            },
            roll: {
                response: (argument) => rollController(argument)
            },
            character: {
                response: (argument) => characterController(argument)
            },
            schedule: {
                response: (argument) => scheduleController(argument)
            }
        }
        this.onMessage();
    }
    onMessage() {
        this.client.on('message', (channel, tags, message, self) => {
            if (self) return;
            if (message.match(this.regexpCommand)) this.runCommand(channel, tags, message, self);
            else return;
        });
    }
    runCommand(channel, tags, message, self) {
        const [raw, command, argument] = message.match(this.regexpCommand);
        const { response } = this.commands[command] || {};
        // Check command type, then send to proper command
        if (typeof response === 'function') this.client.say(channel, response(argument));
        else if (typeof response === 'string') this.client.say(channel, response);
        else this.client.say(channel, `Sorry I don't recognize this command, try using !help.`)
    }
    static getInstance(client) {
        if (!Bot._instance) return Bot._instance = new Bot(client);
        else throw "Exception: Assignment Already Instantiated.";
    }
}
(() => {
    client.connect().catch(console.error)
        .then(
            client.on('connected', (addr, port) => {
                channelsList.forEach(channel => console.log(`Punky Connected to ${addr}:${port} at channel ${channel}`));
                const myBot = Bot.getInstance(client)
            })
        );
})();