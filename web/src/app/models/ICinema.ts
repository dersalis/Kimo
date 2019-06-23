export interface ICher {
  id: number;
  position: number;
  isSelected: boolean;
}

export interface IRow {
  position: number;
  chers: ICher[];
}
