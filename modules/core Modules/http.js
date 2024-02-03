const http = require("http")

let server = http.createServer();

server.on("request", (req, res) => {
    res.write("<h1>HELLO FROM HTTP SERVER</h1>")
    res.end()
})

server.listen(8000, () => {
    console.log("server started");
})