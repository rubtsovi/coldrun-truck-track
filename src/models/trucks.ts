import i18n from '_config/i18n';
import { CommonApiFM } from '_models/commonApiModels.ts';

export const TRUCK_STATUS = {
  OUT_OF_SERVICE: 'OUT_OF_SERVICE',
  LOADING: 'LOADING',
  TO_JOB: 'TO_JOB',
  AT_JOB: 'AT_JOB',
  RETURNING: 'RETURNING',
} as const;

export type TruckStatus = EnumLikeValues<typeof TRUCK_STATUS>;

export const statusOptionsList = Object.values(TRUCK_STATUS).map(value => ({
  label: i18n.statuses[value],
  value,
}));

export interface Truck {
  id: number;
  name: string;
  code: string;
  description: string;
  status: TruckStatus;
}

export interface TrucksFM extends CommonApiFM<keyof Omit<Truck, 'description'>> {
  id: number;
  name: string;
  code: string;
  description: string;
  status: TruckStatus;
}
