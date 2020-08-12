let books = [
    {
        title: 'Harry Potter and the Prisoner of Azkaban',
        author: 'J K Rowling',
        year: 1999,
        ranking: 1
    }, 
    {
        title: 'Harry Potter and the Deathly Hallows',
        author: 'J K Rowling',
        year: 2007,
        ranking: 2
    }, 
    {
        title: 'Harry Potter and the Half-Blood Prince',
        author: 'J K Rowling',
        year: 2005,
        ranking: 3
    }, 
    {
        title: 'Harry Potter and the Order of the Phoenix',
        author: 'J K Rowling',
        year: 2003,
        ranking: 4
    }, 
    {
        title: 'Harry Potter and the Sorcerer Stone',
        author: 'J K Rowling',
        year: 1997,
        ranking: 5
    }
];
exports.getAll = () => {
return books;
}


// export method that returns full data about the requested item
exports.getItem = title => {
    const selectBook = books.find(books => books.title === title); 
    if (selectBook === undefined){
        return {status: false, message: "book does not exist"};
    }
    else{
        return {status: true, message:"Book found in array", book: selectBook};
    }
}

// export method that adds a new item to the data array, if it doesn't already exist
exports.addItem = (newBook) => {
    let bookIndex = books.findIndex(books => books.title === newBook.title);
    if(bookIndex != -1) { 
        return {status: false, message: "book already exists"};
    }
    else{ //if it doesn't already exist, add it to the array
        books.push(newBook);
        return {status: true, message: "new book successfully added to the array"};
    }
} 

//export method that deletes the requested item
exports.deleteItem = title => {
    let bookIndex = books.findIndex(books => books.title === title);
    if(bookIndex != -1) {
        books.splice(bookIndex, 1);
        return {status: true, message: "Book successfully deleted from the array"};
    }
    return {status: false, message: "Book does not exist in the array"}
    
}
