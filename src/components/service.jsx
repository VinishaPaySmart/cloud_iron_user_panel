import React, { useState, useMemo } from 'react';
import Header from './header';
import { 
  ArrowLeft, Search, ShoppingBag, Plus, Minus, 
  Clock, ShieldCheck, ChevronRight, Trash2
} from 'lucide-react';

const ProductSelectionPage = () => {
  const [cart, setCart] = useState({});

  const products = [
    { id: 1, name: 'T-Shirt / Top', price: 49, time: '24 hrs', src: 'https://images.unsplash.com/photo-1759572095384-1a7e646d0d4f?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 2, name: 'Bottom / Jeans', price: 79, time: '24 hrs', src: 'https://images.unsplash.com/photo-1637069585336-827b298fe84a?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 3, name: 'Formal Shirt', price: 89, time: '24 hrs', src: 'https://images.unsplash.com/photo-1602810320073-1230c46d89d4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 4, name: 'Bedspread (Double)', price: 249, time: '48 hrs', src: 'https://images.unsplash.com/photo-1635594202056-9ea3b497e5c0?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 6, name: 'Silk Saree', price: 349, time: '4 Days', src: 'https://media.istockphoto.com/id/2171209544/photo/close-up-of-traditional-bangladeshi-saree-displayed-for-sale.jpg?s=1024x1024&w=is&k=20&c=yjZTVPjsU3GJnOwvvIn8epBmXy8adePzjT0T7rVNddE=' },
    { id: 7, name: 'Winter Jacket', price: 299, time: '3 Days', src: 'https://images.unsplash.com/photo-1706765779494-2705542ebe74?q=80&w=1051&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  ];

  const updateCart = (productId, delta) => {
    setCart(prev => {
      const currentQty = prev[productId] || 0;
      const newQty = Math.max(0, currentQty + delta);
      if (newQty === 0) {
        const { [productId]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [productId]: newQty };
    });
  };

  const { cartTotal, cartCount, cartItems } = useMemo(() => {
    let total = 0;
    let count = 0;
    let items = [];
    Object.keys(cart).forEach(id => {
      const product = products.find(p => p.id === parseInt(id));
      if (product) {
        total += product.price * cart[id];
        count += cart[id];
        items.push({ ...product, qty: cart[id] });
      }
    });
    return { cartTotal: total, cartCount: count, cartItems: items };
  }, [cart, products]);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100">
      <Header />
      
      <div className="pt-32 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-10">
        
        <main className="lg:col-span-8">
          <div className="bg-white rounded-3xl border border-slate-100 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.1)] p-8">
            <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <p class="text-3xl lg:text-3xl font-black tracking-tight leading-tight">IRONING <span class="text-indigo-600">SERVICE</span></p>
              <div className="relative min-w-[300px]">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input type="text" placeholder="Search item..." className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl outline-none focus:ring-4 focus:ring-blue-50 transition-all" />
              </div>
            </div>

            <div className="space-y-4">
              {products.map((item) => (
                <div key={item.id} className="group p-6 rounded-[35px] border border-slate-50 bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-blue-100/30 transition-all duration-500 flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-[24px] bg-slate-200 overflow-hidden shadow-inner flex-shrink-0">
                      <img src={item.src} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125" alt="" />
                    </div>
                    <div>
                     
                      <h4 className="font-bold text-slate-800 text-lg tracking-tight">{item.name}</h4>
                      <p className="text-sm font-black text-slate-900 mt-1">₹{item.price}</p>
                    </div>
                  </div>

                  {!cart[item.id] ? (
                    <button onClick={() => updateCart(item.id, 1)} className="bg-white border-2 border-slate-100 text-blue-600 font-black text-xs px-10 py-4 rounded-full hover:bg-gradient-to-r from-[#8290c3] to-[#0e41f4] hover:text-white transition-all shadow-sm cursor-pointer">ADD</button>
                  ) : (
                    <div className="flex items-center gap-5 bg-gradient-to-r from-[#8290c3] to-[#0e41f4] text-white rounded-full px-5 py-3 shadow-xl">
                      <button onClick={() => updateCart(item.id, -1)}><Minus className="w-4 h-4 cursor-pointer" /></button>
                      <span className="font-black text-base">{cart[item.id]}</span>
                      <button onClick={() => updateCart(item.id, 1)}><Plus className="w-4 h-4 cursor-pointer" /></button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </main>

       
        <div className="lg:col-span-4 space-y-6">
          
        
          <div className="bg-white rounded-3xl border border-slate-100 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.1)] p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-black text-sm uppercase tracking-widest">Order Summary</h3>
              <ShoppingBag className="w-5 h-5 text-blue-600" />
            </div>

            {cartCount === 0 ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto text-slate-300">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Your bag is empty</p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="max-h-[300px] overflow-y-auto pr-2 space-y-4">
                  {cartItems.map(item => (
                    <div key={item.id} className="flex justify-between items-center animate-in fade-in slide-in-from-bottom-2">
                      <div>
                        <p className="text-sm font-bold text-slate-800">{item.name}</p>
                        <p className="text-[10px] text-slate-400 font-bold">₹{item.price} × {item.qty}</p>
                      </div>
                      <p className="text-sm font-black text-blue-600">₹{item.price * item.qty}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-dashed border-slate-100 flex justify-between items-center">
                   <p className="text-xs font-black uppercase tracking-widest text-slate-400">Subtotal</p>
                   <p className="text-3xl font-black text-slate-900 tracking-tighter">₹{cartTotal}</p>
                </div>

                <button className="w-full bg-gradient-to-r cursor-pointer from-[#8290c3] to-[#0e41f4] text-white font-black text-xs uppercase tracking-[0.2em] py-6 rounded-3xl hover:bg-blue-700 transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-100">
                  Proceed <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductSelectionPage;