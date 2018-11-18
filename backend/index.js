const express = require('express')
const app         = express()
const port        = 3000
const dynamicPort = process.env.PORT
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(dynamicPort || port, () => console.log(`Example app listening on port ${port}!`))
