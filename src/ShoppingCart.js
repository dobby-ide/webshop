import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {faTrashAlt, faPlus, faMinus} from "@fortawesome/free-solid-svg-icons";

const ShoppingCart = ()=>{
    const [cartList, setCartList] = useState([])
    const url = "http://localhost:3010/cart";

    const getCartItems = () =>{
        fetch(url)
        .then(response => response.json())
        .then(data=>{
            setCartList(data)
        })
    }
    useEffect(()=>{getCartItems()}, [true]);
    const addItem = (id)=>{
        const itemToChange = cartList.find((element)=>element.id===id);
        console.log(itemToChange)
                let newQuantity=0;
            setCartList(cartList.map((item)=>{
            if(item.id===itemToChange.id){
                newQuantity = Number(itemToChange.quantity)+1
                return{
                    ...item,
                    quantity:newQuantity,
                }
            }
            return item;
        }));
        const options = {
        method: 'PATCH',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({quantity:newQuantity}),
        };
        fetch(url+"/"+id, options)
            .then((response) => response.json())
            .then((data) => {
                console.log(data.id + 'Updated successfully');
            });   
    }
    const reduceItem = (id)=>{
        const itemToChange = cartList.find((element)=>element.id===id);
        console.log(itemToChange)
        if(itemToChange.quantity>0){
            let newQuantity= itemToChange.quantity-1
            setCartList(cartList.map((item)=>{
            if(item.id===itemToChange.id){
                return{
                    ...item,
                    quantity:newQuantity,                    
                }
            }
            return item;
        }));
        const options = {
        method: 'PATCH',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({quantity:newQuantity}),
        };
        fetch(url+"/"+id, options)
            .then((response) => response.json())
            .then((data) => {
                console.log(data.id + 'Updated successfully');
            });
        }       
     }
     const deleteItem=(id) => {
        const updatedList = cartList.filter(element=>element.id!==id)
        setCartList(updatedList)
       fetch(url+"/"+id, {method:'DELETE'})
        .then(response => response.json())
        
        
    }
    
  
    return(
        <div>
            <h2>Shopping Cart</h2>
           <table width="100%">
            <tbody>
                <tr>
                    <td colSpan="2" rowSpan="2">Product</td>
                    <td colSpan="2">Description</td>
                    <td>Quantity</td>
                    <td>Price</td>
                </tr>
            </tbody>
            {cartList
                .map((item, index)=>{
                return(<tbody key={index}>
                    <tr>
                        <td colSpan="2"><img src={item.image} alt="image unavailable" className="products_img" ></img></td>
                        <td colSpan="2">{item.title} </td>
                        <td>
                            <FontAwesomeIcon icon={faMinus} onClick={()=>reduceItem(item.id)} />
                            <input type="text" name='quantity' id='quantity' value={item.quantity} readOnly/>
                            <FontAwesomeIcon icon={faPlus} onClick={()=>addItem(item.id)}/>
                        </td>
                        <td>{item.quantity*item.price} € </td>                        
                        <td> <FontAwesomeIcon icon={faTrashAlt} onClick={()=>deleteItem(item.id)}/></td>
                    </tr>                    
                </tbody>)
                })}                
                <tbody>
                    <tr>
                        <td colSpan="4"></td>
                        <td>Total Price:</td>
                        <td>{(cartList.reduce((previousValue, currentValue) => 
                                previousValue + (currentValue.quantity*currentValue.price), 0)).toFixed(2)}  
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default ShoppingCart;