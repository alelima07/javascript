// Alessandra Souza Lima
// Course: IT122 - Seattle Central College
// File: index.js

'use strict'

const express = require("express");
const bodyParser = require("body-parser");

const books = require("./models/books"); 

const app = express();
const exphbs = require('express-handlebars');

//const selectBook = require('./data.js'); // reference the information in the data.js file
//const selectBookItems = selectBook.getAll(); // get all of the books items


app.engine('handlebars', exphbs({defaultLayout: false}));

app.set("view engine", "handlebars");

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public')); // set location for static files

//Parse form submissions
app.use(bodyParser.urlencoded({extended: true})); // parse form submissions
app.use(bodyParser.json());

// set Access-Control-Allow-Origin header for api routes
app.use('/api', require('cors')());


// view detail page
// app.get('/detail', (req, res) => {
// const title = req.query.book; //query the book that was clicked
//console.log(title); 
//const displayBook = selectBook.getItem(title); //get all details for the book
// console.log(displayBook);
//res.type('text/html');
//res.render('detail', {title: title, details: displayBook.book}); 
 //});


// view homepage route - display books from mongo db
app.get('/', (req, res, next) => {
  return books.find({}).lean()
    .then((books) => {
    //res.render('home', { books});
    res.render('home-react', {books: JSON.stringify(books)});
      console.log(books);
  })
    .catch(err => next(err));
 })

// GET ALL - API
// update/add route
app.get('/api/books', (req, res) => {
  return books.find({}).lean() 
     .then(books => {
         res.json(books)
     })
     .catch(err => {
      res.status(500).send('Error occurred: database error')})
     })


 // view detail route - display the details of the books from mongodb
  app.get('/detail', (req, res) => {
  const title = req.query.title; //query the book that was clicked on
  books.findOne({title: title}).lean()
      .then((books) => {
      res.render('detail', {title: title, details: books});
      console.log(books);
  })
  .catch(err => next(err));
  });
     

// GET SINGLE ITEM - API
 app.get('/api/books/:title', (req, res) => {
     const title = req.params.title; 
     books.findOne({title: title})
     .then((book) => {
         if (book === null) {
             return res.status(400).send(`Error: "${title}" not found`)
         } else {
         res.json(book)
         }
     })
     .catch(err => {
         res.status(500).send('Error occurred: dabatase error', err)
     })
     })


//delete route
app.get('/delete', (req, res) => {
  const title = req.query.title; 
  books.deleteOne({title: title}).lean()
    .then((result) => {
       res.send(result.deletedCount > 0 ? title + ' deleted' : title + ' not in database');
    })
    .catch(err => next(err));
}); 
 

// DELETE SINGLE ITEM - API
 app.get('/api/books/delete/:title', (req, res) => {
     const title = req.params.title; 
     books.findOneAndDelete({title: title})
     .then(book => {
         if(book === null) {
             return res.status(400).send(`Error: "${title}" not found`)   
         } else {
             res.json(book)}
     })

     .catch(err => {
         res.status(500).send('Error occurred: dabatase error', err)
     })
 })

 // UPDATE/ADD SINGLE ITEM - API
 
 app.post('/api/books/add', (req, res) => {
     //const title = req.params.title;
     delete req.body["_id"];
     books.updateOne({title: req.body.title}, req.body, {upsert: true, new: true})
     .then(book => {
         res.json(book)
     })
     .catch(err => {
         res.status(500).send('Error occurred: dabatase error', err)
     })
 })



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
            

    
