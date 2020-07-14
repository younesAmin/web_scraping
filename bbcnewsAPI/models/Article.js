const mongoose = require('mongoose');


const articleSchema = mongoose.Schema({
    title: {
        type: Array
    },
    summary: {
        type: Array
    },
    url: {
        type: Array
    },
    category: {
        type: Array
    },
    img_url: {
        type: Array
    }
})

module.exports = mongoose.model('articles', articleSchema);