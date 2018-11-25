const mongoose = require('mongoose')
const Schema = mongoose.Schema

const expenseSchema = new Schema(
    {
        id: String,
        accountFrom: {
            type: String,
            ref: 'Account',
        },
        accountTo: {
            type: String,
            ref: 'Account',
        },
        category: {
            type: String,
            ref: 'Category',
        },
        date: Date,
        description: String,
        price: Number,
        type: String,
    },
    { timestamps: true }
)

module.exports = mongoose.model('Expense', expenseSchema)
