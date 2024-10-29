import React from 'react'
import './Companies.css'
import img1 from '../../Images/prologis.png'
import img2 from '../../Images/tower.png'
import img3 from '../../Images/equinix.png'
import img4 from '../../Images/realty.png'

const Companies = () => {
  return (
    <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
            <img src={img1} />
            <img src={img2} />
            <img src={img3} />
            <img src={img4} />
        </div>
        
    </section>
  )
}

export default Companies