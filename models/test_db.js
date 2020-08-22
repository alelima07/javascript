'use strict'

const books = require("./books")

books.find({}, (err, result) => {
    //output error if it occurs
    if(err){
        console.log(err);
    }
    else{ //otherwise output the array
        console.log(result);
    }
    return
});