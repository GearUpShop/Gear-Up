import React from 'react'
import Herosection from '../componete/Herosection'
import Categories from '../componete/Categories'
import FeaturedProducts from '../componete/FeaturedProducts'
import Dashbord from './Dashboard/Dashbord'



function Home() {
  return (
    <div className="">
    <Herosection/>
     <Categories/>
    <FeaturedProducts/> 
    </div>
   
  )
}

export default Home