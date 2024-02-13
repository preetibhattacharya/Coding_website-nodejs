const express = require("express");
require("./src/db/conn");
const User = require("./src/models/userschema")
const bodyParser = require("body-parser")



const hbs = require("hbs")
//const { registerPartial } = require("hbs")
const path = require("path");
//const { urlToHttpOptions } = require("url");
const app = express();
const port = process.env.PORT || 3000;

const viewpath = path.join(__dirname, "./templates/views")
const partialpath = path.join(__dirname, "../templates/partials")
const staticpath = path.join(__dirname, "public")
const imgpath = path.join(__dirname, "../public/images")

app.use("/css", express.static(path.join(__dirname, "/node_modules/bootstrap/dist/css")))
app.use("/js", express.static(path.join(__dirname, "/node_modules/bootstrap/dist/js")))
app.use("/jq", express.static(path.join(__dirname, "/node_modules/jquery/dist")))

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.static(staticpath))
app.use(express.static(imgpath))
//app.use(bodyParser.json())
//app.use(bodyParser.urlencoded({extended:false}))
//app.use(express.static(partialpath))

app.set("view engine", "hbs")
app.set("views",viewpath)
hbs.registerPartials(partialpath)

//app.engine("hbs",handlebars({__dirname,"../views"}))
app.get("/", (req, res) => {
    res.render("index")
})
app.post("/contact",async (req, res) => {
    try {
        const data = new User(req.body)
        await data.save();
        res.status(201).render("index")
    } catch (error) {
        res.status(500).send(error)
    }
    
})
app.listen(port, () => {
    console.log(`server is running at port ${port}`);
}

)
