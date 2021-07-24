'use strict';
function updateExchangeRates(updateRates){
    document.getElementById('date').textContent = updateRates.date;
    document.getElementById('usd-buy-rate').textContent = updateRates.usd.buyRate;
    document.getElementById('usd-sell-rate').textContent = updateRates.usd.sellRate;
    document.getElementById('eur-buy-rate').textContent = updateRates.eur.buyRate;
    document.getElementById('eur-sell-rate').textContent = updateRates.eur.sellRate;
}

const update = {
    date: '21 июля',
    usd: {
        buyRate: '73,00',
        sellRate: '75,00',
    },
    eur: {
        buyRate: '86,00',
        sellRate: '88,00',
    }
};
updateExchangeRates(update);
