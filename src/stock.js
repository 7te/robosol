import * as utils from "./utils.js";
import * as config from "./config.json"
const Discord = require("discord.js");
const lodash = require("lodash");
const client = new Discord.Client();


/*
    TODO: decide how often to fluctuate stocks, improve the data structure in config.json
*/

//this should be in a .json but i want to get to an alpha state first :)
const playerStock = config;


let allowance = 20;
const prefix = config.prefix

const marketFluctuates = function (){

}

const buySellStocks = function (user, name, buy, sell) {

    if (user === buy){
        config.user += buy;
    }

    if (user === sell){
        playerStock.name.value - sell;
    }
}
