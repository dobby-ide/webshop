import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {faTrashAlt, faPlus, faMinus} from "@fortawesome/free-solid-svg-icons";

const ShoppingCart = ()=>{
    const [cartList, setCartList] = useState([])
    const url = "http://localhost:3010/cart";

    const getCartItems = () =>{
        fetch(url)
        .then(response => response.json())
        .then(data=>setCartList(data))
    }
    useEffect(()=>{getCartItems()}, [true]);

    const reduceItem = (id)=>{
        const itemTochange = cartList.find((element)=>element.id===id);
        

    }
    const handleChange =()=>{}
    return(
        <div>
            <h2>Shopping Cart</h2>
           <table width="75%">
            <tbody>
                <tr>
                    <td colSpan="2" rowSpan="2">Product</td>
                    <td colSpan="2">Description</td>
                    <td>Quantity</td>
                    <td>Price</td>
                </tr>
            </tbody>
            {cartList
                .map(item=>{
                return(<tbody key={item.id}>
                    <tr>
                        <td colSpan="2"><img src={item.image} alt="image unavailable" className="products_img" ></img></td>
                        <td colSpan="2">{item.title} </td>
                        <td>
                            <FontAwesomeIcon icon={faMinus} onClick={()=>reduceItem(item.id)} />
                            <input type="text" name='quantity' id='quantity' value={item.quantity} onChange={handleChange} />
                            <FontAwesomeIcon icon={faPlus}/>
                        </td>
                        <td>{item.price} € </td>
                        <td> <FontAwesomeIcon                                
                                icon={faTrashAlt}                               
                              /></td>
                    </tr>
                </tbody>)
                })}
            
           </table>
        </div>
    )
}
export default ShoppingCart;