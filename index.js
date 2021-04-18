const express = require('express')
const app = express()
const port = process.env.PORT || 5055;

app.get('/', (req, res) => {
  res.send('Shikkhok Server Site Locally Connected')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})