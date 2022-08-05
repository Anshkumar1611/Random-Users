import React from 'react'
import Card from './Card'
import Loading from './Loading'

function Hero({result,setData}) {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    {result ? <Card result={result} setData={setData}/> :<Loading/>}
                </div>
            </div>
        </div>
    )
}

export default Hero