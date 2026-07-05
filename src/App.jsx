
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './assets/Components/HomePage/Banner/Banner'
import BannerMiddle from './assets/Components/HomePage/BannerMiddle/BannerMiddle'
import Navbar from './assets/Components/HomePage/Navbar/Navbar'
import PrimiumTools from './assets/Components/HomePage/PrimiumTools/PrimiumTools'
import { ToastContainer } from 'react-toastify'
import GetStarted from './assets/Components/HomePage/GetStarted/GetStarted'
import SimplePricing from './assets/Components/HomePage/SimplePricing/SimplePricing'
import Footer from './assets/Components/HomePage/Footer/Footer'



const fetchData=async()=>{
const res=await fetch("/Data.json");
return res.json();

};
const ResponsePromise=fetchData();
function App() {
const [selectedCart,setSelectedCart]=useState([]);
const [coin,setCoin]=useState(0)
  return (
    <>
    
      <Navbar></Navbar>
    <Banner></Banner>
    <BannerMiddle></BannerMiddle>
   <Suspense fallback={<span className="loading loading-spinner text-error"></span>}>

<PrimiumTools coin={coin} setCoin={setCoin} ResponsePromise={ResponsePromise} setSelectedCart={setSelectedCart} selectedCart={selectedCart}></PrimiumTools>
   </Suspense>
   
   <GetStarted></GetStarted>
   
   <ToastContainer />
   <SimplePricing></SimplePricing>
   <Footer></Footer>
    </>
  )
}

export default App
