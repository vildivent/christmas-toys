export type ToyCardState = "empty" | "create" | "edit" | "selected";
export type ToyQuery = {
  title?: string | null;
  type?: string | null;
  material?: string | null;
  dates?: string | null;
  category?: string | null;
  size?: number | null;
  box?: number | null;
};
