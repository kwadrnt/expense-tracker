const mongoose = require('mongoose')
const Schema = mongoose.Schema

const transactionSchema = new Schema(
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
        type: {
            type: String,
            ref: 'TransactionType',
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model('Transaction', transactionSchema)
