const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    sport: {
        type: String,
        required: true
    },
    league: {
        type: String
    },
    title: {
        type: String,
        required: true
    },
    text: {
        type: Array,
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
        type: Number,
        default: 0
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