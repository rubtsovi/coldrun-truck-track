import { TruckFormSchema } from '_components/TruckForm';
import httpClient from '_config/httpClient';
import { Truck, TrucksFM } from '_models/trucks.ts';

const modulePathRoot = '/trucks' as const;

export function postTruck(model: TruckFormSchema) {
  const res = httpClient.post<Truck, TruckFormSchema>(modulePathRoot, model);
  return res.response;
}

export function getTruck(id: string) {
  const truckId = parseInt(id, 10);
  const res = httpClient.get<Truck>(`${modulePathRoot}/${truckId}`);
  return res.response;
}

export function getTruckList(params?: Partial<TrucksFM>) {
  const res = httpClient.get<Truck[], Partial<TrucksFM>>(modulePathRoot, params);
  return res.response;
}

export function putTruck(id: number, data: TruckFormSchema) {
  const res = httpClient.put<Truck, TruckFormSchema>(`${modulePathRoot}/${id}`, data);
  return res.response;
}

export function deleteTruck(id: number) {
  const res = httpClient.delete(`${modulePathRoot}/${id}`);
  return res.response;
}
