import LightBackpack from "../../../icons/LightBackpack"; // Import other SVG components similarly
import Banana from "../../../icons/Banana";


const icons = {
  "light-backpack": LightBackpack,
  "banana": Banana,
  // Add other SVG components here
};

const ProductIcon = ({ slug }) => {
  const IconComponent = icons[slug];
  return IconComponent ? <IconComponent className="product-image" /> : null;
};

export default ProductIcon;