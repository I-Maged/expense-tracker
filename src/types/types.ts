export type TransactionType = 'INCOME' | 'EXPENSE'

export type Transaction = {
  id: string
  type: TransactionType
  amount: number
  category: string
  date: string
  note?: string
}

export type ExpenseState = { transactions: Transaction[]; currency: string }

export type ExpenseContextValue = ExpenseState & {
  addTransaction: (transaction: Transaction) => void
}
