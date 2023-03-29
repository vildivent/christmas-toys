export type ToyCardState = "empty" | "create" | "edit" | "selected";
export type ToyQuery = {
  q?: string;
  type?: string;
  material?: string;
  dates?: string;
  category?: string;
  box?: number;
};
