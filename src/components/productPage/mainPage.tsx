
import SkeletonLoader from "react-loading-skeleton";
import CardProducts from "../cardProducts/CardProducts";
import { Props} from "../../interfaces/Product";

const ProductPage = (props: Props) => {

  return (
    <div>
      {props.loading ? <SkeletonLoader /> : <CardProducts products={props.products} />}
    </div>
  );
};

export default ProductPage;
