
import { ProductModel } from "./products"

export type CartItemModel = {

  product : ProductModel,
  quantity: number
};

// export type T2 = {

//   a : string;
// };

type CartModel = {

  cartItemsModel : CartItemModel[];
};


// export {A, B}

export default CartModel;

// export {T2, CartModel};
