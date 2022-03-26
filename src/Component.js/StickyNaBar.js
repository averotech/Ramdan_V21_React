import React from 'react'

const StickyNav = () => {
    return(
        <nav id="navigator" className='lg:block md:hidden'>
          <div className="container">
            <ul>
              <li className="home active">
                <a href="#home"> <span>الرئيسية</span></a>
              </li>
              <li className="about">
                <a href="#about"><span>عرض البونص</span></a>
              </li>
              <li className="contact">
                <a href="#contact"><span>عرض الجوائز المالية</span></a>
              </li>
              <li className="info">
                <a href="#info"><span>عرض العيد الكبير</span></a>
              </li>
            </ul>
          </div>
        </nav>
    )
}

export default StickyNav