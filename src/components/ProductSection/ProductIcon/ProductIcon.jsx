import LightBackpack from "../../../icons/products/LightBackpack"; // Import other SVG components similarly
import Banana from "../../../icons/products/Banana";
import Bazooka from "../../../icons/products/Bazooka";


const icons = {
  "light-backpack": LightBackpack,
  "banana": Banana,
  "bazooka": Bazooka,
  // Add other SVG components here
};

const ProductIcon = ({ slug }) => {
  const IconComponent = icons[slug];
  return IconComponent ? <IconComponent className="product-image" /> : null;
};

export default ProductIcon;