import React from 'react'
import Herosection from '../componete/Herosection'
import Categories from '../componete/Categories'
import FeaturedProducts from '../componete/FeaturedProducts'

import FeaturedSection from '../componete/FeaturedSection'



function Home() {
  return (
    <div >
    <Herosection/>
     <Categories/>
    
    <FeaturedProducts/> 
    <FeaturedSection/>
    

    
    
    
    </div>
   
  )
}

export default Home