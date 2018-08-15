let books = [],
    id    = 0;

    module.exports = {
        read: (req, res) => {
            res.status(200).send(books);
        },
        create: (req, res) => {
            const { title, author } = req.body;
            let newBook = {
                id: id,
                title: title,
                author: author
            }
            id++
            books.push(newBook)
            res.status(200).send(books);
        },
        update: (req, res) => {
            const { id } = req.params;
            const { title, author } = req.body;
            let index = books.findIndex(book => book.id == id);
            if (index !== -1) {
                books[index] = {
                    title: title,
                    author: author,
                    id: id
                }
                res.status(200).send(books);
            } else {
                res.status(400).send('Book not found.')
            }
        },
        delete: (req, res) => {
            const { id } = req.params;
            let index = books.findIndex(book => book.id == id);

            if(index !== -1) {
                books.splice(index, 1);
                res.status(200).send(books);
            } else {
                res.status(400).send('No book for you!');
            }
        }
    };