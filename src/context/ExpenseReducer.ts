import type { ExpenseState, Transaction } from '../types/types'

export type ExpenseAction =
  | { type: 'ADD_TRANSACTION'; payload: Transaction }
  | { type: 'EDIT_TRANSACTION'; payload: Transaction }
  | { type: 'DELETE_TRANSACTION'; payload: string }
  | { type: 'SET_CURRENCY'; payload: string }
  | { type: 'INITIALIZE_STATE'; payload: ExpenseState }

export const expenseReducer = (
  state: ExpenseState,
  action: ExpenseAction,
): ExpenseState => {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return { ...state, transactions: [action.payload, ...state.transactions] }

    case 'EDIT_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.map((t) =>
          t.id === action.payload.id ? action.payload : t,
        ),
      }

    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter((t) => t.id !== action.payload),
      }

    case 'SET_CURRENCY':
      return { ...state, currency: action.payload }

    case 'INITIALIZE_STATE':
      return action.payload

    default:
      return state
  }
}
