/**
 * asks twitter for data on the accounts in usernames
 * creates a new file called tweets.json to store tweets locally for use later
 *
 * need to add a parser for tweets.json to make sure they fit the criteria to be posted
*/
Twitter = require('twitter');
const fs = require('fs');
const config = {
    consumer_key : "XAMEtQXptUovE9bdIRIAeGgOC",
    consumer_secret : "dZQvmmrLlipFjMh1tOUZh889Cyn0XloN2KYV8vnBmHF1m4crRN",
    access_token_key : "14260781-jWeLckJk7YKxx2maS5SvjW6jQywWKNOhn6Pb6M2zR",
    access_token_secret : "hsJYfTX4IkYIKwuIRvLxX3kZTOzIUM7m7ThYOklqMP76y"
};

const usernames = [
    "dril",
    "BaskingBall1",
    "garfielf_bot",
    "superpiss",
    "ilovesmokingmid",
    ""

];

let params = {
    screen_name: "",
    count: 25,
    result_type: 'recent',
    lang: 'en'
};

let trueIndex = params.count * usernames.length;
let fakeIndex = 1;

const T = new Twitter(config);

const storeTweetsFunction = function (tweet) {
   fs.appendFile('tweets.json', tweet + ',', function(err){
       if(err){ throw err;}
   });
};

const createTweetObj = function (index, number, message,) {

    const tweet = {
        index:index,
        ID: number,
        content: message
    };
    return tweet;
};

const generateTweetFile = function () {
    console.time('full');

    if (!fs.existsSync("tweets.json")) {
        console.time("generate");
        fs.writeFile('tweets.json', '[', function (err) {
            console.log(err);
        });
        console.warn('generated tweets.json in ');
        console.timeEnd("generate");
    }
};

//generateTweetFile().then(storeTweetsFunction());
const getAPIandProcess = function() {
    T.get('statuses/user_timeline', params, function (err, data, res) {
        if (!err) {
            //console.time("in");
            const special = data.length;
            for (let i = 0; i < special; i++) {
                let IDSTRING = data[i].id_str;
                let CONTENT = data[i].text;
                let JSONformatted = JSON.stringify(createTweetObj(fakeIndex, IDSTRING, CONTENT), null, 2);
                storeTweetsFunction(JSONformatted);
                fakeIndex++;
                if (i == special) {
                    console.log("triggered");
                    //fs.readFileSync(a,b);
                }
            }
            //console.warn(`API cycled through ${data.length} tweets`);
            //console.timeEnd("in");
        }
    });
};

generateTweetFile();

usernames.forEach(function(username, index) {
    console.warn(`Now processing ${username} at index ${index}!`);
    getAPIandProcess(params.screen_name = username);
});

function closer () {
    //this isnt running
    console.log('ran');
    if (trueIndex == fakeIndex) {
        console.log('reached TrueIndex');
        fs.appendFileSync('tweets.json', `]`, function (err) {

            console.log(err);
        });
    }
}


console.timeEnd('full');
