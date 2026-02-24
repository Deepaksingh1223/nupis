import React from 'react';

export default function NupipsSplitLogin() {
  return (
    <div className="min-h-screen bg-[#FDFCFB] flex items-center justify-center p-4 md:p-10 font-sans relative overflow-hidden">
      
      {/* --- Aesthetic Background Elements --- */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-rose-50/50 blur-[120px] rounded-full" />

      {/* Main Container Card */}
      <div className="relative z-10 w-full max-w-6xl bg-white rounded-[2.5rem] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.06)] flex flex-col md:flex-row overflow-hidden border border-white">
        
        {/* LEFT SIDE: FORM SECTION */}
        <div className="w-full md:w-[45%] p-8 lg:p-16 flex flex-col justify-center">
          <div className="max-w-sm mx-auto w-full">
            <div className="mb-10">
              <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200 mb-6">
                 <span className="text-white text-xl font-bold italic">n</span>
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Welcome Back</h2>
              <p className="text-slate-500 mt-2 font-medium">Please enter your details to sign in.</p>
            </div>

            <form className="space-y-5">
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="name@nupips.com"
                  className="w-full bg-slate-50/50 border border-slate-100 rounded-2xl px-5 py-4 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-4 focus:ring-indigo-500/5 focus:border-indigo-400 transition-all"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between px-1">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Password</label>
                  <button type="button" className="text-xs text-indigo-600 font-bold hover:underline">Forgot?</button>
                </div>
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full bg-slate-50/50 border border-slate-100 rounded-2xl px-5 py-4 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-4 focus:ring-indigo-500/5 focus:border-indigo-400 transition-all"
                />
              </div>

              <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-2xl shadow-xl shadow-slate-200 transition-all active:scale-[0.98]">
                Sign In
              </button>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <button type="button" className="flex items-center justify-center gap-2 bg-white border border-slate-100 py-3 rounded-2xl hover:bg-slate-50 transition-all shadow-sm">
                  <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-4 h-4" alt="Google" />
                  <span className="text-xs font-bold text-slate-700">Google</span>
                </button>
                <button type="button" className="flex items-center justify-center gap-2 bg-white border border-slate-100 py-3 rounded-2xl hover:bg-slate-50 transition-all shadow-sm">
                  <img src="https://www.svgrepo.com/show/445841/apple-black.svg" className="w-4 h-4" alt="Apple" />
                  <span className="text-xs font-bold text-slate-700">Apple</span>
                </button>
              </div>
            </form>

            <p className="text-center mt-10 text-slate-500 text-sm font-medium">
              New here? <span className="text-indigo-600 font-bold cursor-pointer hover:underline">Create an account</span>
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: DETAIL CONTENT & IMAGE */}
        <div className="hidden md:block w-[55%] relative overflow-hidden bg-slate-50">
          {/* Main Background Image (Trading/Dashboard Vibe) */}
          <img 
            src="https://t4.ftcdn.net/jpg/06/12/22/29/360_F_612222999_7nT8JXjdVkJMOdRHLBhQBqTvV8flOEJO.jpg" 
            alt="Trading Dashboard" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Soft Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/40 via-transparent to-transparent" />

          {/* Floating Glass Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-12 text-white">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-[2rem] shadow-2xl max-w-md">
              <span className="bg-indigo-500/20 text-indigo-800 text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full border border-indigo-400/30">
                Premium Access
              </span>
              <h3 className="text-3xl font-black mt-4 leading-tight">Master your financial strategy with nupips.</h3>
              <p className="text-indigo-500 mt-4 text-sm leading-relaxed font-medium">
                Get real-time insights, expert forex education, and advanced portfolio management tools all in one place.
              </p>
              
              {/* Feature Tags */}
              <div className="flex gap-3 mt-6">
                <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-xl border border-white/10">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-black">Live Analytics</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-xl border border-white/10">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-black">Expert Mentors</span>
                </div>
              </div>
            </div>
          </div>

          {/* Aesthetic Floating Element (Top Right) */}
          <div className="absolute top-10 right-10 bg-white/20 backdrop-blur-lg border border-white/30 px-5 py-3 rounded-2xl shadow-xl">
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                   <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="text-xs font-black uppercase tracking-tighter text-white">Verified Platform</span>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}
