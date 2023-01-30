
import SkeletonLoader from "react-loading-skeleton";
import CardProducts from "../cardProducts/CardProducts";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  photo: string;
}

interface Props {
  products: Product[];
  loading: boolean;
}

const ProductPage = (props: Props) => {

  return (
    <div>
      {props.loading ? <SkeletonLoader /> : <CardProducts products={props.products} />}
    </div>
  );
};

export default ProductPage;
