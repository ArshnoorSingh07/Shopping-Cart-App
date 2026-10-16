export const CURRENCY = "INR";

const formatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: CURRENCY,
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

// All catalog prices and cart totals are denominated in rupees.
export const formatPrice = (amount) => formatter.format(amount);
