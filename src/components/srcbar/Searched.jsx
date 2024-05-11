import './Srcbar.css'
function Searched({newpr}) {
        let news = newpr?.map((item,inx) => (
            <li key={item.id}>
                <span>{inx + 1}</span>
                <img src={item.images[0]} width={50} height={50} alt="" />
                <p>{item.title}</p>
            </li>
        ))
    return (
    <div className='searched'>
        <ul className='srchitem'>
           {
        news
      } 
        </ul>
      
    </div>
  )
}

export default Searched
