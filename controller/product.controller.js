const productModel = require("../model/product-model");

// To get all product information method:GET
const getallProducts = (req,res) => {
    if(productModel.length ===0){
        res.status(404).json({message: "No Products Found"});
    }
    res.status(200).json(productModel);
}


// To get products by ID method: GET
const getproductByid =(req,res) =>{
    const id = Number(req.params.id);
    const searchProduct = productModel.find(data => data.id ===id);
    if(!searchProduct){
        res.status(404).json({message: "Product Not Found"});
    }
    res.status(200).json(searchProduct);
}

// To add new product method: POST
const addnewProduct = (req,res) => {
    const{name, price, description, stock} = req.body;
    if(!name || !price || !description || !stock){
        res.status(400).json({message: "Please provide all required fields"});
    }
    const newProduct = {
        id: Date.now(),
        name,
        price,
        description,
        stock
    }
    productModel.push(newProduct);
    res.status(201).json({message: "Product added successfully"});
}


// To update product by ID method: PUT
const updateProduct = (req,res) =>{
    const id = Number(req.params.id);
    const{ name, price, description, stock} = req.body;
    const searchProduct = productModel.find(data => data.id ===id);
    if(!searchProduct){
        res.status(404).json({message: "Product Not Found"});
    }
    searchProduct.name = name || searchProduct.name;
    searchProduct.price = price || searchProduct.price;
    searchProduct.description = description || searchProduct.description;
    searchProduct.stock = stock || searchProduct.stock;
    res.status(200).json({message: "Product updated successfully"});
}


// To delete product by ID method: DELETE
const deleteProduct = (req,res) =>{
        const id = Number(req.params.id);
        const searchProduct = productModel.find(data => data.id ===id);
        if(searchProduct == -1){
            res.status(404).json({message: "Product Not Found"});
        }
        productModel.splice(searchProduct,1);
        res.status(200).json({message: "Product deleted successfully"});
}


    module.exports = {
    getallProducts,
    getproductByid,
    addnewProduct,
    updateProduct,
    deleteProduct
};
