//            _                     _
//  _ __ ___ | |__   ___  ___  ___ | |
// | '__/ _ \| '_ \ / _ \/ __|/ _ \| |
// | | | (_) | |_) | (_) \__ \ (_) | |
// |_|  \___/|_.__/ \___/|___/\___/|_|
//
// "shitpost extraordinaire" (c) 2019+++^*^!
//🐍💚🦋🐍💚🦋🐍💚🦋🐍💚🦋🐍💚🦋🐍💚🦋🐍💚🦋🐍💚🦋🐍💚🦋

const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.js");
const utils = require("./utils.js");
const tweets = require("./tweets.json");

// config.token contains the bot's token
// config.prefix contains the message prefix.
// utils is helper utilities for discordjs or variables to make this more legible

client.once('ready',() => {
    client.user.setActivity('Minecraft: Sexy Edition 2');
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
    else if (message.content.startsWith("kz")) {
        if (utils.chanceOfPosting(2) === true) {
            console.log("chance true");
            message.channel.send("^^^ u lame fa dis 1");
            message.react('🤔');
        }
    }
    else if (message.content.startsWith("bruh")) {
        message.channel.send("https://tenor.com/view/bruh-gif-5156041")
            .then(message => console.log(`Sent message: ${message.content}`))
            .catch(console.error);
    }
    else if (message.content.startsWith("sex")) {
        message.channel.send("lmao weed")
            .then(message => console.log(`Sent message: ${message.content}`))
            .catch(console.error);
    }
    /* user specific responses below */
    else if (message.author.id === '107504074068361216') {
        if (utils.chanceOfPosting(20) === true) {
            message.channel.send({
                files: [{
                    attachment: './media/brad.png',
                    name: 'brad.png'
                }]
            }).catch(console.error);
            message.channel.send("https://clips.twitch.tv/MiniatureAttractiveBaconChefFrank");

        }
    } else if (message.author.id === '166494684896559104') {
        if(utils.chanceOfPosting(50) === true) {
            // utils.chanceOfPosting makes it semi random if robosol responds, the higher the number
            // the more unlikely it is to happen
            message.channel.send("https://clips.twitch.tv/CorrectProudGerbilNotATK");
        }
    }
    else if (message.author.id === '166494684896559104') {
        if (utils.chanceOfPosting(25) === true) {
            message.channel.send("sparkie0_0: i punched my friend's little sister in the head playing wii sports");
        }
    }
    else if (message.author.id === '166494684896559104') {
        if (utils.chanceOfPosting(100) === true) {
            message.channel.send("https://www.twitch.tv/sparkie0_0/clip/TubularAgreeableEggplantTBTacoLeft");
        }
    }
    else if (message.author.id === '272656844894502913'){
        if (utils.chanceOfPosting(10) === true) {
            message.channel.send("yo stockfish AI level 1 has been beating my ass all night");
        }
    }
    else if (message.author.id === "112397143179866112") {
        if (utils.chanceOfPosting(25) === true) {
            message.channel.send("I'd fuck the shit out of sneaky - jord 2019");
        }
    }
    else if (message.author.id === "218791582143348748"){
        if (utils.chanceOfPosting(50) === true){
            message.channel.send("http://prntscr.com/mcyoua");
        }
    }
    else if (message.author.id === "157607958153265152"){
        if (utils.chanceOfPosting(3) === true){
            message.react("💁🏻");
        }
    }
    else if (message.author.id === "149238310286393344"){
        if (utils.chanceOfPosting(10 === true)) {
            message.channel.send("https://i.imgur.com/MNWxGAE.png").catch(console.error);
        }
    }
    else if (message.content === 'wizard game') {
        message.channel.send('https://clips.twitch.tv/MiniatureDeafDragonflyTF2John');
    }
    else if (message.content === 'pimp is racist') {
        message.channel.send('https://clips.twitch.tv/MildSpineyGrassPhilosoraptor');
    }
    else if (message.content.startsWith("hikaru")) {
        if (utils.chanceOfPosting(5) === true) {
            message.channel.send('"vegans are retarded" - Hikaru 2019');
        }
    }
    else if (message.content.startsWith("froast")) {
        if (utils.chanceOfPosting(1) === true) {
            message.channel.send('<:ResidentSleeper:494484239757082624> 💊');
        }
    }
    else if (message.content.startsWith("mio")) {
        if (utils.chanceOfPosting(3) === true){
            message.channel.send("Cortana, Call Miodayday on Steam");
            message.channel.send(utils.parseTweetForDiscord(tweets[621].content));
        }

    }
    else if (message.content.startsWith("bladee")){
        utils.postMessage('♵☆');
    }
    else if (message.content === 'sol') {
        message.channel.send('what');
    }
    else if (message.mentions('<@!204060249827704832>')) {
        message.channel.send('what');
    }

    else if (utils.chanceOfPosting(10000)){
        message.channel.send("nigger");
        message.react('<:wideBruh:539948737020297223>');
    }
    else if (message.content === 'nigger'){
        message.channel.send("https://tenor.com/view/racist-thats-racist-watermelon-basketball-kfc-gif-5601237");
    }

    //annoying thing that doesnt work yet
    else if (message.content.startsWith("oh really")) {
        const currentChannel = message.member.voiceChannel;
        console.log(currentChannel);
        if (currentChannel !== undefined){
            currentChannel.join();
            client.channels.get("459848241819811841").send("!play oh really young thug")
                .then(connection => setInterval(client.voiceChannel.leave(),5000));
        }
    } else {return null;}

});

client.login(config.token);