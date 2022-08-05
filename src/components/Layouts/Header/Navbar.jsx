import React from 'react'
import { SiYourtraveldottv } from 'react-icons/si'

function Navbar() {
    return (
        <div className="navbar text-neutral-700 bg-cyan-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden hover:bg-cyan-200 ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-cyan-100 rounded-box w-52 font-medium">
                        <li><a href='/'>Home</a></li>
                        <li><a href='/'>About </a></li>
                        <li><a href='/'>Contact </a></li>
                    </ul>
                </div>
                <a href='/' className="btn btn-ghost normal-case text-xl"><SiYourtraveldottv className=' md:mx-1 mr-2 text-cyan-500 ' />daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 font-medium ">
                    <li className='hover:text-stone-50'><a href='/'>Home</a></li>
                    <li className='hover:text-stone-50'><a href='/'>About</a></li>
                    <li className='hover:text-stone-50'><a href='/'>Contact</a></li>
                </ul>
            </div>
            <div className="navbar-end mr-4">

                <div className="avatar online">
                    <div className="w-10 rounded-full cursor-pointer">
                    <img src="https://placeimg.com/192/192/people" alt='avtar'/>

                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default Navbar