interface Order {
  asc: "asc";
  desc: "desc";
}

interface SearchData {
  name: "name";
  date: "date";
}

interface FilterData {
  value: SearchData | "";
  order: Order | "";
}

export type { Order, SearchData, FilterData };
