const mongoose = require('mongoose')
const { Schema } = mongoose

const accountSchema = new Schema(
    {
        id: Number,
        name: String,
        balance: {
            type: Number,
            default: 0,
        },
        expenses: [ {
            type: Schema.Types.ObjectId,
            ref: 'Expense',
        } ],
    },
    { timestamps: true }
)

module.exports = mongoose.model('Account', accountSchema)
