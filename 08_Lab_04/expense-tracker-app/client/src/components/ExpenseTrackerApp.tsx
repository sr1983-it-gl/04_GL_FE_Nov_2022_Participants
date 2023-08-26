
import {useEffect, useState} from "react"
import {getAllExpenseItems} from "../services/expense";
import { ExpenseItems } from "./ExpenseItems";
import {Container} from "react-bootstrap";

const ExpenseTrackerApp = () => {

  const [expenseItems, setExpenseItems] = useState([]);

  useEffect( () => {

    const getAllExpenseItemsInvoker =  async () => {

      const response = await getAllExpenseItems();

      console.log(`Response is ` + JSON.stringify(response));

      setExpenseItems(response);
    }

    getAllExpenseItemsInvoker();    

  })

  return (
    <Container>
      <h2> Expense Tracker App</h2>

      <ExpenseItems expenseItems={expenseItems}></ExpenseItems>
    </Container>
  )
}

export {ExpenseTrackerApp}