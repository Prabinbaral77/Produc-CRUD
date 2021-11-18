const express = require("express")
const cors = require("cors")
require('./db/mongoose')
const productRouter = require('./routers/product')
const app = express()

app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "DELETE", "PATCH"]
    })
)

app.use(express.json())
app.use(productRouter)


app.listen(5000, (req, res) => {
    console.log("server running on port 5000");
})

// sudo service mongod start, 
//  sudo pkill node