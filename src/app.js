const path = require("path")

// imports express package we installed with npm
const express = require("express")

// initialized express application 
const app = express()

// import router from router.js
const router = require("./router")

//configure middleware functions
app.use(express.urlencoded({ extended: false }))

//converts all incoming json data
app.use(express.json())

//tells express to have access to everything in the public folder
app.use(express.static("public"))

// tells express to look for views in a directory called views
app.set("views", "views")

// tell express to use handlebars as the view engine
app.set("view engine", "hbs")

// tell the app to use the router we set up
app.use("/", router )

// Setup server to listen to requests
app.listen(3000, () => {
    console.log("The server is now running on Port 3000")
})