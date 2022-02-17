const mongoose = require('mongoose');

const todoSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            requireed: true,
            ref: 'User'
        },
        text: {
            type: String,
            requireed: [true,  'Please add a text value']
        }
    }, 
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Todo', todoSchema);