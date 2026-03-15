import Header from '../components/Header'
import AddTransactionForm from '../components/AddTransactionForm'
import BalanceSummary from '../components/BalanceSummary'

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
        </div>
      </main>
    </>
  )
}

export default Homepage
