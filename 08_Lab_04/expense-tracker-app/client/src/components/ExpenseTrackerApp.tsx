
import {useEffect} from "react"
import {getAllExpenseItems} from "../services/expense";

const ExpenseTrackerApp = () => {

  useEffect( () => {

    const getAllExpenseItemsInvoker =  async () => {

      const response = await getAllExpenseItems();

      console.log(`Response is ` + JSON.stringify(response));
    }

    getAllExpenseItemsInvoker();    

  })

  return (
    <div>
      Expense Tracker App
    </div>
  )
}

export {ExpenseTrackerApp}