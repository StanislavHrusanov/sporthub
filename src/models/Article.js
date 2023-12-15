const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    views: {
        type: Number
    },
    comments: [
        {
            owner: {
                type: mongoose.Types.ObjectId,
                ref: 'User'
            },
            comment: {
                type: String
            }
        }
    ]
}, { timestamps: true });

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;