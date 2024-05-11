import { useEffect, useState } from 'react'
import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Main from './components/main/Main'
import Loading from './components/loading/Loading'
let url = 'https://fakestoreapi.com/products/'

function App() {
  const [product,setProduct] = useState([])
  const [loading,setLoading] = useState(false)
const fetchdata = async () =>{
  setLoading(true)
  try {
    const resp = await fetch(url)
    const data = await resp.json()
    setProduct(data)
    setLoading(false)
  } catch (error) {
    console.log(error)
    setLoading(false)
  }
}
useEffect(() => {
  fetchdata()
},[])
  if(loading){
    return(
      <Loading />
    )
  }else{
    return (
    <>
        <Header />
        <div className='container'>
            <Hero />
            <Main product={product} />
        </div>
        <Footer />
    </>
  )
  }
  
}

export default App
