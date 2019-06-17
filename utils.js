/**
 * Created by j on 6/12/19.
 */
//import lodash from 'lodash';
const lodash = require("lodash");

module.exports = {

    chanceOfPosting: function (chance) {
        if (lodash.random(1,chance) === chance) {
            return true;
        }
    },

    processMessage: function (message, phrase, response, user, reaction) {
        const filter = (reaction, user) => reaction.emoji.name === `${reaction}` && user.id === `${user}`;
        //i think i need to split this up into more functions bc it feels like a mess
        //this function is a shitshow
        if (message.content === phrase) {
            message.channel.send(response).catch(console.warn);
        }
        if (message.isMemberMentioned(user)) {
            return true;
        }
    },

    chooseRandomChannel: function(){
        const channelIDs = guild.channels.get().map(c => c.id).join();
        return lodash.random([channelIDs]);
    },

    getRandomTime: function() {
        return lodash.random(1560360618, 1591920000);
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

    messageContains: function (message, word) {
        let messageArray = message.content.split(" ");
        for (let i = 0; i < messageArray.length; i++ ){
            if (message[i] === word){
                console.log("widePeepoHappy");
            }
        }

    }

    //dis shit dont work cuzzo

   // postMessage: message.channel.send(),
   // discordUser: message.author.id,
   // addReacts: message.react(),


};
