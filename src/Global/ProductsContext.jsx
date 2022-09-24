import React, {createContext, useState} from 'react'
import dslr from "../assets/dslr.jpg"
import headphones from "../assets/headphones.jpg"
import iphone from "../assets/iphone.jpg"
import microphone from "../assets/microphone.jpg"
import perfume from "../assets/perfume.jpg"
import ring from "../assets/rings.jpg"
import shoes from "../assets/shoes.jpg"
import watch from "../assets/watch.jpg"
export const ProductsContext = createContext();


const ProductsContextProvider = (props) =>{
    const [products] = useState([
        {id: 1, name: 'Dslr', price: 300, image: dslr, status: 'hot'},
        {id: 2, name: 'Headphones', price: 250, image: headphones, status: 'new'},
        {id: 3, name: 'Iphone', price: 5000, image: iphone, status: 'new'},
        {id: 4, name: 'Microphone', price: 800, image: microphone, status: 'hot'},
        {id: 5, name: 'Perfume', price: 100, image: perfume, status: 'new'},
        {id: 6, name: 'Rings', price: 80, image: ring, status: 'hot'},
        {id: 7, name: 'Shoes', price: 120, image: shoes, status: 'hot'},
        {id: 8, name: 'Watch', price: 700, image: watch, status: 'new'},
    ]);
    return(
       <ProductsContext.Provider value={{products: [...products]}}>
         {props.children}
       </ProductsContext.Provider>
    )
}

export default ProductsContextProvider;