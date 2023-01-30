export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  photo: string;
}

export interface Props {
  products: Product[];
  loading?: boolean;
}