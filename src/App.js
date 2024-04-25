import React from 'react'
import Navbar from './componets/navbar/Navbar'
import Firstpage from './componets/firstpage/Firstpage'
import Secondpage from './componets/Secondpage/Secondpage'
import HorizontalScrollingDivs from './componets/Scroll'
import Scroll from './componets/Scroll'
import Footer from './componets/Footer'

export default function App() {
  return (
    <>
    <Navbar/>
    <div className='mt-5'></div>
    <Firstpage/>
    <div className='mt-5'></div>
    <Secondpage/>
    <div className='mt-5'></div>
    <Scroll/>
    <Footer/>
    </>
  )
}
