const http = require("http");

const PORT = 3000;
const SERVER_START_MESSAGE = "YEAY boi it's lit all up in here.";

const server = http.createServer((request,response)=>{
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('My MAN\n');
})

server.listen(PORT,()=>{
	console.log(SERVER_START_MESSAGE);
});


