import * as icons from "../../../icons/products/productIcons.jsx";

const ProductIcon = ({ name, isOdd }) => {
  const odd = isOdd ? "-odd" : "";
  const IconComponent = icons[name];
  return IconComponent ? <IconComponent odd={odd} /> : null;
};

export default ProductIcon;


