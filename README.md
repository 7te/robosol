# robosol
### discord bot to annoy my friends

the twitter crawler (crawler.js & the generated tweets.json) and the discord bot (server.js and everything else) are kind of separate things.

I run the twitter crawler locally and then upload tweets.json to heroku, so it would probably break if anyone else tried to use it. be warned.

However, I've started the process of making it reusable, and it might some day live in it's own repo, as I couldn't really find an NPM package to do quite what I wanted

Which is, to download and store ${amount} of tweets by ${usernames} in a json file for use later.

The discord bot itself is pretty boring and not applicable to other people, unless you want to replace all of responses.json

![thugdance](https://media.giphy.com/media/nhPoFaLtbp6bS/giphy.gif)
