import React from 'react'
import userPng from '../../assets/user.png'
import packagePng from '../../assets/package.png'
import rocketPng from '../../assets/rocket.png'

function Steps() {
    return (
        <div>
            <section className="bg-slate-50 py-16 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Get Started In 3 Steps</h2>
                    <p className="text-sm md:text-base text-slate-500 mb-12 max-w-md mx-auto">Start using premium digital tools in minutes, not hours.</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">

                        <div className="relative bg-white rounded-2xl border border-slate-100 p-8 shadow-sm flex flex-col items-center justify-between">
                            <span className="absolute top-4 right-4 bg-[#7C3AED] text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center">01</span>
                            <div className="w-20 h-20 bg-[#F5F3FF] rounded-full flex items-center justify-center mt-6 mb-2">
                                <img src={userPng} alt="" />
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Create Account</h3>
                                <p className="text-sm text-slate-500 leading-relaxed max-w-[240px] mx-auto">Sign up for free in seconds. No credit card required to get started.</p>
                            </div>
                        </div>

                        <div className="relative bg-white rounded-2xl border border-slate-100 p-8 shadow-sm flex flex-col items-center justify-between min-h-[350px]">
                            <span className="absolute top-4 right-4 bg-[#7C3AED] text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center">02</span>
                            <div className="w-20 h-20 bg-[#F5F3FF] rounded-full flex items-center justify-center mt-6 mb-2">
                                <img src={packagePng} alt="" />
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Choose Products</h3>
                                <p className="text-sm text-slate-500 leading-relaxed max-w-[240px] mx-auto">Browse our catalog and select the tools that fit your needs.</p>
                            </div>
                        </div>

                        <div className="relative bg-white rounded-2xl border border-slate-100 p-8 shadow-sm flex flex-col items-center justify-between min-h-[350px]">
                            <span className="absolute top-4 right-4 bg-[#7C3AED] text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center">03</span>
                            <div className="w-20 h-20 bg-[#F5F3FF] rounded-full flex items-center justify-center mt-6 mb-2">
                                <img src={rocketPng} alt="" />
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Start Creating</h3>
                                <p className="text-sm text-slate-500 leading-relaxed max-w-[240px] mx-auto">Download and start using your premium tools immediately.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Steps