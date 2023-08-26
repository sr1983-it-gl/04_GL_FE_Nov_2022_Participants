
import axios from "axios"

const getAllExpenseItems = async () => {

  const GET_EXPENSE_ITEMS_URL = 'http://localhost:4000/expenses';

  const response = await axios.get(GET_EXPENSE_ITEMS_URL);
  // 2 seconds
  return response.data;

}

export {getAllExpenseItems}