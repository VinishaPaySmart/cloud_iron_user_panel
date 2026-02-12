import {
    Search, MapPin,
    Menu, ShoppingBag,
    CircleUserRound,
} from 'lucide-react';



export default function Header() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 lg:px-20 py-4 flex items-center justify-between">
            <div className="flex items-center gap-12">
                <div className="flex items-center gap-2 group cursor-pointer">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black shadow-lg shadow-blue-200 group-hover:rotate-6 transition-transform">CR</div>
                    <span className="font-bold text-xl tracking-tighter uppercase">Cloud Ironing</span>
                </div>

                <div className="hidden lg:flex items-center gap-3 bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-xl cursor-pointer hover:bg-white transition-all shadow-sm">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-semibold text-slate-600">63, IGP Rd, Pergudi</span>
                    <span className="text-slate-300">|</span>
                    <span className="text-xs font-bold text-blue-600 uppercase">Change</span>
                </div>
            </div>

            <div className="hidden md:flex flex-1 max-w-md mx-8 group">
                <div className="relative w-full">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-600" />
                    <input
                        type="text"
                        placeholder="Search for 'Premium Silk'..."
                        className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:bg-white focus:ring-4 focus:ring-blue-50 transition-all text-sm"
                    />
                </div>
            </div>  <div className="flex items-center gap-6">
                <div className="relative w-11 h-11 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all cursor-pointer">
                    <ShoppingBag className="w-5 h-5" />
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">2</span>
                </div>
                <div className="relative w-11 h-11 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all cursor-pointer">
                    <CircleUserRound className="w-6 h-5" />
                </div>
                <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <Menu className="w-6 h-6" />
                </button>
            </div>
        </nav>
    );
}