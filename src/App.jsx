
import { Suspense } from 'react'
import './App.css'
import Banner from './assets/Components/HomePage/Banner/Banner'
import BannerMiddle from './assets/Components/HomePage/BannerMiddle/BannerMiddle'
import Navbar from './assets/Components/HomePage/Navbar/Navbar'
import PrimiumTools from './assets/Components/HomePage/PrimiumTools/PrimiumTools'



const fetchData=async()=>{
const res=await fetch("/Data.json");
return res.json();

};
const ResponsePromise=fetchData();
function App() {


  return (
    <>
    
      <Navbar></Navbar>
    <Banner></Banner>
    <BannerMiddle></BannerMiddle>
   <Suspense fallback={<span className="loading loading-spinner text-error"></span>}>

<PrimiumTools ResponsePromise={ResponsePromise}></PrimiumTools>
   </Suspense>
    </>
  )
}

export default App
