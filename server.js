const http = require("http");

const PORT = 3000;
const SERVER_START_MESSAGE = "YEAY boi it's lit all up in here.";

const server = http.createServer((request,response)=>{

	response.setHeader('Content-Type', 'text/plain');

	if(request.url === "/")
	{
		response.write("Da BASics\n");		
	}
	else {
		response.write("Sum OTHER stuff\n");			
	}

  response.statusCode = 200;
 return response.end('My MAN\n');
})

server.listen(PORT,()=>{
	console.log(PORT + " " + SERVER_START_MESSAGE);
});


