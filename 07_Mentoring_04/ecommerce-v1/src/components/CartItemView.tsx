import { CartItemModel } from "../cart"

import {Row, Col, Button} from "react-bootstrap";
import { ProductModel } from "../products";

type CartItemViewModel = {

  cartItemModel : CartItemModel;
  addToCart : (productModel : ProductModel) => void;
  removeFromCart : (productModel : ProductModel) => void;
}

const CartItemView = ({cartItemModel, addToCart, removeFromCart} : CartItemViewModel) => {

  return (
    <Row> 
        <Col>{cartItemModel.product.name}</Col>
        <Col xs={2}>
          <Button variant="primary" onClick={() => {
            addToCart(cartItemModel.product)
          }}>
            +
          </Button>
        </Col>     
        <Col xs={2}>
           <Button variant="secondary" onClick={() => {
            removeFromCart(cartItemModel.product)
          }}>
            -
          </Button>
        </Col>     
        <Col>
         {cartItemModel.quantity} * {cartItemModel.product.price}
        </Col>     
    </Row>
  )
}

export {CartItemView};