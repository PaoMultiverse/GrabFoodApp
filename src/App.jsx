import Navbar from './components/Navbar'
import BackgroundHeader from './components/BackgroundHeader'
import AddressBox from './components/AddressBox'
import PromoInWhere from './components/PromoInWhere'
import CarouselPromo from './components/CarourelPromo'
import Category from './components/Category'

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar></Navbar>
        <BackgroundHeader></BackgroundHeader>
        <AddressBox></AddressBox>
        <PromoInWhere></PromoInWhere>
      </div>
      <div>
        <CarouselPromo></CarouselPromo>
        <Category></Category>
      </div>
    </>
  )
}

export default App
