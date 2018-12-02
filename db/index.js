const mongoose = require('mongoose')

mongoose.connect(process.env.DB_ENDPOINT)

const db = mongoose.connection
db.on('error', console.error.bind(console, 'Connection ERROR: ')) // eslint-disable-line no-console
db.once('open', () => { console.log('Connected to database...') }) // eslint-disable-line no-console

