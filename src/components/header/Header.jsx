import { IoSearchOutline } from 'react-icons/io5'
import './Header.css'
import { FaUser } from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6'
import { IoIosArrowDown } from 'react-icons/io'
import { useState } from 'react'
import Srcbar from '../srcbar/Srcbar'
function Header() {
    const [srcbar,setSrcbar]  = useState(false)
  return (
    <div>
      <header className='header'>
        {
            !srcbar ? <nav className='navbar'>
            
            <div className='logo'>
                <img src="Apple Watch.svg" alt="" />
                <h5>Mohid</h5>
            </div>
            <ul>
                <li>Home</li>
                <li>Brands <IoIosArrowDown style={{paddingTop: '3px' , fontSize: '15px'}} /></li>
                <li>Recent Products</li>
                <li>Contact</li>
                <li>About</li>
            </ul>
            <div className='icons'>
                <div onClick={() => setSrcbar(true)}>
                    <IoSearchOutline />
                </div>
                <div>
                    <FaUser />
                </div>
                <div className='shop'>
                    <FaCartShopping />
                </div>
            </div>
        </nav> : <Srcbar setSrcbar={setSrcbar} />
        }
        <div className='discover'>
            <div className='title'>
                <h2>Discover <br /> Most Suitable <br /> Watches</h2>
                <p>Find the best, reliable, and cheap smart watches here. <br /> We focus on product quality. Here you can find smart <br /> watches of almost all brands. So why you are waiting? <br /> Just order now!</p>
                <div className='inp'>
                <input type="search" name="" id="" placeholder='Find the best brands'/>
                <button>Search</button>
                </div>
            </div>
            <div style={{paddingRight: '20px'}}>
                <img src="17b2724d5bd682148b44a88441cad7bfa9fe6730_original-removebg-preview 1.png" alt="" />
            </div>
        </div>
      </header>
    </div>
  )
}

export default Header
