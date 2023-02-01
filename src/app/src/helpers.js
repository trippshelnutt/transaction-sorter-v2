export function formatPrice(amount) {
  return amount.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
}

export function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US');
}
