'use strict';
function updateExchangeRates(updateRates){
    document.getElementById('date').textContent = updateRates.date;
    document.getElementById('usd-buy-rate').textContent = updateRates.usd.buyRate;
    document.getElementById('usd-sell-rate').textContent = updateRates.usd.sellRate;
    document.getElementById('eur-buy-rate').textContent = updateRates.eur.buyRate;
    document.getElementById('eur-sell-rate').textContent = updateRates.eur.sellRate;
}
function handleSubmit(evt){
    evt.preventDefault();

    // const phone = phoneInputEl.value.trim();
    // const email = emailInputEl.value.trim();
    //
    // const data = {
    //     phone,
    //     email,
    // };

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:9999/api/hw13');
    // xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = handleSuccess;
    xhr.onerror = handleError;
    // xhr.send((JSON.stringify(data)));
    xhr.send();
}
function handleSuccess(evt){
    if (evt.target.status !== 200) {
        // TODO: handle error
        return;
    }
    const data = JSON.parse(evt.target.responseText);
    updateExchangeRates(data);
    // TODO: work with data
}

function handleError(evt){
    // TODO: handle error
}

// const formEl = document.getElementById('card-form');
// formEl.addEventListener('submit', handleSubmit);
const formEl = document.getElementById('date');
formEl.addEventListener('loadstart', handleSubmit);

// handleSubmit();
// const update = {
//     date: '21 июля',
//     usd: {
//         buyRate: '73,00',
//         sellRate: '75,00',
//     },
//     eur: {
//         buyRate: '86,00',
//         sellRate: '88,00',
//     }
// };
// updateExchangeRates(update);
