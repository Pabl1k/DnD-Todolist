interface GrabDropType {
  board: number | null;
  item: number | null;
}

export interface ItemLocationType {
  start: GrabDropType;
  end: GrabDropType;
}
