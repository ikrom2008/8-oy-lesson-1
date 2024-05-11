import { useState } from 'react'
import './Main.css'
import { Rating } from '@mui/material'
import { FaCartShopping } from 'react-icons/fa6'
import { FaHeart } from 'react-icons/fa'
function Main({product}) {
  const [slice,setSlice] = useState(false)

  let prs = product?.map((item) => (
    <li key={item.id} className='list'>
        <img src={item.image} alt="" />
        <div className='likebtn'>        
        <button className='cart'><FaCartShopping /></button>
        <button className='her'><FaHeart  /></button>
        </div>
        <h4>{item.title.slice(0,20)}</h4>
        <Rating style={{color: 'black'}} name="half-rating" defaultValue={0.5} precision={0.5} />
        <p><span>${item.rating.count}</span> ${item.price}</p>
    </li>
   
  )) 
  let pr = slice ? prs.slice(0,9) : prs.slice(0,6)
  return (
    <div>
      <main className='main'>
        <section className='products'>
            <div className='fow'>
                <p>Find your favourite smart watch.</p>
                <h3>Our Latest Products</h3>
            </div>
            <ul className='lists'>
                {
                    pr
                }
            </ul>
            <button className='view' onClick={() => setSlice(!slice)}>{
                slice ? 'Hide' : 'View More'
            }</button>
        </section>
        <section className='about'>
            <div className='fow'>
                <p>Here are our some of the best clients.</p>
                <h3>What People Say About Us</h3>
            </div>
            <div className='users'>
                <div className='user'>
                    <img src="6426000_sd-removebg-preview 1 (1).png" alt="" />
                    <div className='userinfo'>
                        <h4>Hamza Faizi</h4>
                        <p>Don’t waste time, just order! This <br /> is the best website to puschase <br /> smart watches.</p>
                        <Rating style={{color: 'black'}} name="half-rating" defaultValue={0.5} precision={0.5} />
                    </div>
                </div>
                <div className='user'>
                    <img src="6426000_sd-removebg-preview 1 (2).png" alt="" />
                    <div className='userinfo'>
                        <h4>Hafiz Huzaifa</h4>
                        <p>I’ve been purchasing smart <br /> watches of Mohid for a long time. <br /> All the products are good quality.</p>
                        <Rating style={{color: 'black'}} name="half-rating" defaultValue={0.5} precision={0.5} />
                    </div>
                </div>
            </div>
            <img className='imgdots' src="Dots.png" alt="" />
        </section>
        <section className='newbrand'>
            <div className='brandinfo'>
                <h3>Subscribe To Newsletter</h3>
                <p>Get free guide about smart watches daily. </p>
                <div className='inp'>
                    <input placeholder='Enter Email Address' type="search" name="" id="" />
                    <button style={{width: '100px'}}>Subscribe</button>
                </div>
            </div>                
            <img src="6426000_sd-removebg-preview 1 (3).png" alt="" />
        </section>
      </main>
    </div>
  )
}

export default Main
