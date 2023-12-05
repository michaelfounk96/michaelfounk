import React from 'react'
import './intro.css'
import profile from '../../assets/logo-white.png'
import { Link } from 'react-scroll'

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm Michael Founk</span>
            <p className='introPara'>Some info about me</p>
            <Link>
                <button className='btn'>
                    {/* <img src='' alt='Hire Me'/> */}
                    Hire Me
                </button>
            </Link>
        </div>
        <img src={profile} alt='Profile' className='bg'/>

    </section>
  )
}

export default Intro