import React, {useEffect, useState} from "react"
import {Link } from "react-router-dom";
import axios from 'axios';



const Product = (props) => {
    console.log(props)
    const [ products, setProducts] = useState([])
   
    
    useEffect(() => {
        async function fetchData(){
            const response = await axios.get('http://localhost:5000/product')
            
            setProducts(response.data)
            console.log(products)
        }
        fetchData()
    },[])

    const editHandler = async(id) => {
        window.location.href = `/updateProduct/${id}`
    }

    const deleteHandler = async (id) => {
        await axios.delete(`http://localhost:5000/product/${id}`)
        .then(function (response) {
            window.location.href = "/"
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
   

    return (
       <div className="mt-10 mx-96">
           <div className="flex space-x-96">
              <p className="font-semibold text-2xl text-red-500">Our Products</p>
              <Link to="/newProduct"><p className="font-semibold text-2xl text-blue-500 cursor-pointer">Add Products</p></Link>
           </div>
           <table class="table-fixed mt-16">
            <thead>
                <tr>
                    <th>SN</th>
                    <th>ProductName</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Ingredients</th>
                    <th>Action</th>
                </tr>
                
            </thead>
            <tbody>
                {/* {products.map((productObj,index,data1)=>(
                     <Data 
                     id={productObj.PId}
                     name={productObj.itemName}
                     price={productObj.price}
                     description={productObj.description}
                     ingredients={productObj.ingredients} />
                ))} */}
                {products.map(product => (
                     <tr>
                        <td>{product.PId}</td>
                        <td>{product.itemName}</td>
                        <td>{product.price}</td>
                        <td>{product.description}</td>
                        <td>{product.ingredients}</td>
                        <td className="flex space-x-8">
                            <p className="font-semibold text-blue-500 cursor-pointer" onClick={() => editHandler(product.PId)}>Edit</p>
                            <p className="font-semibold text-red-500 cursor-pointer" onClick={() => deleteHandler(product.PId)}>Delete</p>
                        </td>
                        
                    </tr>
                ))}
            </tbody>
            </table>
       </div>
    )
}

export default Product