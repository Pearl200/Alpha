const mongoose = require('mongoose')

const bookSchema =new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    author :{
        type:String,
        required: true
    },
    publishDate:{
        type:Date,
        required: true
    },
    id:{
        type:Number,
        required: true
    },
    pagesCount:{
        type:Number,
        requiured: true
    },
    createdAt:{
        type:Date,
        requiured:true,
        default:Date.now
    }
})




module.exports = mongoose.model('Book',bookSchema)