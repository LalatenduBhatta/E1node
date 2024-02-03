const http = require("http")

const app = http.createServer((req, res) => {
    console.log(req.url, req.method);
    if (req.method == "GET") {
        if (req.url == "/") {
            res.write("<h1><marquee>Welcome to home page</marquee></h1>")
            res.end()
        }
        else if (req.url == "/about") {
            res.write("<h1>Welcome to ABOUT page</h1>")
            res.end()
        }
        else if (req.url === "/contact") {
            res.write("<h1>Welcome to Contact page</h1>")
            res.end()
        } else {
            res.write("<h1>Page not found!!!!</h1>")
            res.end()
        }
    }
})


app.listen(5555, () => {
    console.log("server started at port 5555");
})