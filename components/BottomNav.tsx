import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const BottomNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-10 flex h-16 items-center justify-around border-t border-white/5 bg-background-dark/95 backdrop-blur-lg pb-safe">
      <button 
        onClick={() => navigate('/')}
        className={`flex flex-col items-center gap-1 ${isActive('/') ? 'text-primary' : 'text-slate-500 hover:text-slate-300'}`}
      >
        <span className={`material-symbols-outlined text-2xl ${isActive('/') ? 'filled' : ''}`}>calendar_month</span>
        <span className="text-[10px] font-bold">Agenda</span>
      </button>
      <button 
        className="flex flex-col items-center gap-1 text-slate-500 hover:text-slate-300"
      >
        <span className="material-symbols-outlined text-2xl">commute</span>
        <span className="text-[10px] font-medium">Flota</span>
      </button>
      <button 
        className="flex flex-col items-center gap-1 text-slate-500 hover:text-slate-300"
      >
        <span className="material-symbols-outlined text-2xl">settings</span>
        <span className="text-[10px] font-medium">Config</span>
      </button>
    </nav>
  );
};

export default BottomNav;