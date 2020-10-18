/*
* this is a poor implementation, but this implementation also works without fail, and that has value.
*https://i.elixi.re/i/feyi.jpg
https://i.elixi.re/i/kd92.jpg
https://256.sh/i/k4cx.jpg
https://i.elixi.re/i/5b04.jpg
https://256.sh/i/vysl.jpg
https://256.sh/i/lf9p.jpg
https://i.elixi.re/i/11x5.jpg
https://256.sh/i/d1f2.jpg
https://i.elixi.re/i/s1ey.jpg
https://256.sh/i/zkuw.png
https://i.elixi.re/i/x593.jpg
https://i.elixi.re/i/kd92.jpg

https://256.sh/i/k3du.png
whoobie pic ^
*/
import * as utils from "./utils.js";
const Discord = require("discord.js");
const lodash = require("lodash");
const tweets = require("./tweets.json");
const client = new Discord.Client();

module.exports = {
    respondToMessage: function(message, content) {

        if (message.channel.type == "dm") {
            message.author.send(utils.parseTweetForDiscord(tweets[lodash.random(0, tweets.length)].content));
         }

         if (message.channel.type == "dm" && message.author.id === "204060249827704832") {
            message.author.send(content);
         }

        if (content.startsWith("kz")
        ) {
            if  (utils.chanceOfPosting(2) === true) {
                message.channel.send("yall gotta get jobs man fr this time").catch(console.warn);
                message.react('🤔');
            }
        }
        else if (content.startsWith("bruh ")) {
            message.channel.send("https://tenor.com/view/bruh-gif-5156041").catch(console.warn);
              //  .then(message => console.log(`Sent message: ${content}`))
              //  .catch(console.error);
        }
        else if (content.startsWith("sex ")) {
            message.channel.send("lmao weed").catch(console.warn);
              //  .then(message => console.log(`Sent message: ${content}`))
              //  .catch(console.error);
        }
        else if (content.startsWith("fuck ")) {
            message.channel.send("im also Fuck").catch(console.warn);
              //  .then(message => console.log(`Sent message: ${content}`))
              //  .catch(console.error);
        }
        else if (content.contains("league")) {
            message.channel.send("stop playing leeago legnd its melting ur brain").catch(console.warn);
              //  .then(message => console.log(`Sent message: ${content}`))
              //  .catch(console.error);
        }
        else if (content.startsWith("aram")) {
            message.channel.send("ohhh my goddd shut upppppp plzzzzzzzzz").catch(console.warn);
              //  .then(message => console.log(`Sent message: ${content}`))
              //  .catch(console.error);
        }
        else if (content.startsWith("trump")) {
            message.channel.send("god emporer").catch(console.warn);
              //  .then(message => console.log(`Sent message: ${content}`))
              //  .catch(console.error);
        }
        else if (content.startsWith("pain ")) {
            message.channel.send("pain meme is unfunny now come up with something new").catch(console.warn);
              //  .then(message => console.log(`Sent message: ${content}`))
              //  .catch(console.error);
        }
        else if (content.startsWith("stan ")) {
            message.channel.send("STAN JUNGKOOK").catch(console.warn);
            message.react('😤');
              //  .then(message => console.log(`Sent message: ${content}`))
              //  .catch(console.error);
        }
        else if (content.startsWith("daddy ")) {
            message.channel.send("sol ???").catch(console.warn);
              //  .then(message => console.log(`Sent message: ${content}`))
              //  .catch(console.error);
        }
        else if (content.startsWith("sup ")) {
            message.channel.send("Sup Nicki Minaj? Sittin here fantasizin bout layin you on yo stomach, and tootin that big ole red ass up, and spreadin and foldin them big ole red ass cheeks, and long dickin that pussy til it’s squirtin and fartin, squirtin and fartin, squrtin and fartin. Got that dookiehole soakin wet, soakin wet, soakin wet. You throwin it back and it’s grippin and huggin, grippin and huggin, grippin and huggin the dick. And I’m makin it grip and fart, grip and fart, grip and fart. Stroke got the— stroke got the— stroke makin the pussy squirt and fart, squirt and fart, squirt and fart. You throwin it back and it’s grippin and huggin, grippin and huggin, grippin and huggin the dick. And I’m still here got it grippin and fartin, grippin and fartin, grippin and fartin, grippin and fartin, grippin and fartin. Every stroke I’m hittin the core makin it fart. Every stroke I’m hittin the core makin it fart. Every stroke I’m hittin the core in the bottom of the pussy makin it fart and fart and fart, you moan and moan—").catch(console.warn);
              //  .then(message => console.log(`Sent message: ${content}`))
              //  .catch(console.error);
        }
        else if (content.startsWith("son")) {
            message.channel.send("https://media.discordapp.net/attachments/697681133013434381/738164415949570118/bladee.png?width=722&height=704").catch(console.warn);
              //  .then(message => console.log(`Sent message: ${content}`))
              //  .catch(console.error);
        }
        else if (content.startsWith("good night") || content.startsWith("bed time")) {
            message.channel.send("https://cdn.discordapp.com/attachments/446875598489649173/761092482401304626/image0.jpg")
        }
        else if (content.startsWith("israel")) {
            message.channel.send("https://twitter.com/Lilpeep/status/656143261829046272?s=20").catch(console.warn);
              //  .then(message => console.log(`Sent message: ${content}`))
              //  .catch(console.error);
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
        else if (content.startsWith("nykan")) {
            if  (utils.chanceOfPosting(4) === true) {
                message.channel.send('https://www.twitch.tv/nykan/clip/RelievedHumbleYamPartyTime').catch(console.warn);
            }
        }
        else if (content.startsWith("!truth2")) {

            message.channel.send('https://www.twitch.tv/ijust_tv/clip/PreciousMushyMuleSoonerLater').catch(console.warn);

        }
        else if (content.startsWith("zach")) {

            message.channel.send('Zach Was right about Everythign').catch(console.warn);

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
        else if (content.startsWith("rock") || content.startsWith("paper") || content.startsWith("scissors")){
            if (utils.chanceOfPosting(3)) {message.channel.send("rock")} else {message.channel.send("paper")}
        }
        else if (content.startsWith("jeff bezos")) {
            message.channel.send("worshipp 💕❤💖❤!");
        }
        else if (content.includes("jeff ")) {
            //might need to nest above ^ here

            message.channel.send("🐍🐍💚KING SLIME💚🐍🐍");
        }
        else if (content.startsWith("slipknot")) {
            message.channel.send("https://www.youtube.com/watch?v=STT-PEaCOtg")
        }


        /* user specific responses below */
        // (utils.chanceOfPosting makes it semi random if robosol responds, the higher the number
        // the more unlikely it is to happen
        else if (message.author.id === "204060249827704832") {
            if (utils.chanceOfPosting(1 === true)) {
                console.log("I LOVE YOUUUUUUUUUUU 😻💕💕💕")
                message.channel.send("my brain is working on overclocker mode 720 jigahertzes nvIDIA 16 FUCKING GISKASKOOLLION IQ CPU MULTICORE SANDY BRIDGIES POOOOOOG!!! i can feel the fuckin small chippy chips in my brain bois tikitikitikitikitik").catch(console.warn)
            }
            /*if (utils.chanceOfPosting(2 === true)) {
                message.channel.send("dr pewdiepie?").catch(console.warn)
            }*/
        }

        else if (message.author.id === '107504074068361216') {
            if  (utils.chanceOfPosting(12) === true) {
                message.channel.send("https://i.imgur.com/UyKwfHD.png").catch(console.warn);
            }
        }
        else if (message.author.id === '272656844894502913') {
            if  (utils.chanceOfPosting(69) === true) {
                message.channel.send("https://www.youtube.com/watch?v=SChcOpTdh4A").catch(console.warn);
            }
        }
        else if (message.author.id === '118137338369933313') {
            if  (utils.chanceOfPosting(10) === true) {
                message.channel.send('"I JUST FUCKING HIT AN OWNAGE" - rex 2017').catch(console.warn);
            }
        }
        else if (message.author.id === '244280969551413249') {
            if (utils.chanceOfPosting(30) === true) {
                message.channel.send('"why are all the gay people good at cartwheels?" - spencer 2020').catch(console.warn);
            }
        }
        else if (message.author.id === '132304731891564544') {
            if (utils.chanceOfPosting(70) === true) {
                message.channel.send('https://www.youtube.com/watch?v=7pWSVZvI4sY').catch(console.warn);
            }
        }
        else if (message.author.id === '267742762403627008') {
            if (utils.chanceOfPosting(40) === true) {
                message.channel.send(' **poland voice** "something is wrong with the trans people" - karo').catch(console.warn);
            }
        }
        else if (message.author.id === '118137338369933313') {
            if  (utils.chanceOfPosting(300) === true) {
                message.channel.send("https://i.imgur.com/UyKwfHD.png").catch(console.warn);
            }
        }
        else if (message.author.id === '166494684896559104') {
            if  (utils.chanceOfPosting(500) === true) {
                message.channel.send("https://256.sh/i/dfvb.png").catch(console.warn);
            }
        }
        else if (message.author.id === '149238310286393344') {
            if  (utils.chanceOfPosting(500) === true) {
                message.channel.send("https://256.sh/i/01mp.png").catch(console.warn);
            }
        }
        else if (message.author.id === '187937261948502016') {
            if  (utils.chanceOfPosting(200) === true) {
                message.channel.send("https://www.twitch.tv/sparkie0_0/clip/TubularAgreeableEggplantTBTacoLeft").catch(console.warn);
            }
        }
        /* else if (message.author.id === '187937261948502016') {
            if  (utils.chanceOfPosting(999999) === true) {
                message.channel.send("sparkie0_0: i punched my friend's little sister in the head playing wii sports").catch(console.warn);
            }
        }
        else if (message.author.id === '187937261948502016') {
            if  (utils.chanceOfPosting(100) === true) {
                message.channel.send("https://www.twitch.tv/sparkie0_0/clip/TubularAgreeableEggplantTBTacoLeft").catch(console.warn);
            }
        } */
        else if (message.author.id === '272656844894502913') {
            if  (utils.chanceOfPosting(200) === true) {
                message.channel.send("yo stockfish AI level 1 has been beating my ass all night").catch(console.warn);
            }
            if  (utils.chanceOfPosting(50) === true) {
                message.channel.send("https://www.twitch.tv/mattowns02/clip/MotionlessVivaciousWallabyOSsloth").catch(console.warn);
            }
        }
        else if (message.author.id === "112397143179866112") {
            if  (utils.chanceOfPosting(250) === true) {
                message.channel.send("I'd fuck the shit out of sneaky - jord 2019").catch(console.warn);
            }
        }
        else if (message.author.id === "218791582143348748") {
            if  (utils.chanceOfPosting(50) === true) {
                message.channel.send("http://prntscr.com/mcyoua").catch(console.warn);
            }
        }
        else if (message.author.id === "149238310286393344") {
            if  (utils.chanceOfPosting(10 === true)) {
                message.channel.send("https://i.imgur.com/MNWxGAE.png").catch(console.warn);
            }
        }
        else if (message.author.id === "267508270208385026") {
            if (utils.chanceOfPosting(10 === true)){
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
        else if (message.author.id === "197082217283977226") {
            if (utils.chanceOfPosting(14 === true)) {
                message.channel.send("https://www.twitch.tv/exaroh/clip/DirtyAverageSandstormDxAbomb").catch(console.warn());
            }
            if (utils.chanceOfPosting(500 === true)) {
                message.channel.send("https://www.twitch.tv/exaroh/clip/SpoopyFunBoarLeeroyJenkins").catch(console.warn());
            }
        }
        else if (message.author.id === "204060249827704832") {
            if (utils.chanceOfPosting(50 === true)) {
                message.channel.send("u said u wud let da homies smash coldwell we aint forget dat sht 😈").catch(console.warn)
            }
        }
        //else if (utils.contains(content, 'sol')) {
        //    console.log("sol responses.js trigger");
        //    message.channel.send('what').catch(console.warn);
        //}

        //else if (message.isMemberMentioned('<@!204060249827704832>').catch(console.warn)) {
        //    message.channel.send('what').catch(console.warn);
        // }

        else if  (utils.chanceOfPosting(300)) {
            message.channel.send("Tryna make a change :--/");
        }
        else if (utils.chanceOfPosting(200)) {
            message.channel.send(utils.parseTweetForDiscord(tweets[lodash.random(0, tweets.length)].content));
        }
        else if (content === process.env.gamerWordLite){
            message.channel.send("https://i.imgur.com/xbSEE7G.png").catch(console.warn())
        }
        else if (content === process.env.gamerWord) {
            message.channel.send("yo relax man").catch(console.warn);
        }
        else if (message.author.id === "397994368767754260" && content === "n"){
            message.channel.send("o");
        }
        else if (message.mentions.users === "647292354755166261") {
            message.channel.send("what").catch(console.warn);
        }
        //"annoying thing that doesnt work yet, think this has to do with" ...bro what was i trying to say and where did the rest of it go...
        else if (content.startsWith ==="oh really") {
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