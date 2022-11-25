import axios from "axios";
import { requestObject, Product } from "../models/products.models";



 const url= axios.create({
    baseURL:'https://dummyjson.com/products'
}
)

export  const getProductList=async ()=>{
    const response =  await url.get<requestObject>('?limit=100');
    const ProductList:Product[]=response.data.products
   
     return ProductList
    
}