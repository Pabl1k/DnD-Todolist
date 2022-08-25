interface GrabDropType {
  board: number;
  item: number;
}

export interface ItemLocationType {
  start: GrabDropType;
  end: GrabDropType;
}
