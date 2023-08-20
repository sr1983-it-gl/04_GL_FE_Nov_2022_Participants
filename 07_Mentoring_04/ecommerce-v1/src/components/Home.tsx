import { CartManager } from "./CartManager";
import { Header } from "./Header";
import { ProductsLister } from "./ProductsLister";

import { Container, Row, Col } from "react-bootstrap";

import CartModel, {CartItemModel} from "../cart";
import products, { ProductModel } from "../products";
import { useState } from "react";

const Home = () => {

  const defaultCart = () => {

    const cartItemsModel : CartItemModel[] = [

      {
        product : products[1],
        quantity: 3      
      },
      {
        product : products[2],
        quantity: 5      
      },
      {
        product : products[0],
        quantity: 10      
      },
    ]

    const cartModel : CartModel = {
      cartItemsModel : cartItemsModel
    }

    return cartModel;
  }  

  const[cart, setCart] = useState(defaultCart);

  const addToCart = (productItem : ProductModel) => {

    console.log(`Add to Cart...`);
    const matchingProduct = cart.cartItemsModel.find( (cartItemModel) => (
        cartItemModel.product.id === productItem.id
    ));    

    if (matchingProduct){

      const updatedCartItems  = cart.cartItemsModel.map((cartItem) => {

          if (cartItem.product.id === productItem.id){

            const updatedCartItem = {
              product : cartItem.product,
              quantity: cartItem.quantity + 1
            }

            return updatedCartItem;
          }else{

            const newCartItem = {
              product: cartItem.product,
              quantity: cartItem.quantity
            }

            return newCartItem;
          }
        });

        const updatedCart : CartModel = {
            cartItemsModel: updatedCartItems
        } 

      setCart(updatedCart);
    }else{

      const newCartItem = {
        product: productItem, quantity: 1
      }
      
      const updatedCartItems = 
        [... cart.cartItemsModel, newCartItem ];

      const updatedCart : CartModel = {
        cartItemsModel : updatedCartItems
      }

      setCart(updatedCart);
    }    
  }


  const removeFromCart = (productItem : ProductModel) => {

    const updatedCartItems : CartItemModel[] = [];
    
      cart.cartItemsModel.forEach((cartItem) => {

        if (cartItem.product.id  === productItem.id){

          if (cartItem.quantity === 1){
            // If Quantity is 1, then 'remove' wil make as 0
            // So no need to add/copy it
          }else{

            let updatedCartItem : CartItemModel = {
              product: cartItem.product,
              quantity: cartItem.quantity - 1
            }             
            updatedCartItems.push(updatedCartItem);
          }
        }else{
          updatedCartItems.push(cartItem);
        }
      })

      const updatedCart : CartModel = {
        cartItemsModel: updatedCartItems
      }

      setCart(updatedCart);    
  }    

  return (
    <div>

      <Row>
        <Col lg={12}>{<Header></Header>}</Col>
      </Row>

      <Row>
        <Col lg={9}>{<ProductsLister addToCart={addToCart}></ProductsLister>}</Col>
        <Col lg={3}>{<CartManager cart={cart} addToCart={addToCart} removeFromCart={removeFromCart}></CartManager>}</Col>
      </Row>

    </div>
  )
}

export {Home};