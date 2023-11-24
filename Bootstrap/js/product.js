const quantityInput = document.getElementById('quantityInput');
const priceDisplay = document.getElementById('priceDisplay');
quantityInput.addEventListener('input', function() {
    const quantity = parseFloat(quantityInput.value);
    const totalPrice = (quantity * 26.09).toFixed(2);
    priceDisplay.textContent = '$' + totalPrice;
});
