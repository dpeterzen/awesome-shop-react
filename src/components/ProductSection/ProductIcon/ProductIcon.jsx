import * as icons from "../../../icons/products/productIcons.jsx";

const ProductIcon = ({ name }) => {
  const IconComponent = icons[name];
  return IconComponent ? <IconComponent /> : null;
};

export default ProductIcon;


