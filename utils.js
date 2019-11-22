/**
 * Created by j on 6/12/19.
 */
const lodash = require("lodash");
const tweets = require("./tweets.json");
const Discord = require("discord.js");
const client = new Discord.Client();
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
        console.log(message, word);
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

    getUserFromMention : function (mention) {
        const matches = mention.match(/^<@!?(\d+)>$/);
         // The id is the first and only match found by the RegEx.
         // However the first element in the matches array will be the entire mention, not just the ID,
         // so use index 1.
        const id = matches[1];

        return client.users.get(id);
    }

};
