# robosol

### discord bot to annoy my friends

the twitter crawler (crawler.js & the generated tweets.json) and the discord bot (server.js and everything else) are kind of separate things. I started with some default discord bot stuff and robosol has become his own monolith over time as I've added new features and improved aspects of it. 

intelligent people might be wondering, why does this repo use lodash? unintelligent people would answer "i don't remember why i thought i needed lodash" 

## twitter crawler

My workflow with this is that I run the twitter crawler locally and then upload tweets.json to heroku, so it may break given that other people would probably not be doing the exact same thing as I am with it. I'd love a bug report or a PR for it if someone else used it and had issues, though.

However, it should be somewhat reusable, and it probably should some day live in it's own repo, as I couldn't really find an NPM package to do quite what I wanted. That is, I needed an npm package to download and store ${amount} of tweets by ${usernames} in a json file for use later. It doesn't have any internal rate limiting or anything but I have yet to get banned from twitter api using it downloading thousands of tweets as fast as possible. 

## discord user markov generator 

ondafknweighbaidaweigh in moments!!!

## discord user stocks

assign numerical values to discord users! (also tbd)

![thugdance](https://media.giphy.com/media/nhPoFaLtbp6bS/giphy.gif)

### todo

split stocks, markov generator, twitter crawler into their own repositories, add some of them to npm

containerise parts of robosol in case anyone else wanted to use it as a base

and more!