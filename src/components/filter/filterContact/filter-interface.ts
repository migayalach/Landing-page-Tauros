type Order = "asc" | "desc" | "";

type SearchData = "name" | "date" | "";

interface FilterData {
  data: SearchData;
  order: Order;
}

export type { Order, SearchData, FilterData };
