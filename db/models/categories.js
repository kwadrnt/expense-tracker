const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({
    id: String,
    name: String,
})

module.exports = mongoose.model('Category', categorySchema)
