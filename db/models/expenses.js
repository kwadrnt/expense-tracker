const mongoose = require('mongoose')
const Schema = mongoose.Schema

const expenseSchema = new Schema(
    {
        id: String,
        date: Date,
        description: String,
        category: {
            type: String,
            ref: 'Category',
        },
        price: Number,
        account: {
            type: String,
            ref: 'Account',
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model('Expense', expenseSchema)
