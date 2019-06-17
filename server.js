//            _                     _
//  _ __ ___ | |__   ___  ___  ___ | |
// | '__/ _ \| '_ \ / _ \/ __|/ _ \| |
// | | | (_) | |_) | (_) \__ \ (_) | |
// |_|  \___/|_.__/ \___/|___/\___/|_|
//
// "shitpost extraordinaire" (c) 2019+++^*^!
//
//soon markov chain >:)
//🐍💚🦋🐍💚🦋🐍💚🦋🐍💚🦋🐍💚🦋🐍💚🦋🐍💚🦋🐍💚🦋🐍💚🦋

const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.js");
const utils = require("./utils.js");
const responses = require("./responses.js");

// config.token contains the bot's token
// config.prefix contains the message prefix.
// utils is helper utilities for discordjs or variables to make this more legible

client.once('ready',() => {
    client.user.setActivity('Destory Human');
    // ^ this part is crucial
    console.log(`robosol has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
});

client.on("message", (message) => {
    //for each message that gets sent in any channel
    //we check to see if it meets certain criteria
    //i'll DEFINITELY change this to a case / switch statement at some point
    //also i might replace the long ID strings with variables for peoples names for readability
    console.log(`${message.author.username}: ${message.content}`);
    if (message.author.bot) {return;}
    //if any bot was the one that sent the message, we end the function here.

    /* I think i'm going to set up a controller and only use variable names here
     * i can default it to not sending data
     * in config.js or something similar to that
     *
     *phrase specific responses below
     */
    responses.respondToMessage(message);
});

client.login(config.token);