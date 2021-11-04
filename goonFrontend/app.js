const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('hello.html').pipe(res)
})

server.listen(process.env.PORT || 3000)

const userAction = async () => {
  const response = await fetch('https://goon-backend.herokuapp.com/');
  const myJson = await response.json();
  console.log(myJson)
}

function yerr() {
  console.log("yerr")
}