import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Main from './components/main/Main'

function App() {

  return (
    <>
        <Header />
        <div className='container'>
            
            <Hero />
            <Main />
            
        </div>
        <Footer />
    </>
  )
}

export default App
