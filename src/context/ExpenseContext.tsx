import { createContext, useReducer, type FC, type ReactNode } from 'react'
import { expenseReducer } from './ExpenseReducer'
import type {
  ExpenseContextValue,
  ExpenseState,
  FilterSettings,
  Transaction,
} from '../types/types'
import { loadInitialState } from '../services/loadInitialState'

type ExpenseProviderProps = { children: ReactNode }

const initialState: ExpenseState = loadInitialState()

const ExpenseContext = createContext<ExpenseContextValue | null>(null)

const ExpenseProvider: FC<ExpenseProviderProps> = ({ children }) => {
  const [{ transactions, filterSettings, currency }, dispatch] = useReducer(
    expenseReducer,
    initialState,
  )

  function addTransaction(transaction: Transaction) {
    dispatch({ type: 'ADD_TRANSACTION', payload: transaction })
  }

  function setFilters(filter: Partial<FilterSettings>) {
    dispatch({ type: 'SET_FILTER', payload: filter })
  }

  return (
    <ExpenseContext.Provider
      value={{
        transactions,
        filterSettings,
        currency,
        addTransaction,
        setFilters,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  )
}

export default ExpenseProvider
export { ExpenseContext }
