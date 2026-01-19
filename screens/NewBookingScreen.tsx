import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewBookingScreen: React.FC = () => {
    const navigate = useNavigate();
    const [paymentMethod, setPaymentMethod] = useState<'efectivo' | 'transferencia'>('efectivo');
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically validate and send data to backend
        alert('Reserva creada con éxito');
        navigate('/');
    };

    return (
        <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark">
            {/* Header */}
            <div className="flex items-center p-4 pb-2 justify-between sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md">
                <button onClick={() => navigate(-1)} className="text-slate-900 dark:text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-slate-200 dark:hover:bg-surface-dark transition-colors">
                    <span className="material-symbols-outlined text-2xl">arrow_back</span>
                </button>
                <div className="flex items-center gap-2">
                    <div className="size-8 rounded-full bg-primary flex items-center justify-center text-black">
                        <span className="material-symbols-outlined text-xl">local_taxi</span>
                    </div>
                    <h1 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight">Viagest Admin</h1>
                </div>
                <div className="size-10"></div>
            </div>

            <form onSubmit={handleSubmit} className="flex-1 w-full max-w-md mx-auto pb-24">
                <div className="px-4 pt-4 pb-2">
                    <h2 className="text-slate-900 dark:text-white tracking-tight text-[28px] font-extrabold leading-tight">Nueva Reserva</h2>
                    <p className="text-slate-500 dark:text-[#9cbaba] text-sm mt-1">Complete los detalles para agendar un nuevo viaje.</p>
                </div>

                {/* Form */}
                <div className="mt-4">
                    <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-3">Datos del Pasajero</h3>
                    <div className="px-4 pb-4">
                        <label className="block">
                            <span className="text-slate-700 dark:text-white text-sm font-medium leading-normal mb-2 block">Nombre del Pasajero</span>
                            <div className="relative flex items-center">
                                <input required className="w-full bg-white dark:bg-surface-dark text-slate-900 dark:text-white border border-slate-300 dark:border-surface-border rounded-lg h-14 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder:text-slate-400 dark:placeholder:text-[#6b8a8a] transition-all" placeholder="Ej. Juan Pérez" type="text"/>
                                <div className="absolute right-0 h-full w-12 flex items-center justify-center text-slate-400 dark:text-[#9cbaba] pointer-events-none">
                                    <span className="material-symbols-outlined">person</span>
                                </div>
                            </div>
                        </label>
                    </div>
                    <div className="px-4 pb-2">
                        <label className="block">
                            <span className="text-slate-700 dark:text-white text-sm font-medium leading-normal mb-2 block">Teléfono</span>
                            <div className="relative flex items-center">
                                <input required className="w-full bg-white dark:bg-surface-dark text-slate-900 dark:text-white border border-slate-300 dark:border-surface-border rounded-lg h-14 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder:text-slate-400 dark:placeholder:text-[#6b8a8a] transition-all" placeholder="+56 9 1234 5678" type="tel"/>
                                <div className="absolute right-0 h-full w-12 flex items-center justify-center text-slate-400 dark:text-[#9cbaba] pointer-events-none">
                                    <span className="material-symbols-outlined">call</span>
                                </div>
                            </div>
                        </label>
                    </div>
                </div>

                <div className="h-px bg-slate-200 dark:bg-surface-border mx-4 my-6"></div>

                <div>
                    <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-3">Detalles del Viaje</h3>
                    <div className="px-4 pb-4">
                        <label className="block">
                            <span className="text-slate-700 dark:text-white text-sm font-medium leading-normal mb-2 block">Lugar de Subida</span>
                            <div className="relative flex items-center">
                                <input required className="w-full bg-white dark:bg-surface-dark text-slate-900 dark:text-white border border-slate-300 dark:border-surface-border rounded-lg h-14 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder:text-slate-400 dark:placeholder:text-[#6b8a8a] transition-all" placeholder="Ej. Plaza Las Flores" type="text"/>
                                <div className="absolute right-0 h-full w-12 flex items-center justify-center text-primary pointer-events-none">
                                    <span className="material-symbols-outlined">trip_origin</span>
                                </div>
                            </div>
                        </label>
                    </div>
                    <div className="px-4 pb-2">
                        <label className="block">
                            <span className="text-slate-700 dark:text-white text-sm font-medium leading-normal mb-2 block">Lugar de Bajada</span>
                            <div className="relative flex items-center">
                                <input required className="w-full bg-white dark:bg-surface-dark text-slate-900 dark:text-white border border-slate-300 dark:border-surface-border rounded-lg h-14 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder:text-slate-400 dark:placeholder:text-[#6b8a8a] transition-all" placeholder="Ej. Terminal Retiro" type="text"/>
                                <div className="absolute right-0 h-full w-12 flex items-center justify-center text-red-400 pointer-events-none">
                                    <span className="material-symbols-outlined">location_on</span>
                                </div>
                            </div>
                        </label>
                    </div>
                </div>

                <div className="h-px bg-slate-200 dark:bg-surface-border mx-4 my-6"></div>

                <div className="px-4 pb-6">
                    <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] pb-3">Método de Pago</h3>
                    <div className="grid grid-cols-2 gap-3">
                        <label className="cursor-pointer group">
                            <input checked={paymentMethod === 'efectivo'} onChange={() => setPaymentMethod('efectivo')} className="peer sr-only" name="payment" type="radio"/>
                            <div className="flex flex-col items-center justify-center h-24 rounded-xl border-2 border-slate-200 dark:border-surface-border bg-white dark:bg-surface-dark peer-checked:border-primary peer-checked:bg-primary/10 transition-all">
                                <span className="material-symbols-outlined text-slate-500 dark:text-[#9cbaba] peer-checked:text-primary mb-1 group-hover:scale-110 transition-transform">payments</span>
                                <span className="text-sm font-semibold text-slate-700 dark:text-white peer-checked:text-primary">Efectivo</span>
                            </div>
                        </label>
                        <label className="cursor-pointer group">
                            <input checked={paymentMethod === 'transferencia'} onChange={() => setPaymentMethod('transferencia')} className="peer sr-only" name="payment" type="radio"/>
                            <div className="flex flex-col items-center justify-center h-24 rounded-xl border-2 border-slate-200 dark:border-surface-border bg-white dark:bg-surface-dark peer-checked:border-primary peer-checked:bg-primary/10 transition-all">
                                <span className="material-symbols-outlined text-slate-500 dark:text-[#9cbaba] peer-checked:text-primary mb-1 group-hover:scale-110 transition-transform">account_balance</span>
                                <span className="text-sm font-semibold text-slate-700 dark:text-white peer-checked:text-primary">Transferencia</span>
                            </div>
                        </label>
                    </div>
                </div>

                <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent pt-8">
                    <button type="submit" className="w-full h-14 bg-primary hover:bg-[#0be0e0] active:scale-[0.98] transition-all rounded-xl flex items-center justify-center shadow-lg shadow-primary/25">
                        <span className="text-black text-base font-bold tracking-wide">Confirmar Reserva</span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default NewBookingScreen;