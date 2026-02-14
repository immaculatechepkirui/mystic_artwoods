import Image from "next/image";

export default function Footer() {
    return (
        <footer id="contact" className="footer-section bg-[#05143a] text-white pt-12 relative w-full">
            {/* Top CTA Row */}
            <div className="max-w-7xl mx-auto px-6 pb-8 border-b border-blue-900 flex flex-col md:flex-row gap-8 justify-between">
                <div className="flex-1 flex items-center gap-4 mb-6 md:mb-0">
                    <i className="bx bxs-map text-3xl text-blue-300"></i>
                    <div>
                        <h4 className="text-lg font-semibold">Find us</h4>
                        <span className="text-blue-100 text-[15px]">Rubis petrol station, Loresho Ridge Road</span>
                    </div>
                </div>
                <div className="flex-1 flex items-center gap-4 mb-6 md:mb-0">
                    <i className="bx bxs-phone text-3xl text-blue-300"></i>
                    <div>
                        <h4 className="text-lg font-semibold">Call us</h4>
                        <span className="text-blue-100 text-[15px]">+254 723 266 722</span>
                    </div>
                </div>
                <div className="flex-1 flex items-center gap-4">
                    <i className="bx bxs-envelope-open text-3xl text-blue-300"></i>
                    <div>
                        <h4 className="text-lg font-semibold">Mail us</h4>
                        <span className="text-blue-100 text-[15px]">mysticwoodwork254@gmail.com</span>
                    </div>
                </div>
            </div>

            {/* Main Content Row */}
            <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Logo + Tagline + Socials */}
                <div>
                    <div className="footer-logo mb-6 flex items-center">
                        <span className="text-2xl font-black tracking-wide text-white">Mystic <span className="text-blue-400">WoodWork</span></span>
                    </div>
                    <div className="footer-text mb-6 text-blue-100">
                        <p>Crafting Nature's Elegance into Artful Living</p>
                    </div>
                    <div className="footer-social-icon mb-2">
                        <span className="font-semibold text-white text-base mb-3 block">Follow us</span>
                        <div className="flex gap-3">
                            <a href="https://www.facebook.com/Mysticwoodworks" target="_blank" rel="noopener" className="bg-blue-900 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center text-xl transition">
                                <i className="bx bxl-facebook"></i>
                            </a>
                            <a href="https://www.instagram.com/mystic_woodworks254/" target="_blank" rel="noopener" className="bg-blue-900 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center text-xl transition">
                                <i className="bx bxl-instagram"></i>
                            </a>
                            <a href="https://www.tiktok.com/@mystic_woodworks254" target="_blank" rel="noopener" className="bg-blue-900 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center text-xl transition">
                                <i className="bx bxl-tiktok"></i>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Useful Links */}
                <div>
                    <div className="footer-widget-heading border-b border-blue-800 mb-6 pb-1">
                        <h3 className="text-lg font-bold text-white">Useful Links</h3>
                    </div>
                    <ul className="flex flex-wrap">
                        <li className="w-1/2 mb-2"><a href="#home" className="text-blue-100 hover:text-blue-400 transition">Home</a></li>
                        <li className="w-1/2 mb-2"><a href="#about" className="text-blue-100 hover:text-blue-400 transition">About</a></li>
                        <li className="w-1/2 mb-2"><a href="#services" className="text-blue-100 hover:text-blue-400 transition">Services</a></li>
                        <li className="w-1/2 mb-2"><a href="#faq" className="text-blue-100 hover:text-blue-400 transition">FAQ</a></li>
                        <li className="w-1/2 mb-2"><a href="#contact" className="text-blue-100 hover:text-blue-400 transition">Contact</a></li>
                    </ul>
                </div>
                {/* Social/Follows replaces subscribe */}
                <div>
                    <div className="footer-widget-heading border-b border-blue-800 mb-6 pb-1">
                        <h3 className="text-lg font-bold text-white">Follow Us</h3>
                    </div>
                    <div className="footer-text mb-4 text-blue-100">
                        <p>Stay connected for new pieces and inspiration. Reach out via Instagram, Facebook, or TikTok!</p>
                    </div>
                    <div className="footer-social-icon flex gap-3">
                        <a href="https://www.facebook.com/Mysticwoodworks" target="_blank" rel="noopener" className="bg-blue-900 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center text-xl transition">
                            <i className="bx bxl-facebook"></i>
                        </a>
                        <a href="https://www.instagram.com/mystic_woodworks254/" target="_blank" rel="noopener" className="bg-blue-900 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center text-xl transition">
                            <i className="bx bxl-instagram"></i>
                        </a>
                        <a href="https://www.tiktok.com/@mystic_woodworks254" target="_blank" rel="noopener" className="bg-blue-900 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center text-xl transition">
                            <i className="bx bxl-tiktok"></i>
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright Area */}
            <div className="bg-[#092056] pt-4 pb-3 w-full">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-2">
                    <div className="copyright-text text-blue-200 text-center text-sm">
                        &copy; {new Date().getFullYear()} Mystic ArtWoods. All Rights Reserved.
                    </div>
                    <div className="footer-menu flex space-x-4 text-sm">
                        <a href="#home" className="text-blue-200 hover:text-blue-400">Home</a>
                        <a href="#" className="text-blue-200 hover:text-blue-400">Terms</a>
                        <a href="#" className="text-blue-200 hover:text-blue-400">Privacy</a>
                        <a href="#" className="text-blue-200 hover:text-blue-400">Policy</a>
                        <a href="#contact" className="text-blue-200 hover:text-blue-400">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}