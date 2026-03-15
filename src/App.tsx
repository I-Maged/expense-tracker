import Header from './components/Header'
import AddTransactionForm from './components/AddTransactionForm'

import ExpenseProvider from './context/ExpenseContext'

const App = () => {
  return (
    <ExpenseProvider>
      <div className='app-layout'>
        <Header />
        <AddTransactionForm />
      </div>
    </ExpenseProvider>
  )
}

export default App
