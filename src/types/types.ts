export type TransactionType = 'INCOME' | 'EXPENSE'

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
  filterSettings: FilterSettings
  currency: string
}

export type ExpenseContextValue = ExpenseState & {
  addTransaction: (transaction: Transaction) => void
  setFilters: (filter: Partial<FilterSettings>) => void
}

export type FilterSettings = {
  category: string
  startDate: string | null
  endDate: string | null
}

export type ExpenseAction =
  | { type: 'ADD_TRANSACTION'; payload: Transaction }
  | { type: 'EDIT_TRANSACTION'; payload: Transaction }
  | { type: 'DELETE_TRANSACTION'; payload: string }
  | { type: 'SET_FILTER'; payload: Partial<FilterSettings> }
  | { type: 'SET_CURRENCY'; payload: string }
  | { type: 'INITIALIZE_STATE'; payload: ExpenseState }
