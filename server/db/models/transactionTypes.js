const mongoose = require('mongoose')
const Schema = mongoose.Schema

const transactionTypeSchema = new Schema(
    {
        id: String,
        name: String
    }
)

module.exports = mongoose.model('TransactionType', transactionTypeSchema)
