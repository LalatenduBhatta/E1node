const evetEmitter = require("events")

const event = new evetEmitter()

//creating events
event.on("msg", () => {
    console.log("msg event executed");
})

//calling evnets
event.emit("msg")
