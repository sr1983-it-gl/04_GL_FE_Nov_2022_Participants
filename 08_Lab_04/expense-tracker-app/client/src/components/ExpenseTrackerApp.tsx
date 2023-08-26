
import {useEffect} from "react"
import {getAllExpenseItems} from "../services/expense";
import { ExpenseItems } from "./ExpenseItems";
import {Container} from "react-bootstrap";

const ExpenseTrackerApp = () => {

  useEffect( () => {

    const getAllExpenseItemsInvoker =  async () => {

      const response = await getAllExpenseItems();

      console.log(`Response is ` + JSON.stringify(response));
    }

    getAllExpenseItemsInvoker();    

  })

  return (
    <Container>
      <h2> Expense Tracker App</h2>

      <ExpenseItems></ExpenseItems>
    </Container>
  )
}

export {ExpenseTrackerApp}