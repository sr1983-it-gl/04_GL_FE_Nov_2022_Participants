import { CartView } from "./CartView";

import CartModel, {CartItemModel} from "../cart";
import products, { ProductModel } from "../products";
import { CartPricesView } from "./CartPricesView";

type CartManagerModel = {

  cart: CartModel;
  addToCart : (productModel : ProductModel) => void;
  removeFromCart : (productModel : ProductModel) => void;
}

const CartManager = ({cart, addToCart, removeFromCart} : CartManagerModel) => {


  return (
    <div style={{backgroundColor : 'lightgreen'}}>

      <h2>Cart</h2>

      <CartView cartModel={cart} addToCart={addToCart} removeFromCart={removeFromCart}></CartView>
      <CartPricesView cart={cart}></CartPricesView>

    </div>
  )
}

export {CartManager};