
document.getElementById('btn-case-plus').addEventListener('click', function () {
    let newCaseNumber = updateInputField(true, 'input-case-field');
    priceTotal(newCaseNumber, 'case-price-total');
    subTotal();
})

document.getElementById('btn-case-minus').addEventListener('click', function () {
    let newCaseNumber = updateInputField(false, 'input-case-field');
    priceTotal(newCaseNumber, 'case-price-total');
    subTotal();
})

