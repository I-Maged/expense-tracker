import { PlusCircle } from 'lucide-react'
import { useState, type ChangeEvent } from 'react'
import type { TransactionType } from '../types/types'
import { v4 as uuidv4 } from 'uuid'
import { useExpenseContext } from '../context/useExpenseContext'

const CATEGORIES = [
  'Salary',
  'Freelance',
  'Housing',
  'Food & Dining',
  'Transportation',
  'Utilities',
  'Entertainment',
  'Shopping',
  'Health',
  'Other',
]

const AddTransactionForm = () => {
  const { addTransaction } = useExpenseContext()

  const [type, setType] = useState<TransactionType>('EXPENSE')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState(CATEGORIES[3])
  const [date, setDate] = useState(new Date().toISOString().split('T')[0])
  const [note, setNote] = useState('')

  const handleSubmit = (e: ChangeEvent) => {
    e.preventDefault()

    const newExpense = {
      id: uuidv4(),
      type,
      amount: Number(amount),
      category,
      date: new Date(date).toISOString(),
      note: note.trim(),
    }

    addTransaction(newExpense)
  }

  return (
    <div className='glass-panel form-container'>
      <div className='form-header'>
        <h3>Add Transaction</h3>
      </div>

      <form onSubmit={handleSubmit} className='transaction-form'>
        <div className='type-toggle'>
          <button
            type='button'
            className={`toggle-btn ${type === 'EXPENSE' ? 'active-expense' : ''}`}
            onClick={() => setType('EXPENSE')}
          >
            Expense
          </button>
          <button
            type='button'
            className={`toggle-btn ${type === 'INCOME' ? 'active-income' : ''}`}
            onClick={() => setType('INCOME')}
          >
            Income
          </button>
        </div>

        <div className='form-group'>
          <label>Amount</label>
          <div className='amount-input-wrapper'>
            <span className='currency-symbol'>$</span>
            <input
              type='number'
              className='input-base amount-input'
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder='0.00'
              step='0.01'
              min='0.01'
              required
            />
          </div>
        </div>

        <div className='form-row'>
          <div className='form-group flex-1'>
            <label>Category</label>
            <select
              className='input-base select-input'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className='form-group flex-1'>
            <label>Date</label>
            <input
              type='date'
              className='input-base'
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
        </div>

        <div className='form-group'>
          <label>Note (Optional)</label>
          <input
            type='text'
            className='input-base'
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder='What was this for?'
          />
        </div>

        <button type='submit' className='btn btn-primary submit-btn'>
          <PlusCircle size={18} />
          Add {type === 'INCOME' ? 'Income' : 'Expense'}
        </button>
      </form>
    </div>
  )
}

export default AddTransactionForm
