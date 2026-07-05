import React from 'react'

function Transparent() {
    return (
        <div>
            <section class="bg-slate-50 py-20 px-4 font-sans">
                <div class="max-w-6xl mx-auto">
                    <div class="text-center mb-16">
                        <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Simple, Transparent Pricing</h2>
                        <p class="text-sm md:text-base text-slate-500 max-w-md mx-auto">Choose the plan that fits your needs. Upgrade or downgrade anytime.
</p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">

                        <div class="bg-[#F8F9FA] rounded-2xl border border-slate-100 p-8 flex flex-col justify-between shadow-sm min-h-[520px]">
                            <div>
                                <h3 class="text-xl font-bold text-slate-900 mb-1">Starter</h3>
                                <p class="text-sm text-slate-400 mb-6">Perfect for getting started</p>

                                <div class="flex items-baseline text-slate-900 mb-8">
                                    <span class="text-4xl font-bold font-sans">$0</span>
                                    <span class="text-sm text-slate-400 ml-1">/Month</span>
                                </div>

                                <ul class="space-y-3.0">
                                    <li class="flex items-start text-sm text-slate-600">
                                        <svg class="w-4 h-4 text-emerald-500 mr-2.5 mt-0.5 shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>
                                        <span>Access to 10 free tools</span>
                                    </li>
                                    <li class="flex items-start text-sm text-slate-600">
                                        <svg class="w-4 h-4 text-emerald-500 mr-2.5 mt-0.5 shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>
                                        <span>Basic templates</span>
                                    </li>
                                    <li class="flex items-start text-sm text-slate-600">
                                        <svg class="w-4 h-4 text-emerald-500 mr-2.5 mt-0.5 shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>
                                        <span>Community support</span>
                                    </li>
                                    <li class="flex items-start text-sm text-slate-600">
                                        <svg class="w-4 h-4 text-emerald-500 mr-2.5 mt-0.5 shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>
                                        <span>1 project per month</span>
                                    </li>
                                </ul>
                            </div>

                            <button class="w-full mt-8 bg-[#5312c4] text-white font-medium py-3 px-4 rounded-full transition-colors duration-200 text-sm">Get Started Free</button>
                        </div>

                        <div class="relative bg-[#4e1bc5] rounded-2xl p-8 flex flex-col justify-between shadow-lg min-h-[520px] transform md:-translate-y-2 border border-purple-400/20">
                            <span class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FEF3C7] text-[#D97706] text-xs font-semibold px-4 py-1.5 rounded-full shadow-sm whitespace-nowrap">Most Popular
                            </span>

                            <div>
                                <h3 class="text-xl font-bold text-white mb-1">Pro</h3>
                                <p class="text-sm text-purple-200 mb-6">Best for professionals</p>

                                <div class="flex items-baseline text-white mb-8">
                                    <span class="text-4xl font-bold">$29</span>
                                    <span class="text-sm text-purple-200 ml-1">/Month</span>
                                </div>

                                <ul class="space-y-3">
                                    <li class="flex items-start text-sm text-white">
                                        <svg class="w-4 h-4 text-white mr-2.5 mt-0.5 shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>
                                        <span>Access to all premium tools</span>
                                    </li>
                                    <li class="flex items-start text-sm text-white">
                                        <svg class="w-4 h-4 text-white mr-2.5 mt-0.5 shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>
                                        <span>Unlimited templates</span>
                                    </li>
                                    <li class="flex items-start text-sm text-white">
                                        <svg class="w-4 h-4 text-white mr-2.5 mt-0.5 shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>
                                        <span>Priority support</span>
                                    </li>
                                    <li class="flex items-start text-sm text-white">
                                        <svg class="w-4 h-4 text-white mr-2.5 mt-0.5 shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>
                                        <span>Unlimited projects</span>
                                    </li>
                                    <li class="flex items-start text-sm text-white">
                                        <svg class="w-4 h-4 text-white mr-2.5 mt-0.5 shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>
                                        <span>Cloud sync</span>
                                    </li>
                                    <li class="flex items-start text-sm text-white">
                                        <svg class="w-4 h-4 text-white mr-2.5 mt-0.5 shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>
                                        <span>Advanced analytics</span>
                                    </li>
                                </ul>
                            </div>

                            <button class="w-full mt-8 bg-white hover:bg-purple-50 text-[#521bd4] font-bold py-3 px-4 rounded-full transition-colors duration-200 text-sm shadow-sm">Start Pro Trial</button>
                        </div>

                        <div class="bg-[#F8F9FA] rounded-2xl border border-slate-100 p-8 flex flex-col justify-between shadow-sm min-h-[520px]">
                            <div>
                                <h3 class="text-xl font-bold text-slate-900 mb-1">Enterprise</h3>
                                <p class="text-sm text-slate-400 mb-6">For teams and businesses</p>

                                <div class="flex items-baseline text-slate-900 mb-8">
                                    <span class="text-4xl font-bold">$99</span>
                                    <span class="text-sm text-slate-400 ml-1">/Month</span>
                                </div>

                                <ul class="space-y-3">
                                    <li class="flex items-start text-sm text-slate-600">
                                        <svg class="w-4 h-4 text-emerald-500 mr-2.5 mt-0.5 shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>
                                        <span>Everything in Pro</span>
                                    </li>
                                    <li class="flex items-start text-sm text-slate-600">
                                        <svg class="w-4 h-4 text-emerald-500 mr-2.5 mt-0.5 shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>
                                        <span>Team collaboration</span>
                                    </li>
                                    <li class="flex items-start text-sm text-slate-600">
                                        <svg class="w-4 h-4 text-emerald-500 mr-2.5 mt-0.5 shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>
                                        <span>Custom integrations</span>
                                    </li>
                                    <li class="flex items-start text-sm text-slate-600">
                                        <svg class="w-4 h-4 text-emerald-500 mr-2.5 mt-0.5 shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>
                                        <span>Dedicated support</span>
                                    </li>
                                    <li class="flex items-start text-sm text-slate-600">
                                        <svg class="w-4 h-4 text-emerald-500 mr-2.5 mt-0.5 shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>
                                        <span>SLA guarantee</span>
                                    </li>
                                    <li class="flex items-start text-sm text-slate-600">
                                        <svg class="w-4 h-4 text-emerald-500 mr-2.5 mt-0.5 shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>
                                        <span>Custom branding</span>
                                    </li>
                                </ul>
                            </div>

                            <button class="w-full mt-8 bg-[#5c18d3] text-white font-medium py-3 px-4 rounded-full transition-colors duration-200 text-sm"> Contact Sales</button>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Transparent