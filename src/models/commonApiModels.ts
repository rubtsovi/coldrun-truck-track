export interface CommonApiFM<SortByObject extends string> {
  limit: number;
  page: number;
  order: 'asc' | 'desc';
  sort: SortByObject;
}
