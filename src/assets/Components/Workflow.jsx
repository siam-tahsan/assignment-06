import React from 'react'

function Workflow() {
    return (
        <div>
            <section className="w-full bg-gradient-to-r from-[#2124d8] via-[#5115df] to-[#A855F7] py-20 px-4  text-white text-center flex flex-col items-center justify-center ">
                <div className="max-w-3xl mx-auto flex flex-col items-center">

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">Ready To Transform Your Workflow?</h2>

                    <p className="text-sm md:text-base text-purple-100 max-w-xl mx-auto leading-relaxed mb-8 opacity-90">Join thousands of professionals who are already using Digitools to work smarter.<br className="hidden sm:inline" /> Start your free trial today.</p>

                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full mb-6">

                        <button className="w-full sm:w-auto bg-white text-[#5213e4] font-bold px-8 py-3.5 rounded-full shadow-md transition-colors duration-200 text-sm tracking-wide cursor-pointer">Explore Products</button>

                        <button className="w-full sm:w-auto bg-transparent text-white border-2 border-white/60  font-bold px-8 py-3 rounded-full transition-all duration-200 text-sm tracking-wide cursor-pointer">View Pricing</button>
                    </div>

                    <p className="text-xs text-purple-200/80 tracking-wide font-light">
                        14-day free trial <span className="mx-1.5">•</span> No credit card required <span className="mx-1.5">•</span> Cancel anytime
                    </p>

                </div>
            </section>
        </div>
    )
}

export default Workflow