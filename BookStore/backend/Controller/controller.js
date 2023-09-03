const bookmodel = require('../Model/schema');

// Get from database
const getBooks = async (req,res)=>{
    const books = await bookmodel.find();
    res.send(books);
}
//add to the database
const addBook = async (req,res)=>{
    const { bookId,bookImage,title,author, description,price,category} = req.body;
    bookmodel.create({bookId,bookImage,title,author, description,price,category})
        .then((data) => {
            console.log(`${title} Saved Successfully....`)
            res.status(201).send(data);
        })
        .catch((err)=>{
            console.log(`${title} Failed to save...`)
            res.send(err)
        })
}
// update item from the database
const updateBook = async (req,res)=>{
    const {id} = req.params;
    const { bookId,bookImage,title,author,description,price,category} = req.body;
    
    bookmodel.findByIdAndUpdate(id,{bookId,bookImage,title,author, description,price, category})
        .then(() => {
            console.log('updated successfully...')
            res.send(`${title} updated successfully..`)
        })
        .catch((err) => { 
            console.log(`Failed to update ${title}`)
            res.send(err);
        })
   
}
// delete item from the database
const deleteBook = async (req,res)=>{
    const {id} = req.params;

    bookmodel.findByIdAndDelete(id)
        .then(() => {
            console.log(`deleted successfully..`)
        })
        .catch((err) =>{
            console.log(`failed to delete...`)
            res.send(err)
        })
}


module.exports = {getBooks,addBook,updateBook,deleteBook}; 