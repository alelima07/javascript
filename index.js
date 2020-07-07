const http = require('http');
const books = require('./data.js');
let booksItems = books.getAll();


http.createServer((req, res) => {
    const path = request.url.toLowerCase();
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
}).listen(process.env.PORT || 3000);
            
    }
    