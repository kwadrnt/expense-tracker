const mongoose = require('mongoose')
const { Schema } = mongoose

const accountSchema = new Schema(
    {
        id: String,
        name: String,
    },
    { timestamps: true }
)

module.exports = mongoose.model('Account', accountSchema)
