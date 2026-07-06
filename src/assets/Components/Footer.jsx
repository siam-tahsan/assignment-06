import React from 'react'

function Footer() {
    return (
        <div>
            <footer className="bg-[#0F172A] text-slate-400 py-16 px-4 md:px-8 ">
                <div className="max-w-6xl mx-auto">

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12">

                        <div className="md:col-span-4 space-y-4">
                            <h2 className="text-3xl font-bold text-white tracking-tight">
                                DigiTools
                            </h2>
                            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
                                Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
                            </p>
                        </div>

                        {/* Product Links Column */}
                        <div className="md:col-span-2 space-y-4">
                            <h3 className="text-base font-semibold text-white tracking-wide">Product</h3>
                            <ul className="space-y-2.5 text-sm">
                                <li><a href="#features" className="hover:text-white transition-colors duration-200">Features</a></li>
                                <li><a href="#pricing" className="hover:text-white transition-colors duration-200">Pricing</a></li>
                                <li><a href="#templates" className="hover:text-white transition-colors duration-200">Templates</a></li>
                                <li><a href="#integrations" className="hover:text-white transition-colors duration-200">Integrations</a></li>
                            </ul>
                        </div>

                        {/* Company Links Column */}
                        <div className="md:col-span-2 space-y-4">
                            <h3 className="text-base font-semibold text-white tracking-wide">Company</h3>
                            <ul className="space-y-2.5 text-sm">
                                <li><a href="#about" className="hover:text-white transition-colors duration-200">About</a></li>
                                <li><a href="#blog" className="hover:text-white transition-colors duration-200">Blog</a></li>
                                <li><a href="#careers" className="hover:text-white transition-colors duration-200">Careers</a></li>
                                <li><a href="#press" className="hover:text-white transition-colors duration-200">Press</a></li>
                            </ul>
                        </div>

                        {/* Resources Links Column */}
                        <div className="md:col-span-2 space-y-4">
                            <h3 className="text-base font-semibold text-white tracking-wide">Resources</h3>
                            <ul className="space-y-2.5 text-sm">
                                <li><a href="#docs" className="hover:text-white transition-colors duration-200">Documentation</a></li>
                                <li><a href="#help" className="hover:text-white transition-colors duration-200">Help Center</a></li>
                                <li><a href="#community" className="hover:text-white transition-colors duration-200">Community</a></li>
                                <li><a href="#contact" className="hover:text-white transition-colors duration-200">Contact</a></li>
                            </ul>
                        </div>

                        {/* Social Links Column */}
                        <div className="md:col-span-2 space-y-4">
                            <h3 className="text-base font-semibold text-white tracking-wide">Social Links</h3>
                            <div className="flex items-center gap-3">
                                {/* Instagram */}
                                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-9 h-9 bg-white text-[#0F172A] rounded-full flex items-center justify-center hover:bg-slate-200 transition-colors duration-200">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                    </svg>
                                </a>
                                {/* Facebook */}
                                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-9 h-9 bg-white text-[#0F172A] rounded-full flex items-center justify-center hover:bg-slate-200 transition-colors duration-200">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.8z"></path>
                                    </svg>
                                </a>
                                {/* X (Twitter) */}
                                <a href="https://x.com" target="_blank" rel="noreferrer" className="w-9 h-9 bg-white text-[#0F172A] rounded-full flex items-center justify-center hover:bg-slate-200 transition-colors duration-200">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* Divider Line */}
                    <div className="border-t border-slate-800 w-full pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                        <div>
                            &copy; 2026 Digitools. All rights reserved.
                        </div>

                        {/* Bottom Legal Links */}
                        <div className="flex items-center gap-6">
                            <a href="#privacy" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
                            <a href="#terms" className="hover:text-white transition-colors duration-200">Terms of Service</a>
                            <a href="#cookies" className="hover:text-white transition-colors duration-200">Cookies</a>
                        </div>
                    </div>

                </div>
            </footer>
        </div>
    )
}

export default Footer