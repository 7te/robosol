/**
 * Created by j on 6/12/19.
 */
const lodash = require("lodash");
const tweets = require("./tweets.json");
const responses = require("./responses");

module.exports = {

    chanceOfPosting: function (chance) {
        if (lodash.random(1,chance) === chance) {
            return true;
        }
    },

    getRandomChannel: function(){
        const channelIDs = client.channels.get().map(c => c.id).join();
        return lodash.random([channelIDs]);
    },

    parseTweetForDiscord: function (tweet) {
        //const regex = `\W*((?i)${key}(?-i))\W*`;
        //words.match(regex);
        const cleanedTweet = tweet
            .replace(/@/g,'')
            .replace(/https\/\//, '')
            .replace(/RT/g, '');
        return cleanedTweet;
    },

    contains: function (message, word) {
        if (message.content) {
            let messageArray = message.content.split(" ");
            for (let i = 0; i < messageArray.length; i++ ){
                if (message[i] === word){
                    console.log("widePeepoHappy");
                    return true;
                }
                //return (message[i] ? word : "");
                //oh god i forgot how ternary operators work
            }
        }

    },
    postRandomTweet: function () {
        //this is going to have a lot of bugs and i need to fix them
        //originally i was going to have a couple functions for this but
        //whatever
        const tweetsTotal = tweets.length.toNumber;
        console.log(tweetsTotal);
        let day = new Date();
        day = day.getDate();
        console.log(day);
        let dayCount = 0;
        let dayArray = [];

        if(dayCount < 366) {
            for (let i = 0; i < dayArray.length; i++ ){

                dayArray += day;
                dayCount ++;

            }

        } else if (dayCount === 365) {
            dayCount = 0;
            //i'm going to blissfully ignore that 2020 is a leap year
        }

    },
    filterMessage: function (message, phrase, response, user, reaction) {
        // const filter = (reaction, user) => reaction.emoji.name === `${reaction}` && user.id === `${user}`;

        //i think i need to split this up into more functions bc it feels like a mess
        //tldr this function is a pile of steaming hot garbage
        if (message.author.bot) {return;}
        if (message.messageEmbed) {return;}
        if (message.messageAttachment) {return;}

        if (message.content === utils.contains(message, phrase)) {
            message.channel.send(response).catch(console.warn);
        }
        if (message.isMemberMentioned(user)) {
            console.log(`member ${user} was mentioned!`);
        }
        responses.respondToMessage(message);

    },

    //dis shit below dont work cuzzo

   // postMessage: message.channel.send(),
   // discordUser: message.author.id,
   // addReacts: message.react(),

};
