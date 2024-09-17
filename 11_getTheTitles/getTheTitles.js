const getTheTitles = function(books) {
    // res = [];
    // books.forEach(book => {
    //     res.push(book.title);
    // })

    // return res;

    return books.map((book) => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
