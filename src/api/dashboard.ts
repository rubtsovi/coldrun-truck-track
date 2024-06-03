import httpClient from '_config/httpClient';
import { Truck, TrucksFM } from '_models/trucks.ts';

export async function getDashboardData() {
  const req = httpClient.get<Truck[], Partial<TrucksFM>>('/trucks', {
    status: 'AT_JOB',
    limit: 5,
  });
  return await req.response;
}
