const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    text: {
        type: String,
        requireed: [true,  'Please add a text value']
    }
    }, {
        timestamps: true,
    }
)

module.exports = mongoose.model('Todo', todoSchema);