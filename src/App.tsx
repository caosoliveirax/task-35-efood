import Header from '@components/Header'
import { GlobalStyle } from './global'
import { BrowserRouter } from 'react-router-dom'
import Routers from './routers'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routers />
    </BrowserRouter>
  )
}

export default App
