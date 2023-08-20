
import {Col, Card, Button} from "react-bootstrap";
import { ProductModel } from "../products";

type ProductViewModel = {

  product: ProductModel;
  addToCart : (productModel : ProductModel) => void;
}

const ProductView = ({product, addToCart} : ProductViewModel) => {

  return (
    <Col key={product.id} className="my-2">

      <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>
                {product.price}
              </Card.Text>
              <Button variant="primary" onClick={
                () => {
                  addToCart(product)
                }
              }>Add to Cart</Button>
            </Card.Body>
      </Card>

    </Col>
  )
}


export {ProductView}