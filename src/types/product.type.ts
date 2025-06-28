export interface IProduct {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  price: number;
  stock: number;
  variants?: {
    label: string;
    available: boolean;
  }[];
}
