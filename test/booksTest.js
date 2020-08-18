// Alessandra Lima
// Course: IT122  (Week 3 - Quality Assurance)
// File: booksTest.js
// Desc: Create a test script file in your /test folder, with Mocha+Chai test cases for your 'getItem', 
//    'addItem' and 'deleteItem' methods. Create tests for both success & failure conditions. 
//     All six test cases should pass when run via Mocha.     


const expect = require("chai").expect;
const selectBook = require("../data.js"); //modules being tested

describe('Testing Books Module (data.js)', () => {
    
//test cases for success and failure conditions for getItem method
    describe("get selectBook item", () => {
        it("returns requested book", () => {
            const result = selectBook.getItem("Harry Potter and the Prisoner of Azkaban");
            console.log(result.book);
            expect(result.book).to.deep.equal({title:"Harry Potter and the Prisoner of Azkaban" , author:"J K Rowling", year: 1999, ranking: 1});
          });
          
          it("fails with invalid book", () => {
            const result = selectBook.getItem("The Power of Now");
            expect(result.status).to.be.false;
          });
    });

    //test cases for success and failure conditions for addItem method
    describe("add book", () => {
        it("should add the new book to the array", () => {
            let newTitle = {
                title: "The Power of Now",
                author: "Eckhart Tolle",
                year: 1997,
                ranking: 6
            };
            const result = selectBook.addItem(newTitle);
            expect(result.status).to.be.true;
          });

          it("fails if data already exists in array", () => {
            let newTitle = {
                title: "Harry Potter and the Sorcerer Stone",
                author:"J K Rowling",
                year: 1997,
                ranking: 5
            }; 
            const result = selectBook.addItem(newTitle);
            expect(result.status).to.be.false;
          });
    }); 

    //test cases for success and failure conditions for deleteItem method
    describe("delete book", () => {
        it("should delete a book from the array", () => {
            let result = selectBook.deleteItem("Harry Potter and the Half-Blood Prince");
            expect(result.status).to.be.true;
        });

        it("fails if data doesn't exist in the array", () => {
          let result = selectBook.deleteItem("Emma");
          expect(result.status).to.be.false;
      });
    });
   });




