const express = require('express')
const graphqlHTTP = require('express-graphql').graphqlHTTP
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')


const app = express()
const port = process.env.PORT

// Allow cross-origin requests
app.use(cors())

mongoose.connect(process.env.MONGODB_URL)
mongoose.connection.once('open', () => {
    console.log('connected to database')
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(port, () => {
    console.log('now listening for requests on port' + port )
})