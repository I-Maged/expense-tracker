import ExpenseProvider from './context/ExpenseContext'
import Homepage from './pages/Homepage'

const App = () => {
  return (
    <ExpenseProvider>
      <div className='app-layout'>
        <Homepage />
      </div>
    </ExpenseProvider>
  )
}

export default App
