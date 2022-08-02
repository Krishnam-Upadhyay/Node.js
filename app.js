const { response } = require('express')
const express = require('express')
const app = express()
const path = require('path')


app.use((req,res,next)=>{
    console.log(req.method,req.path)
    next()
})

app.use(express.urlencoded({extended:false}))


//built in middle for json
app.use(express.json())

//serve static files
app.use(express.static(path.join(__dirname,"/files")))

app.get("^/$|/index(.html)?", (req, res) => {
    res.sendFile(path.join(__dirname, "files", "index.html"))
})
app.get("/newpage(.html)?", (req, res) => {
    res.sendFile(path.join(__dirname, "files", "newpage.html"))
})
app.get("/oldpage(.html)?", (req, res) => {
    res.redirect(301,"newpage.html")
})
app.get("/*",(req,res) =>{
    res.status(404).sendFile(path.join(__dirname, "files", "404.html"))
})


app.listen(5000, () => console.log("server started on port number 5000:"))
