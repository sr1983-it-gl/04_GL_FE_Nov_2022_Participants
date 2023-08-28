
import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap"
const ExpenseCreator = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const createForm = () => {

    return (
    <Form>
      <Form.Group className="mb-3" controlId="expenseDescription">
        <Form.Label>Expense Description</Form.Label>
        <Form.Control type="text" placeholder="Enter expense description" />    
      </Form.Group>

      <Form.Group className="mb-3" controlId="payeeName">
        <Form.Label>Payee Name</Form.Label>

        <Form.Select aria-label="Default select example">
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="price">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" placeholder="Enter expense price" />    
      </Form.Group>

      <Form.Group className="mb-3" controlId="expenseDate">
        <Form.Label>Expense Date</Form.Label>
        <Form.Control type="date"/>    
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Add Expense
      </Button>

      <Button variant="secondary" onClick={handleClose}>
            Close
      </Button>
    </Form>    
    )
  }

  return (
    <div>

      <hr/>
      <Button className="float-end" onClick={handleShow}>New Expense Item</Button>
      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Expense</Modal.Title>
        </Modal.Header>
		
        <Modal.Body>
          {createForm()}          
        </Modal.Body>		
      </Modal>      
    </div>
  )
}

export {ExpenseCreator}

// Form -> to be embedded within the Modal.Body
// Form - to have 4 fields
// Payee - Select / List Box
// Add Form.Select for the payee
// Modal Title Change, Button title change