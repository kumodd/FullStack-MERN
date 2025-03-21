//simulatiing a data base (in memory product store)
const products=[
    {
        id:1,name:"Laptop",price:2999
    },
    {
        id:2,name:"Phone",price:12999
    },
    {
        id:3,name:"Watch",price:999
    }
];

//Get all the products
const getProducts=(req,res)=>{
    console.log("Controller: Fetching all the products for user",req.user);
    res.json(products);
}

//Get a single product by Id
const getProductById=(req,res)=>{
    const productId=parseInt(req.params.id);
    console.log("Controller: Fetching product by ID",productId);
    const productItem=products.find(p=>p.id===productId);
    
    if(!productItem){
        return res.status(404).json({message:"No Product found"});
    }
    res.json(productItem)
}

//add a new product method from admin panel
const addProduct=(req,res)=>{
    console.log("Controller: adding product", newProduct);

    const {name,price}=req.body;
    const newProduct={
        id:products.length + 1,
        name,
        price,
    };
    products.push(newProduct);
    console.log("Controller: new product added", newProduct);
    res.status(201).json(newProduct);

};

module.exports={getProducts,getProductById,addProduct};