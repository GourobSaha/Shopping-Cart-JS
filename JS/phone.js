document.getElementById('btn-phone-plus').addEventListener('click', function () {
    let newPhoneNumber = updateInputField(true, 'input-phone-field');
    priceTotal(newPhoneNumber, 'phone-price-total');
    subTotal();
})

document.getElementById('btn-phone-minus').addEventListener('click', function () {
    let newPhoneNumber = updateInputField(false, 'input-phone-field');
    priceTotal(newPhoneNumber, 'phone-price-total');
    subTotal();
})