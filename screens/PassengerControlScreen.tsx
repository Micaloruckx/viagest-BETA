import React from 'react';
import { useNavigate } from 'react-router-dom';

const PassengerControlScreen: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white min-h-screen flex flex-col relative overflow-x-hidden">
            <header className="sticky top-0 z-40 bg-background-dark/95 backdrop-blur-sm border-b border-white/5 px-4 py-3 flex items-center justify-between">
                <button onClick={() => navigate(-1)} className="flex items-center justify-center p-2 rounded-full hover:bg-white/5 transition-colors text-white">
                    <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center gap-2">
                        <div className="size-6 bg-gradient-to-tr from-primary to-teal-600 rounded-md flex items-center justify-center">
                            <span className="material-symbols-outlined text-background-dark text-sm font-bold">directions_bus</span>
                        </div>
                        <h1 className="text-lg font-bold tracking-tight text-white">Viagest<span className="text-primary font-normal">Admin</span></h1>
                    </div>
                </div>
                <div className="flex items-center gap-1">
                    <div className="px-2 py-1 bg-surface-dark rounded border border-white/10">
                        <p className="text-[10px] font-bold text-primary uppercase tracking-wider">#4023</p>
                    </div>
                </div>
            </header>

            <main className="flex-1 flex flex-col pb-24">
                <section className="p-4 grid grid-cols-2 gap-3">
                    <div className="col-span-2 bg-surface-dark rounded-xl p-5 border border-white/5 shadow-lg relative overflow-hidden group">
                        <div className="absolute right-0 top-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <span className="material-symbols-outlined text-6xl">payments</span>
                        </div>
                        <p className="text-slate-400 text-sm font-medium mb-1">Total Recaudado</p>
                        <div className="flex items-baseline gap-1">
                            <span className="text-3xl font-bold text-white tracking-tight">$450.000</span>
                            <span className="text-xs text-primary font-medium bg-primary/10 px-1.5 py-0.5 rounded">+12% vs ayer</span>
                        </div>
                    </div>
                    <div className="bg-surface-dark rounded-xl p-4 border border-white/5 flex flex-col justify-between h-24">
                        <div className="flex justify-between items-start">
                            <div className="p-1.5 bg-green-500/10 rounded-lg">
                                <span className="material-symbols-outlined text-green-400 text-xl">attach_money</span>
                            </div>
                            <span className="text-xs text-slate-500 font-medium">Efectivo</span>
                        </div>
                        <p className="text-xl font-bold text-white">$120.000</p>
                    </div>
                    <div className="bg-surface-dark rounded-xl p-4 border border-white/5 flex flex-col justify-between h-24">
                        <div className="flex justify-between items-start">
                            <div className="p-1.5 bg-blue-500/10 rounded-lg">
                                <span className="material-symbols-outlined text-blue-400 text-xl">language</span>
                            </div>
                            <span className="text-xs text-slate-500 font-medium">Web</span>
                        </div>
                        <p className="text-xl font-bold text-white">$330.000</p>
                    </div>
                </section>

                <section className="px-4 pb-2">
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                            <span className="material-symbols-outlined">search</span>
                        </div>
                        <input className="block w-full pl-10 pr-3 py-3 rounded-xl border-none bg-surface-dark text-white placeholder-slate-500 focus:ring-1 focus:ring-primary focus:bg-surface-light transition-all" placeholder="Buscar pasajero o asiento..." type="text"/>
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                            <button className="text-slate-400 hover:text-white transition-colors">
                                <span className="material-symbols-outlined text-xl">qr_code_scanner</span>
                            </button>
                        </div>
                    </div>
                </section>

                <section className="px-4 py-2 overflow-x-auto no-scrollbar">
                    <div className="flex gap-2">
                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-background-dark font-bold text-sm whitespace-nowrap shadow-md shadow-primary/20">
                            <span>Todos</span>
                            <span className="bg-background-dark/20 px-1.5 rounded text-xs">45</span>
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-dark border border-white/5 text-slate-300 font-medium text-sm whitespace-nowrap hover:bg-surface-light hover:text-white transition-colors">
                            <span>Abordado</span>
                            <span className="bg-white/10 px-1.5 rounded text-xs">32</span>
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-dark border border-white/5 text-slate-300 font-medium text-sm whitespace-nowrap hover:bg-surface-light hover:text-white transition-colors">
                            <span>Pendiente</span>
                            <span className="bg-white/10 px-1.5 rounded text-xs">12</span>
                        </button>
                    </div>
                </section>

                <section className="flex flex-col gap-3 p-4">
                    <div className="flex justify-between items-center pb-1">
                        <h3 className="text-white font-bold text-base">Lista de Pasajeros</h3>
                        <span className="text-xs text-slate-400">Orden: Asiento</span>
                    </div>

                    {/* Item 1 */}
                    <div className="bg-surface-dark rounded-xl p-4 border-l-4 border-primary flex flex-col gap-3 shadow-sm relative">
                        <div className="flex justify-between items-start">
                            <div className="flex items-start gap-3">
                                <div className="relative">
                                    <div className="size-12 rounded-full bg-cover bg-center ring-2 ring-white/10" style={{backgroundImage: "url('https://picsum.photos/100/100')"}}></div>
                                    <div className="absolute -bottom-1 -right-1 bg-surface-dark rounded-full p-0.5">
                                        <div className="bg-primary text-background-dark text-[10px] font-bold size-5 flex items-center justify-center rounded-full">12</div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-base leading-tight">Juan Pérez</h4>
                                    <div className="flex items-center gap-1 mt-1">
                                        <span className="material-symbols-outlined text-[14px] text-green-400">check_circle</span>
                                        <span className="text-xs text-green-400 font-medium">Pagado (Web)</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-1">
                                <button className="size-8 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-lg">edit</span>
                                </button>
                                <button className="size-8 flex items-center justify-center rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-colors">
                                    <span className="material-symbols-outlined text-lg">close</span>
                                </button>
                            </div>
                        </div>
                        <div className="relative pl-3 border-l border-dashed border-slate-600 ml-2 space-y-3 pb-1">
                            <div className="relative">
                                <div className="absolute -left-[17px] top-1 size-2 rounded-full border border-primary bg-background-dark"></div>
                                <p className="text-slate-300 text-sm"><span className="text-white font-medium">10:00</span> Terminal Sur</p>
                            </div>
                            <div className="relative">
                                <div className="absolute -left-[17px] top-1.5 size-2 rounded-full bg-primary"></div>
                                <p className="text-slate-300 text-sm"><span className="text-white font-medium">11:45</span> Plaza Viña</p>
                            </div>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="bg-surface-dark rounded-xl p-4 border-l-4 border-yellow-500 flex flex-col gap-3 shadow-sm">
                        <div className="flex justify-between items-start">
                            <div className="flex items-start gap-3">
                                <div className="relative">
                                    <div className="size-12 rounded-full bg-cover bg-center ring-2 ring-white/10" style={{backgroundImage: "url('https://picsum.photos/101/101')"}}></div>
                                    <div className="absolute -bottom-1 -right-1 bg-surface-dark rounded-full p-0.5">
                                        <div className="bg-slate-700 text-white text-[10px] font-bold size-5 flex items-center justify-center rounded-full">14</div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-base leading-tight">Ana Garcia</h4>
                                    <div className="flex items-center gap-1 mt-1">
                                        <span className="material-symbols-outlined text-[14px] text-yellow-500">pending</span>
                                        <span className="text-xs text-yellow-500 font-medium">Pago Pendiente</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-1">
                                <button className="size-8 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-lg">edit</span>
                                </button>
                                <button className="size-8 flex items-center justify-center rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-colors">
                                    <span className="material-symbols-outlined text-lg">delete</span>
                                </button>
                            </div>
                        </div>
                        <div className="relative pl-3 border-l border-dashed border-slate-600 ml-2 space-y-3 pb-1">
                            <div className="relative">
                                <div className="absolute -left-[17px] top-1 size-2 rounded-full border border-slate-400 bg-background-dark"></div>
                                <p className="text-slate-300 text-sm"><span className="text-white font-medium">10:15</span> Pajaritos</p>
                            </div>
                            <div className="relative">
                                <div className="absolute -left-[17px] top-1.5 size-2 rounded-full bg-slate-400"></div>
                                <p className="text-slate-300 text-sm"><span className="text-white font-medium">12:00</span> Terminal Valpo</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <div className="fixed bottom-6 right-6 z-50">
                <button onClick={() => navigate('/new-booking')} className="size-14 rounded-full bg-primary text-background-dark shadow-lg shadow-primary/30 flex items-center justify-center hover:bg-teal-300 transition-all active:scale-95">
                    <span className="material-symbols-outlined text-3xl">add</span>
                </button>
            </div>
        </div>
    );
};

export default PassengerControlScreen;