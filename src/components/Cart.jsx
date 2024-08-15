import { useMemo } from "react";

export default function Cart({ products }) {
  const totalPrice = useMemo(() => {
    return products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  }, [products]);

  return (
    <div>
      {/* Some other content in the cart */}
      {/* Products to display */}
      <p>
        Total Price: <strong>${totalPrice}</strong>
      </p>
      {/* Some button to checkout */}
    </div>
  );
}
