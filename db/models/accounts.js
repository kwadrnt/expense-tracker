const mongoose = require('mongoose')
const { Schema } = mongoose

const accountSchema = new Schema(
    {
        id: String,
        name: String,
        balance: {
            type: Number,
            default: 0,
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model('Account', accountSchema)
