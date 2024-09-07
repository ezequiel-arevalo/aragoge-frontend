import './App.css'
import { Header } from './components/Header'
import { Home } from './pages/home/Home'
import { Footer } from './components/Footer'
import { Contact } from './pages/contact/Contact'

function App() {
  return (
    <>
      <Header />
      <Home />
      <Contact />
      <Footer />
    </>
  )
}

export default App
