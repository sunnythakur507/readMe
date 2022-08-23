const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Sending logs to readme with NodeJs!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


const readme = require('readmeio');



const sdk = require('api')('@developers/v2.0#1yl2ql5lb604m');

sdk.auth('rdme_xn8s9h9ef2900fee84f9cb3d4838794387b0c27c875ce1d5d8081c14c32a4f2926f868');
sdk.getProject()
  .then(res => console.log(res))
  .catch(err => console.error(err));
