# robosol
### its a miracle that this pile of crap works at all but it does 

the twitter crawler (crawler.js / tweets.json) and the discord bot (server.js and everything else) are kind of separate things.

i run the twitter crawler locally and then upload tweets.json to heroku, so it'd probably break if anyone else tried to use it. 
however, i've started the process of making it reusable, and it might some day live in it's own repo, as i couldn't really find an NPM package to do quite what i wanted
which is to download and store (x amount)tweets of tweets by {usernames} in a json file for use later

![thugdance](https://media.giphy.com/media/nhPoFaLtbp6bS/giphy.gif)
