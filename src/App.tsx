import Header from '@components/Header'
import { GlobalStyle } from './global'
import RestaurantsList from '@components/RestaurantsList'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <RestaurantsList />
    </>
  )
}

export default App
