const {Router} = require('express');
const { getBooks,addBook,updateBook,deleteBook } = require('../Controller/controller');

const router = Router();

router.get('/get', getBooks);
router.post('/add', addBook);
router.put('/update/:id', updateBook);
router.delete('/delete/:id', deleteBook);

module.exports = router