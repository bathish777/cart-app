import React from 'react'
import NavBar from '../NavBar/NavBar'
import CartContainer from '../cart/CartContainer'
import { useGlobalContext } from '../../Hooks/Context'
import CartItem from '../cart/CartItem'


const Home = () => {
    // const {loading} =useGlobalContext()
    // if(loading){
    //     return(
    //     <div className='loading'>
    //         <h1>loading</h1>
    //     </div>)
    // }
  return (
    <main>
      
       <NavBar/>
       
       
       <CartContainer/>
       
       


    </main>
  )
}

export default Home