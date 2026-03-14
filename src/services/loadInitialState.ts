import { v4 as uuidv4 } from 'uuid'
import type { ExpenseState } from '../types/types'

const LOCAL_STORAGE_KEY = 'expense-tracker-state'

const generateMockData = (): ExpenseState => {
  const today = new Date()
  const yesterday = new Date(today)
  yesterday.setDate(yesterday.getDate() - 1)
  const twoDaysAgo = new Date(today)
  twoDaysAgo.setDate(twoDaysAgo.getDate() - 2)

  return {
    transactions: [
      {
        id: uuidv4(),
        type: 'INCOME',
        amount: 5200,
        category: 'Salary',
        date: today.toISOString(),
        note: 'Monthly salary',
      },
      {
        id: uuidv4(),
        type: 'EXPENSE',
        amount: 85.5,
        category: 'Dining',
        date: yesterday.toISOString(),
        note: 'Dinner with friends',
      },
      {
        id: uuidv4(),
        type: 'EXPENSE',
        amount: 120,
        category: 'Groceries',
        date: yesterday.toISOString(),
        note: 'Weekly groceries',
      },
      {
        id: uuidv4(),
        type: 'EXPENSE',
        amount: 1500,
        category: 'Housing',
        date: twoDaysAgo.toISOString(),
        note: 'Rent payment',
      },
      {
        id: uuidv4(),
        type: 'INCOME',
        amount: 300,
        category: 'Freelance',
        date: twoDaysAgo.toISOString(),
        note: 'Web design work',
      },
    ],
    currency: 'USD',
  }
}

export const loadInitialState = (): ExpenseState => {
  try {
    const savedState = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (savedState) {
      return JSON.parse(savedState) as ExpenseState
    }
  } catch (e) {
    console.error('Failed to parse state from localStorage:', e)
  }
  return generateMockData()
}
