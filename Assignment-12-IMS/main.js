const express = require("express");
const app = express();
const productRoutes = require("./routes/product.routes");

app.use(express.json());
app.use(productRoutes);

let port = 8083;

app.listen(port,() =>{
    console.log(`Server is running on ${port}`);
})