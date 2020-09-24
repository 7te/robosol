import * as utils from "./utils.js";
const Discord = require("discord.js");
const lodash = require("lodash");
const client = new Discord.Client();

const playerStock = [
    {name="sol", uid="204060249827704832", value="100", cash="200"},
    {name="rfunk", uid="118137338369933313", value="100", cash="200"},
    {name="chrvs", uid="163176601280970752", value="100", cash="200"},
    {name="bombu", uid="131839120526934016", value="100", cash="200"},
    {name="slumpfy", uid="166494684896559104", value="100", cash="200"},
    {name="ang", uid="397994368767754260", value="100", cash="200"},
    {name="dane", uid="226744542408212482", value="100", cash="200"},
    {name="mattakuma", uid="272656844894502913", value="100", cash="200"},
    {name="mo2", uid="197082217283977226", value="100", cash="200"},
    {name="exaroh", uid="244280969551413249", value="100", cash="200"},
    {name="jord", uid="112397143179866112", value="100", cash="200"},
    {name="coldwell", uid="152256820218429441", value="100", cash="200"},
    {name="armos", uid="212814853264506881", value="100", cash="200"},
    {name="sparkie", uid="187937261948502016", value="100", cash="200"},
    {name="cap", uid="149238310286393344", value="100", cash="200"},
]

let allowance = 20;



const valueChange = function (user, name, buy, sell) {

    if (user === buy){
        playerStock.value += buy;
    }

    if (user === sell){
        playerStock.name.value - sell;
    }
}
