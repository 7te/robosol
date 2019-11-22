/*
*i can already feel that this is goin to be a shitshow too B)
*/
import * as utils from "./utils.js";
const Discord = require("discord.js");
const lodash = require("lodash");
const tweets = require("./tweets.json");
const client = new Discord.Client();

module.exports = {
    respondToMessage: function(message) {

        if (message.content.startsWith("kz")
        ) {
            if  (utils.chanceOfPosting(2) === true) {
                message.channel.send("^^^ u lame fa dis 1").catch(console.warn);
                message.react('🤔');
            }
        }
        else if (message.content.startsWith("bruh")) {
            message.channel.send("https://tenor.com/view/bruh-gif-5156041").catch(console.warn);
              //  .then(message => console.log(`Sent message: ${message.content}`))
              //  .catch(console.error);
        }
        else if (message.content.startsWith("sex")) {
            message.channel.send("lmao weed").catch(console.warn);
              //  .then(message => console.log(`Sent message: ${message.content}`))
              //  .catch(console.error);
        }
        /* user specific responses below */
        else if (message.author.id === '107504074068361216') {
            if  (utils.chanceOfPosting(12) === true) {
                message.channel.send("https://i.imgur.com/UyKwfHD.png").catch(console.warn);
                message.channel.send("https://clips.twitch.tv/MiniatureAttractiveBaconChefFrank").catch(console.warn);

            }
        }
        else if (message.author.id === '166494684896559104') {
            if  (utils.chanceOfPosting(50) === true) {
                // (utils.chanceOfPosting makes it semi random if robosol responds, the higher the number
                // the more unlikely it is to happen
                message.channel.send("https://clips.twitch.tv/CorrectProudGerbilNotATK").catch(console.warn);
            }
        }
        else if (message.author.id === '166494684896559104') {
            if  (utils.chanceOfPosting(25) === true) {
                message.channel.send("sparkie0_0: i punched my friend's little sister in the head playing wii sports").catch(console.warn);
            }
        }
        else if (message.author.id === '166494684896559104') {
            if  (utils.chanceOfPosting(100) === true) {
                message.channel.send("https://www.twitch.tv/sparkie0_0/clip/TubularAgreeableEggplantTBTacoLeft").catch(console.warn);
            }
        }
        else if (message.author.id === '272656844894502913') {
            if  (utils.chanceOfPosting(10) === true) {
                message.channel.send("yo stockfish AI level 1 has been beating my ass all night").catch(console.warn);
            }
        }
        else if (message.author.id === "112397143179866112") {
            if  (utils.chanceOfPosting(25) === true) {
                message.channel.send("I'd fuck the shit out of sneaky - jord 2019").catch(console.warn);
            }
        }
        else if (message.author.id === "218791582143348748") {
            if  (utils.chanceOfPosting(50) === true) {
                message.channel.send("http://prntscr.com/mcyoua").catch(console.warn);
            }
        }
        else if (message.author.id === "157607958153265152") {
            if  (utils.chanceOfPosting(3) === true) {
                message.react("💁🏻").catch(console.warn);
            }
        }
        else if (message.author.id === "149238310286393344") {
            if  (utils.chanceOfPosting(10 === true)) {
                message.channel.send("https://i.imgur.com/MNWxGAE.png").catch(console.warn);
            }
        }
        else if (message.content === 'wizard game') {
            message.channel.send('https://clips.twitch.tv/MiniatureDeafDragonflyTF2John').catch(console.warn);
        }
        else if (message.content === 'pimp is racist') {
            message.channel.send('https://clips.twitch.tv/MildSpineyGrassPhilosoraptor').catch(console.warn);
        }
        else if (message.content.startsWith("hikaru")) {
            if  (utils.chanceOfPosting(5) === true) {
                message.channel.send('"vegans are retarded" - Hikaru 2019').catch(console.warn);
            }
        }
        else if (message.content.startsWith("froast")) {
            if  (utils.chanceOfPosting(1) === true) {
                message.channel.send('<:ResidentSleeper:494484239757082624> 💊').catch(console.warn);
            }
        }
        else if (message.content.startsWith("mio")) {
            if  (utils.chanceOfPosting(3) === true) {
                message.channel.send("Cortana, Call Miodayday on Steam").catch(console.warn);
                message.channel.send(utils.parseTweetForDiscord(tweets[lodash.random(0, tweets.length)].content));
            }

        }
        else if (message.content.startsWith("bladee")) {
            message.channel.send('♵☆♵☆♵☆♵☆♵☆♵☆♵☆♵☆♵☆♵☆♵☆♵☆').catch(console.warn);
        }
        //else if (utils.contains(message.content, 'sol')) {
        //    console.log("sol responses.js trigger");
        //    message.channel.send('what').catch(console.warn);
        //}

        //else if (message.isMemberMentioned('<@!204060249827704832>').catch(console.warn)) {
        //    message.channel.send('what').catch(console.warn);
        // }

        else if  (utils.chanceOfPosting(10000)) {
            message.channel.send(process.env.gamerWord);
            message.react('<:wideBruh:539948737020297223>').catch(console.warn);
        }
        else if (message.content === process.env.gamerWord) {
            message.channel.send("https://tenor.com/view/racist-thats-racist-watermelon-basketball-kfc-gif-5601237").catch(console.warn);
        }
        //if (message.isMemberMentioned(client.user)) {
        //    console.log("got mentionedwowowowwowo");
        //    message.channel.send(tweets[lodash.random(0,tweets.length)].content);
       // }

        //annoying thing that doesnt work yet
        else if (message.content.startsWith("oh really")) {
            const currentChannel = message.member.voiceChannel;
            console.log(currentChannel);
            if (currentChannel !== undefined) {
                currentChannel.join();
                client.channels.get("459848241819811841").send("!play oh really young thug")
                    .then(connection => setInterval(client.voiceChannel.leave(), 5000));
            }
        }
    }
};