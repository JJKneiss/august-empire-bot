import tmi from 'tmi.js';
require('dotenv').config();
export let channelsList = process.env.TWITCH_CHANNELS_LIST.replace(/[\[\]']+/g, '').split(",");
const options = {
    connection: { reconnect: true },
    identity: {
        username: process.env.TWITCH_BOT_USERNAME,
        password: process.env.TWITCH_OAUTH_TOKEN
    },
    channels: channelsList
}
export const client = new tmi.Client(options);