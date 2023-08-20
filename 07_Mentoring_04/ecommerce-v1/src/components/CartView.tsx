import CartModel from "../cart"
import { ProductModel } from "../products";
import { CartItemView } from "./CartItemView";

type CartViewModel = {

  cartModel : CartModel;
  addToCart : (productModel : ProductModel) => void;
  removeFromCart : (productModel : ProductModel) => void;

}

const CartView = ({cartModel, addToCart, removeFromCart} : CartViewModel) => {

  return (
    <div>

      {
        cartModel.cartItemsModel.map( (localCartItemModel) => {

          return (
            <CartItemView cartItemModel={localCartItemModel} addToCart={addToCart} removeFromCart={removeFromCart}></CartItemView>
          )
        })
      }

    </div>
  )
}

export {CartView}