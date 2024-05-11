import './Hero.css'
function Hero() {
  return (
    <div className='hero'>
        <div className='watches'>
            <div className='watch'>
                <img src="apple-watch-series7-black-myshop-pk-1-removebg-preview 1.png" alt="" />
                <div>
                    <h3>Apple</h3>
                    <p>Apple is one of the <br /> most famous smart <br /> watches providing <br /> company.</p>
                </div>
            </div>
            <div className='watch'>
                <img src="xiaomi_redmi_watch_2_lite_azul_01_l-removebg-preview 1.png" alt="" />
                <div>
                    <h3>Xiaomi</h3>
                    <p>Xiaomi smart watches <br /> are produced by MI <br /> company.</p>
                </div>
            </div>
            <div className='watch'>
                <img src="6426000_sd-removebg-preview 1.png" alt="" />
                <div>
                    <h3>FitBit</h3>
                    <p>FitBit smart watches <br /> are best for there <br /> health and fitness <br /> features.</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Hero
