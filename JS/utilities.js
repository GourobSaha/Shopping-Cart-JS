function updateInputField(isIncreased, inputId) {
    let numberInput = document.getElementById(inputId);
    let previousNumber = parseInt(numberInput.value);

    let newNumber;

    if (isIncreased) {
        newNumber = previousNumber + 1;
    }
    else {
        newNumber = previousNumber - 1;
    }

    numberInput.value = newNumber;

    return newNumber;
}

function priceTotal(priceNumber, priceId) {
    let priceElement = document.getElementById(priceId);
    let newPrice;
    if (priceId === 'case-price-total') {
        newPrice = priceNumber * 59;
    }
    else if (priceId === 'phone-price-total') {
        newPrice = priceNumber * 1219;
    }
    priceElement.innerText = newPrice;

    return newPrice;
}

function getTextElementById(elementId) {
    let textElement = document.getElementById(elementId);
    let textElementTotal = parseInt(textElement.innerText);
    return textElementTotal;
}

function getTextElementValueById(elementId, value) {
    let element = document.getElementById(elementId);
    element.innerText = value;
}

function subTotal() {
    let phoneTotalPrice = getTextElementById('phone-price-total');
    let casePriceTotal = getTextElementById('case-price-total');

    let newSubTotal = phoneTotalPrice + casePriceTotal;
    getTextElementValueById('sub-total', newSubTotal);

    let taxAmountString = (newSubTotal * 0.1).toFixed(2);
    let taxAmount = parseFloat(taxAmountString);
    getTextElementValueById('tax-total', taxAmount);

    let finalAmount = newSubTotal + taxAmount;
    getTextElementValueById('final-total', finalAmount);
}

