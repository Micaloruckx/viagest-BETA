import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

const HomeScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen w-full flex-col pb-24">
      {/* Header */}
      <header className="sticky top-0 z-20 flex items-center justify-between bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md px-4 py-3 pointer-events-none backdrop-blur-md">
        <div className="flex items-center gap-3">
          <button className="flex size-10 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined text-2xl">menu</span>
          </button>
        </div>
        <h1 className="text-xl font-bold tracking-tight">Viagest</h1>
        <div className="flex items-center gap-3">
          <button className="flex size-10 items-center justify-center rounded-full overflow-hidden bg-surface-dark border border-white/10">
            <span className="material-symbols-outlined text-xl text-primary">person</span>
          </button>
        </div>
      </header>

      {/* Month Navigator */}
      <div className="px-4 py-2">
        <div className="flex items-center justify-between rounded-2xl bg-surface-dark p-1 border border-white/5">
          <button className="flex size-10 items-center justify-center rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-colors">
            <span className="material-symbols-outlined text-xl">chevron_left</span>
          </button>
          <h2 className="text-lg font-bold leading-tight">Octubre 2023</h2>
          <button className="flex size-10 items-center justify-center rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-colors">
            <span className="material-symbols-outlined text-xl">chevron_right</span>
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="w-full px-4 pt-2 pb-6">
        <div className="mb-2 grid grid-cols-7 text-center">
          {['D','L','M','M','J','V','S'].map((d, i) => (
            <span key={i} className="text-xs font-bold uppercase tracking-wider text-slate-500">{d}</span>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-y-2">
          {[1,2,3,4].map(d => (
            <button key={d} className="flex h-10 w-full flex-col items-center justify-center rounded-full text-sm font-medium text-slate-400 hover:bg-white/5">{d}</button>
          ))}
          {/* Selected Date */}
          <button className="relative flex h-10 w-full flex-col items-center justify-center">
            <div className="flex size-9 items-center justify-center rounded-full bg-primary shadow-[0_0_15px_rgba(13,242,242,0.4)] text-background-dark font-bold">5</div>
            <div className="absolute -bottom-1 size-1 rounded-full bg-primary"></div>
          </button>
          {[6,7,8,9,10,11,12].map(d => (
            <button key={d} className="flex h-10 w-full flex-col items-center justify-center rounded-full text-sm font-medium text-white hover:bg-white/5">{d}</button>
          ))}
          <button className="relative flex h-10 w-full flex-col items-center justify-center rounded-full text-sm font-medium text-white hover:bg-white/5">
            13
            <div className="absolute bottom-1 size-1 rounded-full bg-slate-600"></div>
          </button>
          {[14,15,16,17,18,19,20,21,22,23,24,25].map(d => (
            <button key={d} className="flex h-10 w-full flex-col items-center justify-center rounded-full text-sm font-medium text-white hover:bg-white/5">{d}</button>
          ))}
          {[26,27,28,29,30].map(d => (
            <button key={d} className="flex h-10 w-full flex-col items-center justify-center rounded-full text-sm font-medium text-slate-600">{d}</button>
          ))}
        </div>
        <div className="mt-4 flex w-full justify-center">
          <div className="h-1 w-12 rounded-full bg-surface-dark"></div>
        </div>
      </div>

      {/* Trips List */}
      <div className="flex flex-1 flex-col rounded-t-[2rem] bg-surface-dark px-4 pt-6 shadow-[0_-4px_20px_rgba(0,0,0,0.4)] min-h-[400px]">
        <div className="mb-5 flex items-end justify-between">
          <h3 className="text-2xl font-bold tracking-tight text-white">Viajes del día</h3>
          <span className="mb-1 text-sm font-medium text-primary">Jueves 5</span>
        </div>
        <div className="flex flex-col gap-3">
          {/* Trip Card 1 -> Passenger List */}
          <div onClick={() => navigate('/passengers')} className="group relative flex cursor-pointer items-center justify-between rounded-2xl bg-background-dark p-4 transition-all active:scale-[0.98]">
            <div className="flex items-center gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-surface-dark text-primary shadow-inner">
                <span className="material-symbols-outlined text-2xl">directions_bus</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-white">08:00</span>
                  <span className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">Prog</span>
                </div>
                <p className="text-sm font-medium text-slate-300">Las Flores <span className="text-slate-500 mx-1">→</span> CABA</p>
                <p className="mt-0.5 text-xs font-medium text-primary">3 Asientos libres</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-slate-600 group-hover:text-primary transition-colors">chevron_right</span>
          </div>

          {/* Trip Card 2 (Full) - No Action */}
          <div className="group relative flex cursor-pointer items-center justify-between rounded-2xl bg-background-dark p-4 transition-all active:scale-[0.98]">
            <div className="flex items-center gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-surface-dark text-slate-500 shadow-inner">
                <span className="material-symbols-outlined text-2xl">directions_bus</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-white">13:30</span>
                </div>
                <p className="text-sm font-medium text-slate-300">CABA <span className="text-slate-500 mx-1">→</span> Las Flores</p>
                <p className="mt-0.5 text-xs font-bold text-red-400/80">Completo</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-slate-600 group-hover:text-primary transition-colors">chevron_right</span>
          </div>

          {/* Trip Card 3 -> Driver View */}
          <div onClick={() => navigate('/driver')} className="group relative flex cursor-pointer items-center justify-between rounded-2xl bg-background-dark p-4 transition-all active:scale-[0.98]">
            <div className="flex items-center gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-surface-dark text-primary shadow-inner">
                <span className="material-symbols-outlined text-2xl">directions_bus</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-white">18:00</span>
                </div>
                <p className="text-sm font-medium text-slate-300">Las Flores <span className="text-slate-500 mx-1">→</span> La Plata</p>
                <p className="mt-0.5 text-xs font-medium text-primary">12 Asientos libres</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-slate-600 group-hover:text-primary transition-colors">chevron_right</span>
          </div>
        </div>
      </div>

      {/* FAB */}
      <div className="fixed bottom-24 right-6 z-30">
        <Link to="/new-booking">
          <button className="flex size-14 items-center justify-center rounded-full bg-primary text-background-dark shadow-[0_4px_20px_rgba(13,242,242,0.4)] transition-transform hover:scale-105 active:scale-95">
            <span className="material-symbols-outlined text-3xl font-bold">add</span>
          </button>
        </Link>
      </div>

      <BottomNav />
    </div>
  );
};

export default HomeScreen;