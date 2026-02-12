import React, { useState } from 'react';
import Header from './header';
import {
    ArrowLeft, MapPin, Calendar, Clock, CreditCard,
    Truck, ShieldCheck, ChevronRight, CheckCircle2, Navigation
} from 'lucide-react';

const Check_out = () => {
    const [paymentMethod, setPaymentMethod] = useState('online');

    const cartItems = [
        { id: 1, name: 'T-Shirt / Top', qty: 3, price: 147 },
        { id: 2, name: 'Bottom / Jeans', qty: 2, price: 158 },
        { id: 5, name: 'Designer Suit', qty: 1, price: 499 }
    ];

    const subtotal = 804;
    const pickupFee = 0; 
    const tax = 40;
    const total = subtotal + tax;

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100">

         <Header />

            <div className="pt-32 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-10">

   
                <div className="lg:col-span-8 space-y-8">


                    <div className="bg-white rounded-3xl border border-slate-100 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.1)] p-8 lg:p-10 shadow-2xl space-y-10">

             
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                                    <Truck className="w-5 h-5" />
                                </div>
                                <h2 className="text-2xl font-black tracking-tight uppercase">Pickup Logistics</h2>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-4">Pickup Address</label>
                                    <div className="relative">
                                        <Navigation className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-500" />
                                        <input type="text" placeholder="House No, Street, Area..." className="w-full pl-14 pr-6 py-4 bg-slate-50 border-none rounded-3xl outline-none focus:ring-4 focus:ring-blue-50 transition-all" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-4">Date</label>
                                        <input type="date" className="w-full px-6 py-4 bg-slate-50 border-none rounded-3xl outline-none focus:ring-4 focus:ring-blue-50 transition-all text-sm" />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-4">Time</label>
                                        <div className="relative group">
                                            <Clock className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-600" />
                                     
                                            <input 
                                                type="time" 
                                                className="w-full pl-12 pr-4 py-5 bg-slate-50 border-none rounded-[24px] outline-none focus:ring-4 focus:ring-blue-50 transition-all text-xs font-bold uppercase tracking-widest text-slate-600" 
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="h-px bg-slate-100 w-full" />


                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-white">
                                    <CheckCircle2 className="w-5 h-5" />
                                </div>
                                <h2 className="text-2xl font-black tracking-tight uppercase">Drop-off Details</h2>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-4">Delivery Address</label>
                                    <div className="relative">
                                        <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-500" />
                                        <input type="text" placeholder="House No, Street, Area..." className="w-full pl-14 pr-6 py-4 bg-slate-50 border-none rounded-3xl outline-none focus:ring-4 focus:ring-blue-50 transition-all" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-4">Preferred Date</label>
                                        <input type="date" className="w-full px-6 py-4 bg-slate-50 border-none rounded-3xl outline-none focus:ring-4 focus:ring-blue-50 transition-all text-sm" />
                                    </div>
                                   <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-4">Time</label>
                                        <div className="relative group">
                                            <Clock className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-600" />
                                           
                                            <input 
                                                type="time" 
                                                className="w-full pl-12 pr-4 py-5 bg-slate-50 border-none rounded-[24px] outline-none focus:ring-4 focus:ring-blue-50 transition-all text-xs font-bold uppercase tracking-widest text-slate-600" 
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="bg-white rounded-3xl border border-slate-100 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.1)] p-8 lg:p-10 shadow-2xl space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white">
                                <CreditCard className="w-5 h-5" />
                            </div>
                            <h2 className="text-2xl font-black tracking-tight uppercase">Payment Method</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[

                                { id: 'UPI', label: 'UPI Payment', sub: 'GPAY,PAYTM,PhonePay' },
                                { id: 'Net Banking', label: 'Banking', sub: 'Debit / Credit card' },
                                { id: 'COD', label: 'Cash on Delivery', sub: 'Pay after cleaning' },


                            ].map((method) => (
                                <button
                                    key={method.id}
                                    onClick={() => setPaymentMethod(method.id)}
                                    className={`p-6 rounded-[30px] border-2 text-left transition-all ${paymentMethod === method.id ? 'border-blue-600 bg-blue-50/50' : 'border-slate-50 bg-slate-50 hover:border-slate-200'}`}
                                >
                                    <div className={`w-5 h-5 rounded-full border-2 mb-4 flex items-center justify-center ${paymentMethod === method.id ? 'border-blue-600' : 'border-slate-300'}`}>
                                        {paymentMethod === method.id && <div className="w-2.5 h-2.5 bg-blue-600 rounded-full" />}
                                    </div>
                                    <p className="font-bold text-sm text-slate-800">{method.label}</p>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase mt-1">{method.sub}</p>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>


                <div className="lg:col-span-4 space-y-6">
                    <div className="bg-    rounded-3xl border border-slate-100 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.1)] text-black rounded-[40px] p-8 lg:p-10 shadow-2xl sticky top-28">
                        <h3 className="text-sm font-black uppercase tracking-[0.2em] mb-8 text-slate-500">Bill Summary</h3>

                        <div className="space-y-6 mb-10">
                            {cartItems.map(item => (
                                <div key={item.id} className="flex justify-between items-start">
                                    <div>
                                        <p className="text-sm font-bold">{item.name}</p>
                                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Qty: {item.qty}</p>
                                    </div>
                                    <p className="text-sm font-black">₹{item.price}</p>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-4 pt-8 border-t border-slate-800">
                            <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-widest">
                                <span>Subtotal</span>
                                <span>₹{subtotal}</span>
                            </div>
                            <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-widest">
                                <span>Pickup & Drop</span>
                                <span className="text-emerald-400">FREE</span>
                            </div>
                            <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-widest">
                                <span>GST (5%)</span>
                                <span>₹{tax}</span>
                            </div>

                            <div className="pt-6 flex justify-between items-end">
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">Total Payable</p>
                                <p className="text-5xl font-black tracking-tighter">₹{total}</p>
                            </div>
                        </div>
                        
                        <button className="w-full cursor-pointer bg-gradient-to-r from-[#8290c3] to-[#0e41f4] text-white font-black text-xs uppercase tracking-[0.2em] py-6 rounded-3xl mt-10 transition-all flex items-center justify-center gap-3 active:scale-95 shadow-xl shadow-blue-500/20">
                            Confirm Booking <ChevronRight className="w-4 h-4" />
                        </button>

                        <p className="text-[9px] text-center text-slate-500 font-bold uppercase tracking-widest mt-6 leading-relaxed">
                            By clicking, you agree to Laundry Cloud’s Terms of Service & Damage Policy.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Check_out;