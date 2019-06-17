/**
 * Created by j on 6/12/19.
 */
//import lodash from 'lodash';
const lodash = require("lodash");
const tweets = require("./tweets.json");

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

    getRandomDay: function() {
        let day = new Date();
        day = day.getDate();
        return day;
        //return lodash.random(1560360618, 1591920000);
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
                }
                //return (message[i] ? word : "");
                //oh god i forgot how ternary operators work
            }
        }

    },
    postRandomTweet: function (today) {
        //this is going to have a lot of bugs and i need to fix them
        const tweetsTotal = tweets.length.toNumber;
        let dayCount = 0;
        let dayArray = [];
        for (let i = 0; i < dayArray.length; i++ ){
            dayArray += today;
            console.log(today);
            dayCount ++;
        }

    },
    filterMessage: function (message, phrase, response, user, reaction) {
        // const filter = (reaction, user) => reaction.emoji.name === `${reaction}` && user.id === `${user}`;
        //i think i need to split this up into more functions bc it feels like a mess
        //tldr this function is a pile of hot garbage

        const messageObject = {
            message,
            phrase,
            response,
            user,
            reaction
        };
        if (message.content === utils.contains(message, phrase)) {
            message.channel.send(response).catch(console.warn);
        }
        if (message.isMemberMentioned(user)) {
            console.log(`member ${user} was mentioned!`);
            return true;
        }
    },

    //dis shit below dont work cuzzo

   // postMessage: message.channel.send(),
   // discordUser: message.author.id,
   // addReacts: message.react(),


};
