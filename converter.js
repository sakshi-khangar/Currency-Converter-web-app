const amountInput = document.getElementById("amount");
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const convertedInput = document.getElementById("converted");
const convertBtn = document.getElementById("convert"); // correct id

async function convert() {
    const amount = Number(amountInput.value);

    if (!amount || amount <= 0) {
        convertedInput.value = "";
        return;
    }

    const response = await fetch(
        `https://api.exchangerate-api.com/v4/latest/${fromCurrency.value}`
    );

    const data = await response.json();
    const rate = data.rates[toCurrency.value];

    convertedInput.value = (amount * rate).toFixed(2);
}

// events
amountInput.addEventListener("input", convert);
fromCurrency.addEventListener("change", convert);
toCurrency.addEventListener("change", convert);
convertBtn.addEventListener("click", convert);

// initial load
convert();
