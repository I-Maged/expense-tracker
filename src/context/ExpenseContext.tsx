import { createContext, useReducer, type FC, type ReactNode } from 'react'
import { expenseReducer } from './ExpenseReducer'

const LOCAL_STORAGE_KEY = 'expense-tracker-state'

type ExpenseProviderProps = { children: ReactNode }

type TransactionType = 'INCOME' | 'EXPENSE'

export type Transaction = {
  id: string
  type: TransactionType
  amount: number
  category: string
  date: string
  note?: string
}

export type ExpenseState = {
  transactions: Transaction[]
  currency: string
  addTransaction: (transaction: Transaction) => void
}

const ExpenseContext = createContext<ExpenseState>({
  transactions: [],
  currency: 'USD',
  addTransaction: () => {},
})

const initialState = (): ExpenseState => {
  try {
    const savedState = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (savedState) {
      return JSON.parse(savedState) as ExpenseState
    }
  } catch (e) {
    console.error('Failed to parse state from localStorage:', e)
  }

  return { transactions: [], currency: 'USD', addTransaction: () => {} }
}

const ExpenseProvider: FC<ExpenseProviderProps> = ({ children }) => {
  const [{ transactions, currency }, dispatch] = useReducer(
    expenseReducer,
    initialState(),
  )

  function addTransaction(transaction: Transaction) {
    dispatch({ type: 'ADD_TRANSACTION', payload: transaction })
  }

  return (
    <ExpenseContext.Provider value={{ transactions, currency, addTransaction }}>
      {children}
    </ExpenseContext.Provider>
  )
}

export default ExpenseProvider
