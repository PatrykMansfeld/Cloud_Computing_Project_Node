const http = require('http');

const server = http.createServer((req, res) => {
if(req.url ==='/data'){
    if (req.method === 'GET'){
        
    }
    else if (req.method === 'POST'){

    }
    else {
        res.writeHead(405, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({message:"ERROR, Method not allowed :c"}));
    }
}
else {
    res.writeHead(404, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({message:"ERROR, Route not found :c"}));
}

});

const PORT = process.env.PORT || 5000;
server.listen(PORT, ()=> console.log(`dziala: port ${PORT}`));