
// access to expense-items [add the type]
// Get the list of unique payee names [Rahul, Ramesh]
// Get the contributing amount for a given payee (payee name)
// Get the total expense
// Table to show the data

// Include this component in the ExpenseTrackerApp

import {Table} from "react-bootstrap"; 
import IExpenseItem from "../models/expense";

type ExpenseByPayeeModel = {

  expenseItems : IExpenseItem[];
}

const ExpenseByPayee = ({expenseItems} : ExpenseByPayeeModel) => {

  const getAllPayeeNames = () : string[] => {

      const uniquePayeeNames : string[] = [];

      expenseItems.forEach( (expenseItem) => {

        let payeeName = expenseItem.payeeName;
        if (!uniquePayeeNames.includes(payeeName)){

          uniquePayeeNames.push(payeeName);
        }
      })

      return uniquePayeeNames;
  }

  const getTotalExpenseByPayee = (payeeName : string) => {

    let totalExpense = 0;
    expenseItems.forEach( (localExpenseItem) => {

      let localPayeeName = localExpenseItem.payeeName;
      if (localPayeeName === payeeName){

        totalExpense = totalExpense + 
        localExpenseItem.price;
      }
    })

    return totalExpense;
  }

  const getGrandTotal = () => {

    let totalExpense = 0;
    expenseItems.forEach( (localExpenseItem) => {


        totalExpense = totalExpense + 
        localExpenseItem.price;
    })

    return totalExpense;
  }

  return (
    <div>


  <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Payee Name</th>
          <th>Contributed Amount</th>
        </tr>
      </thead>

      <tbody>

        {

        getAllPayeeNames().map( (payeeName, index) => {

          return (

            <tr>
            <td>{index + 1}</td>
            <td>{payeeName}</td>
            <td>{getTotalExpenseByPayee(payeeName)}</td>

            </tr>
    
          )
        })
        }

        <tr>
            <td></td>
            <td>Grand Total</td>
            <td>{getGrandTotal()}</td>

        </tr>

      </tbody>
    </Table>

    </div>
  )
}

export {ExpenseByPayee}