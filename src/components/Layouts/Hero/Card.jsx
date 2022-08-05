import React from 'react'
import { AiOutlinePhone } from 'react-icons/ai'
import { FaMale,FaSearchLocation } from 'react-icons/fa'

function Card({ result,setData }) {
    const { name, email, login, location, gender, phone, picture } = result
    const { first, last, title } = name;
    const { country } = location;
    const { username } = login;
    const { large } = picture;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className='w-full h-60' src={large} alt='' /></figure>
            <div className="card-body">
                <h2 className="text-2xl font-bold text-orange-600">
                    {title} {first} {last}

                </h2>
                <span className='text-sm font-semibold text-slate-900'>{email}</span>

                <span className='text-lg font-semibold pt-4 text-cyan-600'>Username :  @{username}</span>
                <div className="divider"></div>
                <div className='flex justify-between flex-wrap space-between'>
                    <div className='flex items-center '><FaSearchLocation className='text-orange-500' /><p className='text-sm text-cyan-500 font-semibold mx-1'>  {country}</p></div>
                    <div className='flex items-center '><FaMale className='text-orange-500' /><p className='text-sm text-cyan-500 font-semibold mx-1'>  {gender}</p></div>
                    <div className='flex items-center'><AiOutlinePhone className='text-orange-500' /><p className='text-sm text-cyan-500 font-semibold mx-1'>  {phone}</p></div>
                </div>


            </div>
            <button className="btn btn-ghost bg-orange-400 text-md hover:bg-orange-500 text-white" onClick={()=>setData()}>Get User</button>
        </div>
    )
}

export default Card