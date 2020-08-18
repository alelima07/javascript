// Alessandra Souza Lima
// Course: IT122 - Seattle Central College
// File: index.js

'use strict'
const express = require("express");
const exphbs = require('express-handlebars');
const bodyParser = require("body-parser")
const app = express();
const selectBook = require('./data.js'); // reference the information in the data.js file

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public')); // set location for static files
app.use(bodyParser.urlencoded({extended: true})); // parse form submissions

app.engine('handlebars', exphbs({defaultLayout: false}));
app.set("view engine", "handlebars");

const selectBookItems = selectBook.getAll(); // get all of the books items

// view homepage
app.get('/', (req, res) => {
  res.type('text/html');
  res.render('home', {selectBook: selectBookItems});
 });

 // view detail page
 app.get('/detail', (req, res) => {
  const title = req.query.book; //query the book that was clicked
  console.log(title); 
  const displayBook = selectBook.getItem(title); //get all details for the book
  console.log(displayBook);
  res.type('text/html');
  res.render('detail', {title: title, details: displayBook.book}); 
 });
 
 // view about page
 app.get('/about', (req, res) => {
  const aboutMe = `About Me: \n My name is Alessandra Lima and I am a full time student at Seattle Central studying Programming.`;
  res.type('text/plain');
  res.send(`${aboutMe}`);
 });

 // define 404 handler
app.use( (req,res) => {
  res.type('text/plain'); 
  res.status(404);
  res.send('404 Error - Page not found');
 });

 // start the web server
 app.listen(app.get('port'), () => {
  console.log(`Express started`); 
 });






//Code Assignment 1 //

/* const http = require('http');
const books = require('./data.js');
let booksItems = books.getAll();


http.createServer((req, res) => {
    const path = req.url.toLowerCase();
    switch(path) {
        
    case '/':
     const homePage = `Welcome! \n This is my first node app. I imported an array of books that has a length of ${booksItems.length}`;
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end(`${homePage}`);
      break;
    // display about me information
    case '/about':
      const aboutMe = `About Me: \n My name is Alessandra and I am a full time student at Seattle Central studying web development. I have experience in HTML, CSS, Python, JS, SQL, PHP, and Java.`;
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end(`${aboutMe}`);
      break;
    // display 404 error message for any other page
    default:
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('404 Error - Page not found');
      break;
    }
}).listen(process.env.PORT || 3000); */
            

    