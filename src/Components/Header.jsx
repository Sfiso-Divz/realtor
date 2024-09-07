import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'



const Header = () => {

    const location = useLocation()

    function pathMatchRoute(route){
        if(route === location.pathname){
            return true
        }
    }

    const navigate = useNavigate()

  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
        <header className='flex justify-between items-center px-3 max-w-6xl mx-auto '>
            <div >
                <img src="https://static.rdc.moveaws.com/rdc-ui/logos/logo-brand.svg" alt="realtor" className='h-5 cursor-pointer ' 
                onClick={()=> navigate("/")}/>
            </div>
            <div>
                <ul className='flex space-x-10 cursor-pointer'>
                    <li className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/") && "text-black border-b-red-600"}`} onClick={()=> navigate("/")}>Home</li>

                    <li className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/offers") && "text-black border-b-red-600"}`} onClick={()=> navigate("/offers")}>Offers</li>

                    <li className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/signin") && "text-black border-b-red-600"}`} onClick={()=> navigate("/signin")}>Sign In</li>
                </ul>
            </div>
        </header>
    </div>
  )
}

export default Header