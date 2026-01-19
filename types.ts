export interface Trip {
  id: string;
  time: string;
  origin: string;
  destination: string;
  seatsAvailable: number;
  status: 'scheduled' | 'full' | 'departed';
}

export interface Passenger {
  id: number;
  name: string;
  seat: string;
  status: 'pending' | 'checked';
  origin: string;
  dest: string;
  paymentMethod: 'efectivo' | 'transferencia' | 'web';
  amount?: number;
}
