// getting all id's by getElementById and place them in a variable.
const memCostField = document.getElementById('memory-cost-text');
const storeCostField = document.getElementById('storage-cost-text');
const deliveryCostField = document.getElementById('delivery-charge-text');
const basicPrice = document.getElementById('best-price');
const totalPriceText = document.getElementById('total-price-text');
const totalPomoText = document.getElementById('total-with-pomo');
const pomoInput = document.getElementById('pomo-input');
const pomoBtn = document.getElementById('pomo-btn');

// update the total price by using this function.
function updateTotal() {
    const basicCost = parseInt(basicPrice.innerText);
    const memoryCost = parseInt(memCostField.innerText);
    const storageCost = parseInt(storeCostField.innerText);
    const deliveryCost = parseInt(deliveryCostField.innerText);
    const totalPrice = basicCost + memoryCost + storageCost + deliveryCost;
    totalPriceText.innerText = totalPrice;
    totalPomoText.innerText = totalPrice;
}

// apply the promocode for 20% discount .
function pomoCode() {
    const discount = 20;
    totalWithoutPomoPrice = parseInt(totalPomoText.innerText);
    if (pomoInput.value == 'stevekaku') {
        totalWithPomoPrice = totalWithoutPomoPrice - ((totalWithoutPomoPrice * discount) / 100);
        totalPomoText.innerText = totalWithPomoPrice;
    }
    pomoInput.value = '';
}

// These are the addEventListener for the buttons in webpage.
document.getElementById('low-memory-btn').addEventListener('click', function () {
    memCostField.innerText = '0';
    updateTotal();
})
document.getElementById('high-memory-btn').addEventListener('click', function () {
    memCostField.innerText = '180';
    updateTotal();
})
document.getElementById('low-ssd-btn').addEventListener('click', function () {

    storeCostField.innerText = '0';
    updateTotal();
})
document.getElementById('medium-ssd-btn').addEventListener('click', function () {
    storeCostField.innerText = '100';
    updateTotal();
})
document.getElementById('high-ssd-btn').addEventListener('click', function () {
    storeCostField.innerText = '180';
    updateTotal();
})
document.getElementById('free-delivery-btn').addEventListener('click', function () {

    deliveryCostField.innerText = '0';
    updateTotal();
})
document.getElementById('delivery-btn').addEventListener('click', function () {
    deliveryCostField.innerText = '20';
    updateTotal();
})
pomoBtn.addEventListener('click', function () {
    pomoCode();
})