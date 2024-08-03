// script.js
function addProduct() {
    // Get form elements
    const productSelect = document.getElementById('product');
    const quantityInput = document.getElementById('quantity');
    const productList = document.getElementById('productList');

    // Get selected product details
    const selectedOption = productSelect.options[productSelect.selectedIndex];
    const productName = selectedOption.text;
    const price = parseFloat(selectedOption.getAttribute('data-price'));
    const quantity = parseInt(quantityInput.value, 10);

    // Create a list item for the product
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        ${productName} - Quantity: ${quantity} - Total: $${(price * quantity).toFixed(2)}
        <button class="remove-button" onclick="removeProduct(this)">Remove</button>
    `;

    // Add the list item to the product list
    productList.appendChild(listItem);

    // Clear the input fields
    quantityInput.value = 1;
}

function calculateTotal() {
    // Get all product list items
    const productListItems = document.querySelectorAll('#productList li');

    let totalCost = 0;

    // Calculate total cost
    productListItems.forEach(item => {
        const totalText = item.textContent.split(' - Total: $')[1].split(' Remove')[0];
        if (totalText) {
            totalCost += parseFloat(totalText);
        }
    });

    // Display total cost
    const totalCostDiv = document.getElementById('totalCost');
    totalCostDiv.textContent = `Total Cost: $${totalCost.toFixed(2)}`;
}

function removeProduct(button) {
    // Remove the parent list item of the button clicked
    const listItem = button.parentElement;
    listItem.remove();

    // Recalculate total after removal
    calculateTotal();
}
