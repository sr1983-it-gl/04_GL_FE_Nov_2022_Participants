import { ProductModel } from "../products";
import { ProductsView } from "./ProductsView"

type ProductsListerModel = {

  addToCart : (productModel : ProductModel) => void;

}

const ProductsLister = ({addToCart} : ProductsListerModel) => {

  return (
    <div style={{backgroundColor : 'lightblue'}}>

        <h2>Products List</h2>
        <ProductsView addToCart={addToCart}></ProductsView>
    </div>
  )
}

export{ProductsLister}