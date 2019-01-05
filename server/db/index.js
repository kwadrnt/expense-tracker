const mongoose = require('mongoose')

const { LOCAL_ENDPOINT, ALT_LOCAL_ENDPOINT } = require('./constants/endpoints')

const mongoHost = process.env.DB_ENDPOINT || LOCAL_ENDPOINT

mongoose.connect(mongoHost)
    .catch(() => {
        if (mongoHost === LOCAL_ENDPOINT) { mongoose.connect(ALT_LOCAL_ENDPOINT) }
    })

const db = mongoose.connection
db.on('error', console.error.bind(console, 'Connection ERROR: ')) // eslint-disable-line no-console
db.once('open', () => { console.log('Connected to database...') }) // eslint-disable-line no-console

