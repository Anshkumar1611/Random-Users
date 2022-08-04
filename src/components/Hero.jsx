import React from 'react'
import Card from './Card'

function Hero({ dataFetching }) {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <Card dataFetching={dataFetching} />
                </div>
            </div>
        </div>
    )
}

export default Hero