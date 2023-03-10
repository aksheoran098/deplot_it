const express = require("express")
const app = express();
const dotenv = require("dotenv");  
const path = require('path');


dotenv.config({path: "config.env"})
const home = require("./homeRouter.js")
const connectDatabase = require("./database.js");
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views' ) );

app.use(express.urlencoded({extended: true}))
app.use(express.json())



app.use('/',home)

connectDatabase().then( ()=>{
    app.listen(process.env.PORT, ()=>{
        console.log(`server running successfully`)
    }) 
}
)