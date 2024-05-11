import { useEffect, useState } from 'react'
import Searched from './Searched'
import './Srcbar.css'
function Srcbar({setSrcbar}) { 
    const [value,setValue] = useState('')
    let url = `https://dummyjson.com/products/search?q=${value}`
    const [newpr,setNewpr] = useState(null)
    const fetchdata = async () =>{
        try {
          const resp = await fetch(url)
          const data = await resp.json()
          setNewpr(data.products)
        } catch (error) {
          console.log(error)
        }
      }
      useEffect(() => {
        fetchdata()
      },[value])
  return (
    <div >
      <div className='srchbar'>
            <div className='logos'>
                <h4>Mohid</h4>
                <input value={value} onChange={(e) => setValue(e.target.value)} type="text" name="" id="" placeholder='Search' />
                <button onClick={() => setSrcbar(false)}>Cancel</button>
            </div>
            {value ? <Searched newpr={newpr} /> : <></>}
      </div>
    </div>
  )
}

export default Srcbar
