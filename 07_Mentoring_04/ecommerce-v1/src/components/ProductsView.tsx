
import products, {ProductModel}  from "../products";

import { ProductView } from "./ProductView";

import {Row} from "react-bootstrap";

type ProductsViewModel = {

  addToCart : (productModel : ProductModel) => void;
}

const ProductsView = ({addToCart} : ProductsViewModel) => {

  return (
    <Row>
      {
        products.map( (sampleProduct) => {

          return (
            <ProductView product={sampleProduct} addToCart={addToCart}></ProductView>
          )
        })
      }

    </Row>
  )
}

export {ProductsView}