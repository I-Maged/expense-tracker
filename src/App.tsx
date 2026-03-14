import Header from './components/Header'
import AddTransactionForm from './components/AddTransactionForm'

import ExpenseProvider from './context/ExpenseContext'

const App = () => {
  return (
    <ExpenseProvider>
      <Header />
      <AddTransactionForm />
    </ExpenseProvider>
  )
}

export default App
