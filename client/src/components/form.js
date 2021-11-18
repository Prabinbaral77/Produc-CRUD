import React,{useState} from "react"
import {Link} from 'react-router-dom'
const axios = require('axios').default;

const Form = () => {
    const [productName, setProductName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [ingredients, setIngredienets] = useState("")
    
    const submitHandler = async (e) => {
        e.preventDefault()
       
        await axios.post('http://localhost:5000/product', {
                    itemName: productName,
                    price: price,
                    description: description,
                    ingredients: ingredients
                })
          .then(function (response) {
            window.location.href = "/"
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }


    return (
       <div>
           <h2 className="text-center underline font-semibold text-2xl mt-16">Add Products</h2>
           <form className="mt-20 space-y-16" onSubmit={submitHandler}>
               <div className="text-center">
                    <h2 className="mb-5 text-semibold text-blue-500 text-xl">Enter Product Name: </h2>
                    <input type="text" placeholder="Apple" required="true" className="outline-none border-b-4 text-xl" value={productName} onChange={(e)=> setProductName(e.target.value)} />
               </div>
               <div className="text-center">
                    <h2 className="mb-5 text-semibold text-blue-500 text-xl">Price: </h2>
                    <input type="text" placeholder="45" required="true" className="outline-none border-b-4 text-xl" value={price} onChange={(e)=> setPrice(e.target.value)} />
               </div>
               <div className="text-center">
                    <h2 className="mb-5 text-semibold text-blue-500 text-xl">Description: </h2>
                    <input type="text" placeholder="It is apple description" required="true" className="outline-none border-b-4 text-xl" value={description} onChange={(e)=> setDescription(e.target.value)}  />
               </div>
               <div className="text-center">
                    <h2 className="mb-5 text-semibold text-blue-500 text-xl">Ingredients: </h2>
                    <input type="text" placeholder="aa bb cc" required="true" className="outline-none border-b-4 text-xl" value={ingredients} onChange={(e)=> setIngredienets(e.target.value)}  />
               </div>
               <div className="flex justify-center space-x-6 flex-row">
                   <input type="submit" value="Submit" className="text-white cursor-pointer font-semibold hover:bg-blue-700 bg-blue-400 px-8 py-3 rounded-lg"/>
                 <Link to="/">
                   <p className="text-center font-semibold text-red-700 cursor-pointer hover:text-red-400">cancel</p>
                 </Link>
               </div>
           </form>
       </div>
    )
}

export default Form