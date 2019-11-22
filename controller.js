/*some stuff here :)*/
const responses = require("./responses");
module.exports = {
    filterMessage: function (message, phrase, response, user, reaction) {
     // const filter = (reaction, user) => reaction.emoji.name === `${reaction}` && user.id === `${user}`;

      //i think i need to split this up into more functions bc it feels like a mess
      //tldr this function is a pile of steaming hot garbage
      if (message.author.bot) {return;}
      if (message.messageEmbed) {return;}
      if (message.messageAttachment) {return;}

      //if (message.content === self.contains(message, phrase)) {
       //   message.channel.send(response);
            //.catch(console.warn);
       //}
     // if (message.isMemberMentioned(user) !== undefined) {
     //     console.log(`member ${user} was mentioned!`);
      //}
       responses.respondToMessage(message);
    }
}