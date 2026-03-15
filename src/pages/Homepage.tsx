import Header from '../components/Header'
import AddTransactionForm from '../components/AddTransactionForm'
import BalanceSummary from '../components/BalanceSummary'
import TransactionList from '../components/TransactionList'
import FilterBar from '../components/FilterBar'

const Homepage = () => {
  return (
    <>
      <Header />
      <main className='app-main'>
        <BalanceSummary />

        <div className='app-grid'>
          <div className='grid-left'>
            <AddTransactionForm />
          </div>

          <div className='grid-right'>
            <FilterBar />
            <TransactionList />
          </div>
        </div>
      </main>
    </>
  )
}

export default Homepage
