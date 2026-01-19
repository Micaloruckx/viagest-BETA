import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Passenger } from '../types';

const DriverScreen: React.FC = () => {
    const navigate = useNavigate();
    const [passengers, setPassengers] = useState<Passenger[]>([
        { id: 1, name: "Juan Pérez", seat: "1A", status: "pending", origin: "Av. Corrientes 1234", dest: "Ezeiza Terminal A", paymentMethod: 'efectivo' },
        { id: 2, name: "Maria Gonzalez", seat: "2B", status: "checked", origin: "Hotel Alvear", dest: "Ezeiza Terminal C", paymentMethod: 'web' },
        { id: 3, name: "Carlos Ruiz", seat: "3C", status: "pending", origin: "Calle Florida 500", dest: "Aeroparque J. Newbery", paymentMethod: 'transferencia' },
        { id: 4, name: "Sofia Mendez", seat: "4D", status: "pending", origin: "Av. Libertador 2200", dest: "Ezeiza Terminal C", paymentMethod: 'efectivo' }
    ]);

    const toggleStatus = (id: number) => {
        setPassengers(prev => prev.map(p => 
            p.id === id ? { ...p, status: p.status === 'pending' ? 'checked' : 'pending' } : p
        ));
    };

    return (
        <div className="bg-background-light dark:bg-background-dark font-display min-h-screen flex flex-col antialiased">
            <header className="sticky top-0 z-50 w-full bg-background-dark/95 backdrop-blur-md border-b border-gray-800 shadow-md">
                <div className="flex items-center justify-between px-4 py-3">
                    <div onClick={() => navigate(-1)} className="flex items-center gap-3 cursor-pointer">
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <span className="material-symbols-outlined text-2xl">local_taxi</span>
                        </div>
                        <div>
                            <h1 className="text-white text-lg font-bold leading-tight">Viagest</h1>
                            <p className="text-gray-400 text-xs font-medium">Viaje #1234 • En Curso</p>
                        </div>
                    </div>
                    <button className="flex size-10 items-center justify-center rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors">
                        <span className="material-symbols-outlined">map</span>
                    </button>
                </div>
            </header>

            <main className="flex-1 px-4 py-6 w-full max-w-md mx-auto">
                <div className="mb-6 flex items-center justify-between gap-4">
                    <h2 className="text-white text-2xl font-bold">Pasajeros ({passengers.length})</h2>
                    <div className="flex items-center gap-2 bg-card-dark px-3 py-1.5 rounded-lg border border-gray-800">
                        <span className="material-symbols-outlined text-primary text-xl">schedule</span>
                        <span className="text-gray-200 text-sm font-medium">14:30 ETA</span>
                    </div>
                </div>

                <div className="flex flex-col gap-5">
                    {passengers.map(passenger => {
                        const isChecked = passenger.status === 'checked';
                        return (
                            <div key={passenger.id} className={`${isChecked ? 'bg-card-dark/60 opacity-90' : 'bg-card-dark shadow-lg'} rounded-xl p-4 border border-gray-800 relative overflow-hidden group transition-all`}>
                                <div className={`absolute left-0 top-0 bottom-0 w-1 ${isChecked ? 'bg-emerald-500' : 'bg-primary'}`}></div>
                                <div className="flex flex-col gap-4 pl-2">
                                    <div className="flex justify-between items-start">
                                        <div className="flex flex-col">
                                            <span className={`${isChecked ? 'text-emerald-500' : 'text-primary'} text-xs font-bold uppercase tracking-wider mb-1`}>Asiento {passenger.seat}</span>
                                            <h3 className={`${isChecked ? 'text-gray-200 line-through decoration-emerald-500/50' : 'text-white'} text-xl font-bold leading-tight`}>{passenger.name}</h3>
                                        </div>
                                        <div className={`${isChecked ? 'bg-emerald-500/10' : 'bg-gray-800/50'} p-2 rounded-lg`}>
                                            <span className={`material-symbols-outlined ${isChecked ? 'text-emerald-500' : 'text-gray-400'}`}>{isChecked ? 'check' : 'person'}</span>
                                        </div>
                                    </div>

                                    <div className={`bg-black/20 rounded-lg p-3 flex flex-col gap-3 border border-gray-800/50 ${isChecked ? 'grayscale opacity-75' : ''}`}>
                                        <div className="flex items-start gap-3">
                                            <span className={`material-symbols-outlined ${isChecked ? 'text-gray-500' : 'text-primary'} mt-0.5 text-lg`}>trip_origin</span>
                                            <div>
                                                <p className="text-gray-400 text-xs font-medium uppercase">Origen</p>
                                                <p className="text-white text-sm font-medium leading-snug">{passenger.origin}</p>
                                            </div>
                                        </div>
                                        <div className="ml-[9px] h-2 border-l border-dashed border-gray-600 -my-2"></div>
                                        <div className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-gray-400 mt-0.5 text-lg">flag</span>
                                            <div>
                                                <p className="text-gray-400 text-xs font-medium uppercase">Destino</p>
                                                <p className="text-white text-sm font-medium leading-snug">{passenger.dest}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-stretch gap-3 mt-1">
                                        <div className="relative flex-1 min-w-[120px]">
                                            {isChecked ? (
                                                <div className="w-full bg-gray-800/50 text-gray-400 border border-gray-800 rounded-lg py-3 pl-10 pr-4 text-sm font-medium flex items-center capitalize">{passenger.paymentMethod}</div>
                                            ) : (
                                                <select className="appearance-none w-full bg-gray-800 text-white border border-gray-700 rounded-lg py-3 pl-10 pr-8 text-sm font-medium focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all">
                                                    <option value="efectivo">Efectivo</option>
                                                    <option value="transferencia">Transferencia</option>
                                                    <option value="tarjeta">Tarjeta</option>
                                                </select>
                                            )}
                                            <span className={`material-symbols-outlined absolute left-3 top-3 ${isChecked ? 'text-emerald-500' : 'text-primary'} text-xl pointer-events-none`}>{isChecked ? 'account_balance' : 'payments'}</span>
                                            {!isChecked && <span className="material-symbols-outlined absolute right-2 top-3 text-gray-500 text-xl pointer-events-none">expand_more</span>}
                                        </div>
                                        
                                        <button onClick={() => toggleStatus(passenger.id)} className={`flex-1 ${isChecked ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' : 'bg-primary hover:bg-cyan-400 text-background-dark shadow-[0_0_15px_rgba(13,242,242,0.2)]'} font-bold text-sm py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all active:scale-95`}>
                                            <span className="material-symbols-outlined text-xl font-bold">{isChecked ? 'verified' : 'check_circle'}</span>
                                            {isChecked ? 'ABORDÓ' : 'DAR PRESENTE'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="h-24"></div>
            </main>

            <div className="fixed bottom-0 left-0 right-0 p-4 bg-background-dark/95 backdrop-blur-md border-t border-gray-800">
                <button onClick={() => navigate('/')} className="w-full bg-gray-800 hover:bg-gray-700 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all border border-gray-700">
                    <span className="material-symbols-outlined">done_all</span>
                    FINALIZAR RECORRIDO
                </button>
            </div>
        </div>
    );
};

export default DriverScreen;