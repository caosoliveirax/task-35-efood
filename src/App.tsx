import Header from '@components/Header'
import { GlobalStyle } from './global'
import { BrowserRouter } from 'react-router-dom'
import Routers from './routers'
import Footer from '@components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routers />
      <Footer />
    </BrowserRouter>
  )
}

export default App
