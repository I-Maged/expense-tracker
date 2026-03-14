import { createContext, useReducer, type FC, type ReactNode } from 'react'
import { expenseReducer } from './ExpenseReducer'
import type {
  ExpenseContextValue,
  ExpenseState,
  Transaction,
} from '../types/types'
import { loadInitialState } from '../services/loadInitialState'

type ExpenseProviderProps = { children: ReactNode }

const initialState: ExpenseState = loadInitialState()

const ExpenseContext = createContext<ExpenseContextValue | null>(null)

const ExpenseProvider: FC<ExpenseProviderProps> = ({ children }) => {
  const [{ transactions, currency }, dispatch] = useReducer(
    expenseReducer,
    initialState,
  )

  function addTransaction(transaction: Transaction) {
    console.log(transaction)
    dispatch({ type: 'ADD_TRANSACTION', payload: transaction })
  }

  return (
    <ExpenseContext.Provider value={{ transactions, currency, addTransaction }}>
      {children}
    </ExpenseContext.Provider>
  )
}

export default ExpenseProvider
export { ExpenseContext }
