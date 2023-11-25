document.addEventListener('DOMContentLoaded', function () {
    const products = document.querySelectorAll('.product');
    const checkoutButton = document.getElementById('checkoutButton');

    function updateTotal() {
        let totalPrice = 0;
        products.forEach(product => {
            const pricePerItem = parseFloat(product.getAttribute('data-price'));
            const quantity = parseInt(product.querySelector('.quantityInput').value);
            const productTotal = pricePerItem * quantity;
            totalPrice += productTotal;
            product.querySelector('.priceDisplay').textContent = '$' + productTotal.toFixed(2);
        });
        checkoutButton.textContent = 'CHECKOUT (TOTAL: $' + totalPrice.toFixed(2) + ')';
    }

    products.forEach(product => {
        const quantityInput = product.querySelector('.quantityInput');
        quantityInput.addEventListener('input', updateTotal);
    });

    updateTotal(); // Gọi updateTotal ban đầu để thiết lập giá trị ban đầu của nút CHECKOUT
});