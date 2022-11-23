import axios from "axios";
import { requestObject, Product } from "../models/products.models";



 const url= axios.create({
    baseURL:'https://dummyjson.com/'
}
)

export  const getProductList=async ()=>{
    const response =  await url.get<requestObject>('products');
    const ProductList:Product[]=response.data.products
   
     return ProductList
    
}