require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
const products_controller = require('./products_controller')

const app = express();
app.use(json());

massive(process.env.CONNECTION_STRING)
.then( db => {
    app.set("db", db)
    console.log("Database Connected")
}).catch(err => console.log(err))


//GET
app.get("/api/products", products_controller.getAll);

//GET
app.get("/api/products/:id", products_controller.getOne);

//PUT
app.put("/api/products/:id", products_controller.update);

//POST
app.post("/api/products", products_controller.create);

//DELETE
app.delete("/api/products/:id", products_controller.remove);












const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Listening on port ${port}`));