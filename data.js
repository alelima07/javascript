let books = [
    {
        book: 'Harry Potter and the Prisoner of Azkaban',
        author: 'J K Rowling',
        year: 1999,
        ranking: 1
    }, 
    {
        book: 'Harry Potter and the Deathly Hallows',
        author: 'J K Rowling',
        year: 2007,
        ranking: 2
    }, 
    {
        book: 'Harry Potter and the Half-Blood Prince',
        author: 'J K Rowling',
        year: 2005,
        ranking: 3
    }, 
    {
        book: 'Harry Potter and the Order of the Phoenix',
        author: 'J K Rowling',
        year: 2003,
        ranking: 4
    }, 
    {
        book: 'Harry Potter and the Sorcerer Stone',
        author: 'J K Rowling',
        year: 1997,
        ranking: 5
    }
];
exports.getAll = () => {
return books;
}