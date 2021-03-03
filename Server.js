const http = require('http')
const url = require('url');
const PORT = 5000

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/json' });
    if (req.url.includes('/hello/')) {
        const name = req.url.split("/").pop()
        res.end(JSON.stringify({ hello: name }))
    } else {
        res.statusCode = 404
        res.end(JSON.stringify({
            statusCode: res.statusCode,
            message: 'not found'
        }))
    }
});
server.listen(PORT, () => console.log(`Server listening on port ${PORT}`))

