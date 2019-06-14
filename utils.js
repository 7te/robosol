/**
 * Created by j on 6/12/19.
 */
//import lodash from 'lodash';
const lodash = require("lodash");

module.exports = {

    chanceOfPosting: function (chance) {
        if (lodash.random(1,chance) === chance) {
            return true;
        } else  {
            return false;
        }
    },

    processMessage: function (message, phrase, response) {
        if (message.content === phrase) {
            message.channel.send(response).catch(console.warn);
        }
        if (message.mentions) {
            return true;
        }
    },

    chooseRandomChannel: function(){
        const channelIDs = guild.channels.get().map(c => c.id).join();
        return lodash.random([channelIDs]);
    },

    getRandomDate: function() {
        return lodash.random(1560360618, 1591920000);
    },
    
    parseStringFor: function (phrase, key) {
        //const regex = `\W*((?i)${key}(?-i))\W*`;
        //words.match(regex);
        const match = phrase.includes(key);
        return match;
    }

};
