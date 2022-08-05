import React from 'react'
import { AiTwotoneSwitcher, AiOutlineTwitter } from 'react-icons/ai'
import { BsFacebook,BsYoutube } from 'react-icons/bs'
function Footer() {
    return (
        <footer className="footer items-center p-4 bg-cyan-300 text-neutral-content">
            <div className="items-center grid-flow-col">
                <svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><AiTwotoneSwitcher className='text-2xl hover:text-stone-200' /></svg>
                <p className='font-bold  text-gray-700'>Copyright © 2022 - All right reserved</p>
            </div>
            <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end cursor-pointer">
                <a href='/'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><BsFacebook className='text-xl hover:text-stone-200' /></svg>
                </a>
                <a href='/'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><BsYoutube className='text-2xl hover:text-stone-200' /></svg></a>
                <a href='/'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><AiOutlineTwitter className='text-2xl hover:text-stone-200' /></svg></a>
            </div>
        </footer>
    )
}

export default Footer