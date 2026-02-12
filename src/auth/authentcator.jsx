import React, { useState } from 'react';
import { Mail, Smartphone, User, ArrowRight, Star, Clock, X, Search } from 'lucide-react';


const Authentication = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [step, setStep] = useState(1); 

  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center font-sans antialiased overflow-hidden">
      
      <div className="w-full h-full lg:w-[98vw] lg:h-[100vh] bg-gradient-to-r from-[#7b8cc7] to-[#f3f3f0] shadow-2xl overflow-hidden flex flex-col lg:flex-row relative">
        

        <div className="w-full lg:w-[42%] flex flex-col p-8 lg:p-16 justify-between relative z-10">
          
     
          <div className="flex items-center">
            <div className="bg-[#F5F5F5] border border-slate-200 px-5 py-2 rounded-full flex items-center gap-3 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-[#1D82F5] flex items-center justify-center text-white font-bold text-xs">LC</div>
              <span className="font-bold text-slate-700 tracking-tight text-sm uppercase">Laundry Cloud</span>
            </div>
          </div>

      
          <div className="max-w-sm mx-auto w-full">
            <div className="text-center lg:text-left mb-10">
              <h1 className="text-4xl font-normal text-slate-800 mb-3 tracking-tight">
                {step === 2 ? 'Verification' : (isLogin ? 'Welcome back' : 'Start your fresh journey')}
              </h1>
              <p className="text-slate-700 text-sm font-light">
                {isLogin ? 'Sign in to manage your orders' : 'Sign up and get your washing journey easy'}
              </p>
            </div>

            <form className="space-y-4">
              {step === 1 ? (
                <>
                  {!isLogin && (
                    <div className="relative">
                      <input type="text" placeholder="Full Name" className="w-full bg-[#F5F5F5] rounded-full px-6 py-4 outline-none text-slate-600 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-100 transition-all border-none" />
                      <User className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-300 w-5 h-5" />
                    </div>
                  )}
                  <div className="relative">
                    <input type="email" placeholder="Email Address" className="w-full bg-[#F5F5F5] rounded-full px-6 py-4 outline-none text-slate-600 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-100 transition-all border-none" />
                    <Mail className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-300 w-5 h-5" />
                  </div>
                  <div className="relative">
                    <input type="tel" placeholder="Mobile Number" className="w-full bg-[#F5F5F5] rounded-full px-6 py-4 outline-none text-slate-600 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-100 transition-all border-none" />
                    <Smartphone className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-300 w-5 h-5" />
                  </div>
                </>
              ) : (
                <div className="flex gap-3 justify-center">
                  {[1, 2, 3, 4].map((i) => (
                    <input key={i} type="text" maxLength={1} className="w-14 h-14 bg-white text-black rounded-2xl text-center text-2xl font-bold border-2 border-slate-100 focus:border-blue-400 outline-none" />
                  ))}
                </div>
              )}

              <button 
                type="button"
                onClick={() => setStep(step === 1 ? 2 : 1)}
                className="w-full cursor-pointer bg-[#70d58f] hover:bg-[#70d58f] text-slate-800 font-bold rounded-full py-4 shadow-lg transition-all mt-4"
              >
                {step === 1 ? 'Continue' : 'Verify'}
              </button>

            </form>
          </div>
          <div className="flex justify-between items-center text-[15px] text-black">
            <p>
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button onClick={() => setIsLogin(!isLogin)} className="ml-2 cursor-pointer">
                {isLogin ? 'Sign up' : 'Sign in'}
              </button>
            </p>
            <a href="#" className="text-slate-700">Terms & Conditions</a>
          </div>
        </div>

 
        <div className="hidden lg:block w-[58%] h-full p-6 pl-0">
          <div className="w-full h-full rounded-[45px] relative overflow-hidden group">
            
            
            <img
            src ="https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[20s] group-hover:scale-110"
              alt="Team"
            />
            <div className="absolute inset-0 bg-black/5"></div>

            
            <div className="absolute top-12 left-12 bg-white/90 backdrop-blur-xl p-5 rounded-2xl shadow-xl w-64 animate-in slide-in-from-left duration-700">
               <div className="flex justify-between items-center mb-4">
                  <h4 className="text-slate-800 font-bold text-sm">Order #47,178,909</h4>
                  <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
               </div>
               <div className="h-1.5 w-full bg-slate-100 rounded-full">
                  <div className="h-full w-2/3 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full"></div>
               </div>
            </div>

           
            <div className="absolute top-[40%] right-12 bg-white/95 backdrop-blur-xl p-5 rounded-2xl shadow-2xl w-72 border border-white/20">
              <div className="flex gap-1 text-yellow-400 mb-2">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed mb-4">
                "Fresh Laundry has completely changed my weekends. The pickup is seamless and the quality is amazing!"
              </p>
              <div className="flex items-center gap-3">
                <img src="https://i.pravatar.cc/100?img=32" className="w-8 h-8 rounded-full" alt="User" />
                <div>
                  <p className="text-[10px] font-bold text-slate-800">Vinisha V</p>
                  <p className="text-[9px] text-slate-400 italic font-medium">T.nagar, Chennai</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-12 left-12 bg-white/95 backdrop-blur-xl p-6 rounded-[35px] shadow-2xl w-80">
              <div className="flex justify-between items-center mb-4">
                <h5 className="font-bold text-slate-800 text-xs">Daily Pickups</h5>
                <div className="flex -space-x-2">
                   {[1,2,3].map(i => (
                     <img key={i} src={`https://i.pravatar.cc/100?img=${i+20}`} className="w-6 h-6 rounded-full border-2 border-white" alt="Team" />
                   ))}
                </div>
              </div>
              
              <div className="grid grid-cols-7 gap-2 text-center text-[10px] mb-2 font-bold text-slate-300 uppercase tracking-widest">
                <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
              </div>
              <div className="grid grid-cols-7 gap-2">
                {[19,20,21,22,23,24,25].map((d, i) => (
                  <div key={i} className={`h-8 flex items-center justify-center rounded-xl text-[11px] font-bold ${i === 3 ? 'bg-yellow-400 text-slate-800 shadow-md shadow-yellow-100' : 'text-slate-400'}`}>
                    {d}
                  </div>
                ))}
              </div>
            </div>

           
            <div className="absolute bottom-12 right-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-4 flex gap-6 text-white text-xs font-bold shadow-lg animate-in slide-in-from-bottom duration-1000">
               <span className="opacity-50">22</span>
               <span className="opacity-50">23</span>
               <span className="opacity-50">24</span>
               <span className="text-yellow-400 border-b-2 border-yellow-400 pb-1">25</span>
               <span className="opacity-50">26</span>
               <span className="opacity-50">27</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;