const mongoose = require('mongoose')
const Schema = mongoose.Schema

const expenseSchema = new Schema({
    date: Date,
    description: String,
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
    },
    price: Number,
    account: {
        type: Schema.Types.ObjectId,
        ref: 'Account',
    },
    timestamps: true,
})

module.exports = mongoose.model('Expense', expenseSchema)
