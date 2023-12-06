import React from 'react'
import './footer.css'

const Footer = () => {
    const scrollToTop = () =>{ 
        window.scrollTo({ 
          top: 0,
          behavior: 'auto'
        }); 
      }; 


    return (
        <div className='footer'>
            <span className='footerTitle'>Michael Founk</span>
            <div className='footerContact'>
                <span>816-716-0127</span>
                <a>michaelfounk@outlook.com</a>
                <a>/in/michaelfounk/</a>
            </div>
            <button onClick={scrollToTop} className='top'>Top</button>
        </div>
    )
}

export default Footer