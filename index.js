const express = require('express')
const app = express()
const port = process.env.PORT || 5055;

app.get('/', (req, res) => {
  res.send('Shikkhok Server Site Locally Connected')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

const showTimes = () => {
  let result = '';
  const times = process.env.TIMES || 5;
  let i =0;
  for (i = 0; i < times; i++) {
    result += i + ' ';
  }
  return result;
}

app.get('/times', (req, res) => res.send(showTimes()))