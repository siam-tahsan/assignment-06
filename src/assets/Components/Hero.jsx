import React from 'react'
import banner from '../../assets/banner.png'
import play from '../../assets/play.png'

function Hero() {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={banner}
                    className="max-w-sm rounded-lg shadow-2xl "
                />
                <div className='max-w-140 lg:text-left md:text-center'>
                    <p className='text-purple-700 font-medium'> <span></span> New: AI-Powered Tools Available</p>
                    <h1 className="text-5xl font-bold">Supercharge Your Digital Workflow</h1>
                    <p className="py-6">
                        Access premium AI tools, design assets, templates, and productivity
                        software all in one place. Start creating faster today.
                        Explore Products
                    </p>
                    
                    <div className='flex gap-3'>
                        <button className="btn btn-primary rounded-full">Explore Products</button>
                        <button className='btn btn-outline border border-purple-700 rounded-full'> <img src={play} alt="" /> Watch Demo</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero