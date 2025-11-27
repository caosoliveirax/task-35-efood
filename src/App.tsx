import { GlobalStyle } from './global'
import { BrowserRouter } from 'react-router-dom'
import Routers from './routers'
import Footer from '@components/Footer'
import { Provider } from 'react-redux'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Routers />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
