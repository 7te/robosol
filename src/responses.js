/*
*i can already feel that this is goin to be a shitshow too B)
*/
import * as utils from "./utils.js";
const Discord = require("discord.js");
const lodash = require("lodash");
const tweets = require("./tweets.json");
const client = new Discord.Client();

module.exports = {
    respondToMessage: function(message, content) {

        if (message.channel.type == "dm") {
            console.log("pm triggered");
            message.author.send(utils.parseTweetForDiscord(tweets[lodash.random(0, tweets.length)].content));
         }

        if (content.startsWith("kz")
        ) {
            if  (utils.chanceOfPosting(2) === true) {
                message.channel.send("^^^ u lame fa dis 1").catch(console.warn);
                message.react('🤔');
            }
        }
        else if (content.startsWith("bruh")) {
            message.channel.send("https://tenor.com/view/bruh-gif-5156041").catch(console.warn);
              //  .then(message => console.log(`Sent message: ${content}`))
              //  .catch(console.error);
        }
        else if (content.startsWith("sex")) {
            message.channel.send("lmao weed").catch(console.warn);
              //  .then(message => console.log(`Sent message: ${content}`))
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
        else if (message.author.id === '187937261948502016') {
            if  (utils.chanceOfPosting(25) === true) {
                message.channel.send("sparkie0_0: i punched my friend's little sister in the head playing wii sports").catch(console.warn);
            }
        }
        else if (message.author.id === '187937261948502016') {
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
        else if (message.author.id === "267508270208385026") {
            if (utils.chanceOfPosting(100 === true)){
                message.channel.send("sick invite").catch(console.warn());
            }
        }
        else if (message.author.id === "163176601280970752") {
            if (utils.chanceOfPosting(30 === true)) {
                message.channel.send("i go on mu just to listen to lil uzi vert Luv Is Rage 2 every day").catch(console.warn());
            }
        }
        else if (message.author.id === "152256820218429441") {
            if (utils.chanceOfPosting(14 === true)) {
                message.channel.send("https://i.imgur.com/ZDrSNhT.png").catch(console.warn());
            }
        }
        else if (message.author.id === "") {
            if (utils.chanceOfPosting(10 === true)) {
                message.channel.send("my brain is working on overclocker mode 720 jigahertzes nvIDIA 16 FUCKING GISKASKOOLLION IQ CPU MULTICORE SANDY BRIDGIES POOOOOOG!!! i can feel the fuckin small chippy chips in my brain bois tikitikitikitikitik").catch(console.warn)
            }
        }
        else if (content === 'wizard game') {
            message.channel.send('https://clips.twitch.tv/MiniatureDeafDragonflyTF2John').catch(console.warn);
        }
        else if (content === 'pimp is racist') {
            message.channel.send('https://clips.twitch.tv/MildSpineyGrassPhilosoraptor').catch(console.warn);
        }
        else if (content.startsWith("hikaru")) {
            if  (utils.chanceOfPosting(3) === true) {
                message.channel.send('"vegans are retarded" - Hikaru 2019').catch(console.warn);
            }
        }
        else if (content.startsWith("froast")) {
            console.log(content)
            if  (utils.chanceOfPosting(1) === true) {
                message.channel.send('<:ResidentSleeper:494484239757082624> 💊').catch(console.warn);
            }
        }
        else if (content.startsWith("mio")) {
            if  (utils.chanceOfPosting(3) === true) {
                message.channel.send("Cortana, Call Miodayday on Steam").catch(console.warn);
            }

        }
        else if (content.startsWith("bladee")) {
            message.channel.send('♻️✨♻️✨♻️✨♻️✨♻️✨♻️✨').catch(console.warn);
        }
        else if (content.startsWith("hey")){
            message.channel.send("👋 hey lil 💦 piss 🍼 baby 🥺 you think 🤔 you're so 💢 fucking 😎 cool? ❄️ huh? 😤you think 🤔 you're so 💢 fucking tough? you talk 💁‍♀️ a lotta 🤑 BIG 🕹 GAME 🎲 for someone with such a 👌 small 🚘 truck 🚚 aww 🐰 look 👀 at those 💪 arms your 💪 arms look 👀 so 💢 fucking 🌸 cute 💕 they look 👀 like little 👌cigarettes 🚬 I bet I could 💨smoke 😤 you, I could ♨️ roast you 🔥 and then you'd ❤️ love it 💕 and you'd 📳 text 🔤 me I 💖 love 💘 you ❣️ and then 🕣 I'd 💢 fucking 👻 GHOST 🖕YOU 💀").catch(console.warn());
        }

        //else if (utils.contains(content, 'sol')) {
        //    console.log("sol responses.js trigger");
        //    message.channel.send('what').catch(console.warn);
        //}

        //else if (message.isMemberMentioned('<@!204060249827704832>').catch(console.warn)) {
        //    message.channel.send('what').catch(console.warn);
        // }

        else if  (utils.chanceOfPosting(1000000)) {
            message.channel.send(process.env.gamerWord);
            message.react('<:wideBruh:539948737020297223>').catch(console.warn);
        }
        else if (content === process.env.gamerWordLite){
            message.channel.send("https://i.imgur.com/xbSEE7G.png").catch(console.warn())
        }
        else if (content === process.env.gamerWord) {
            message.channel.send("https://tenor.com/view/racist-thats-racist-watermelon-basketball-kfc-gif-5601237").catch(console.warn);
        }
        else if (message.author.id === "397994368767754260" && content === "n"){
            message.channel.send("i");
        }
        else if (message.mentions.users === "647292354755166261") {
            message.channel.send("what").catch(console.warn);
        }
        //annoying thing that doesnt work yet
        else if (content ==="oh really") {
            console.log("oh rly triggered")
            console.log(message.member.voiceChannel.id);
            const currentChannel = message.member.voiceChannel.id;
            if (currentChannel !== undefined) {
                currentChannel.join();
                console.log("voice joined")
                client.channels.get("459848241819811841").send("!play oh really young thug")
                    .then(connection => setInterval(client.voiceChannel.leave(), 5000));
            }
        }
    }
};