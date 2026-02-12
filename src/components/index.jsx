
import React, { useState } from 'react';
import LaundryIcons from './icons';
import Header from './header';
import {
     MapPin, ShieldCheck, Clock, ArrowRight,
    Menu, X, Smartphone, CheckCircle2,
    Mail, Phone, Instagram, Facebook, Twitter, Linkedin,
    Zap, Sparkles, Award
} from 'lucide-react';
    

const IndexPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

const serviceCategories = [
    { title: "Wash & Fold", icon: <LaundryIcons.WashFold />, tag: "Best Seller" },
    { title: "Dry Cleaning", icon: <LaundryIcons.DryClean />, tag: null },
    { title: "Steam Ironing", icon: <LaundryIcons.SteamIron />, tag: "Sale" },
    { title: "Shoe Laundry", icon: <LaundryIcons.Shoe />, tag: null },
    { title: "Home Linen", icon: <LaundryIcons.HomeLinen />, tag: null },
    { title: "Premium Silk", icon: <LaundryIcons.PremiumSilk />, tag: "Expert" }
];

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100">
            <Header/>
            <section className="pt-32 lg:pt-48 pb-20 px-6 lg:px-20 overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
                    <div className="w-full lg:w-[45%] space-y-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest border border-blue-100 animate-bounce">
                            <Sparkles className="w-3 h-3" /> New: Dry Cleaning
                        </div>
                        <h1 className="text-6xl lg:text-8xl font-black text-slate-900 leading-[0.95] tracking-tighter">
                            Laundry <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Service.</span>
                        </h1>

                        <div className="bg-white rounded-3xl border border-slate-100 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.1)] p-8">
                            <h2 className="text-lg font-bold text-slate-400 mb-8 uppercase tracking-widest">Select Category</h2>
                            <div className="grid grid-cols-3 gap-y-10 gap-x-4">
                                {serviceCategories.map((cat, i) => (
                                    <div key={i} className="flex flex-col items-center gap-3 cursor-pointer group">
                                        <div className="relative">
                                            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-slate-50 rounded-[2rem] flex items-center justify-center text-3xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-inner group-hover:-translate-y-2 group-hover:shadow-xl group-hover:shadow-blue-200">
                                                {cat.icon}
                                            </div>
                                            {cat.tag && (
                                                <span className={`absolute -top-2 left-1/2 -translate-x-1/2 text-[9px] font-black uppercase px-2 py-1 rounded-lg text-white ${cat.tag === 'Sale' ? 'bg-emerald-500' : 'bg-blue-600'} shadow-md`}>
                                                    {cat.tag}
                                                </span>
                                            )}
                                        </div>
                                        <span className="text-[11px] font-black text-slate-500 text-center uppercase tracking-tight group-hover:text-blue-600">
                                            {cat.title}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div><div className="w-full lg:w-[55%] relative h-[600px]">
                        <div className="grid grid-cols-2 gap-6 h-full">
                            <div className="rounded-[3rem] overflow-hidden shadow-2xl bg-slate-200 -rotate-3 hover:rotate-0 transition-transform duration-500">
                                <img src="https://plus.unsplash.com/premium_photo-1678218580850-15c50b9f3525?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Premium Wash" className="w-full h-full object-cover transition-all" />
                            </div>
                            <div className="rounded-[3rem] overflow-hidden shadow-2xl bg-slate-100 translate-y-12 rotate-3 hover:rotate-0 transition-transform duration-500">
                                <img src="https://images.unsplash.com/photo-1604254607827-01db84510729?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Dry Cleaning" className="w-full h-full object-cover transition-all" />
                            </div>
                        </div>
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-blue-100/50 blur-[120px] rounded-full"></div>
                    </div>
                </div>
            </section>

           
            <section className="py-32 px-6 lg:px-20 space-y-40">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
                    <div className="flex-1 space-y-8">
                        <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-xl shadow-blue-100">
                            <ShieldCheck className="w-8 h-8" />
                        </div>
                        <h3 className="text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                            Medical-Grade <br />
                            <span className="text-blue-600">UV-C Sanitization</span>
                        </h3>
                        <p className="text-lg text-slate-500 leading-relaxed font-medium">
                            Standard washing removes dirt; we remove what you can't see. Every garment passes through our proprietary UV-C sterilization chamber, neutralizing 99.9% of bacteria, viruses, and allergens without harsh chemicals.
                        </p>
                        <ul className="space-y-4">
                            {['Zero Chemical Residue', 'Hypoallergenic Finish', 'Safe for Infants'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 font-bold text-slate-700">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex-1 w-full aspect-square rounded-[4rem] bg-slate-100 overflow-hidden relative border-[12px] border-white shadow-2xl">
                        <img src="https://images.unsplash.com/photo-1520434901111-8e9bcb42c628?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="UV Sanitization Process" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay"></div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-20">
                    <div className="flex-1 space-y-8">
                        <div className="w-16 h-16 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-xl shadow-indigo-100">
                            <Clock className="w-8 h-8" />
                        </div>
                        <h3 className="text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                            Hyper-Fast <br />
                            <span className="text-indigo-600">24H Turnaround</span>
                        </h3>
                        <p className="text-lg text-slate-500 leading-relaxed font-medium">
                            Our "Laundry Cloud" logistics network ensures your clothes aren't sitting in a warehouse. From the moment our rider picks up your bag, a real-time timer starts. Your clothes are back, crisp and folded, within one day.
                        </p>
                        <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 flex gap-6">
                            <div className="text-center">
                                <div className="text-2xl font-black text-indigo-600">02h</div>
                                <div className="text-[10px] uppercase font-bold text-slate-400">Processing</div>
                            </div>
                            <div className="w-px h-10 bg-slate-200"></div>
                            <div className="text-center">
                                <div className="text-2xl font-black text-indigo-600">18h</div>
                                <div className="text-[10px] uppercase font-bold text-slate-400">Quality Check</div>
                            </div>
                            <div className="w-px h-10 bg-slate-200"></div>
                            <div className="text-center">
                                <div className="text-2xl font-black text-indigo-600">24h</div>
                                <div className="text-[10px] uppercase font-bold text-slate-400">Delivered</div>
                            </div>
                        </div>
                    </div><div className="flex-1 w-full aspect-square rounded-[4rem] bg-slate-100 overflow-hidden border-[12px] border-white shadow-2xl">
                        <img src="https://plus.unsplash.com/premium_photo-1681487829842-2aeff98f8b63?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Express Logistics" className="w-full h-full object-cover" />
                    </div>
                </div>

    
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
                    <div className="flex-1 space-y-8">
                        <div className="w-16 h-16 rounded-2xl bg-emerald-600 flex items-center justify-center text-white shadow-xl shadow-emerald-100">
                            <Award className="w-8 h-8" />
                        </div>
                        <h3 className="text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                            Precision <br />
                            <span className="text-emerald-600">Fabric Curation</span>
                        </h3>
                        <p className="text-lg text-slate-500 leading-relaxed font-medium">
                            We don't just "do laundry." We curate care. Our experts sort by 14 different criteria including fabric weight, color bleeding potential, and fiber sensitivity. We use pH-neutral detergents tailored to water hardness.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-100">
                                <Zap className="w-5 h-5 text-emerald-600 mb-2" />
                                <div className="text-sm font-black text-slate-800">pH Balanced</div>
                            </div>
                            <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-100">
                                <Sparkles className="w-5 h-5 text-emerald-600 mb-2" />
                                <div className="text-sm font-black text-slate-800">Stain Analysis</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 w-full aspect-square rounded-[4rem] bg-slate-100 overflow-hidden border-[12px] border-white shadow-2xl">
                        <img src="https://plus.unsplash.com/premium_photo-1682129225355-82ec9875736f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Sorting Expertise" className="w-full h-full object-cover" />
                    </div>
                </div>
            </section>
            <footer className="bg-slate-900 pt-24 pb-12 px-6 lg:px-20 text-white rounded-t-[4rem]">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                      
                        <div className="space-y-8">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-sm shadow-lg shadow-blue-500/20">LC</div>
                                <span className="font-bold text-lg tracking-tighter uppercase">Laundry Cloud</span>
                            </div>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                Elevating garment care into a seamless lifestyle experience. Modern solutions for busy professionals.
                            </p>
                            <div className="flex gap-4">
                                {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                                    <a key={i} href="#" className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                                        <Icon className="w-4 h-4" />
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-8">
                            <h4 className="font-black uppercase tracking-widest text-xs text-blue-500">Navigation</h4>
                            <ul className="space-y-4 text-sm font-medium text-slate-400">
                                {['Home', 'Services', 'Pricing Plans', 'How it Works', 'Store Locator'].map((item) => (
                                    <li key={item} className="hover:text-white cursor-pointer transition-colors flex items-center gap-2 group">
                                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-8">
                            <h4 className="font-black uppercase tracking-widest text-xs text-blue-500">Contact Us</h4>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <Phone className="w-5 h-5 text-blue-500" />
                                    <div>
                                        <div className="text-sm font-bold">Paysmart payment</div>
                                        <div className="text-xs text-slate-500">+91 1234567890</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Mail className="w-5 h-5 text-blue-500" />
                                    <div>
                                        <div className="text-sm font-bold">admin@paysmartpayment.com</div>
                                        <div className="text-xs text-slate-500">Response within 2 hours</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <MapPin className="w-5 h-5 text-blue-500" />
                                    <div>
                                        <div className="text-sm font-bold">Pergudi</div><div className="text-xs text-slate-500">Chennai,Tamil Nadu</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* App Download */}
                        <div className="space-y-8">
                            <h4 className="font-black uppercase tracking-widest text-xs text-blue-500">Download App</h4>
                            <div className="space-y-4">
                                <button className="w-full h-14 rounded-2xl bg-white text-slate-900 flex items-center justify-center gap-3 font-black text-sm hover:bg-blue-50 transition-all">
                                    <Smartphone className="w-5 h-5" /> App Store
                                </button>
                                <button className="w-full h-14 rounded-2xl border border-slate-700 flex items-center justify-center gap-3 font-black text-sm hover:border-white transition-all">
                                    <Smartphone className="w-5 h-5" /> Google Play
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-slate-500 text-xs font-medium">© 2024 Laundry Cloud Technologies. All rights reserved.</p>
                        <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-500">
                            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
                            <span className="hover:text-white cursor-pointer">Terms of Service</span>
                            <span className="hover:text-white cursor-pointer">Refund Policy</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default IndexPage;