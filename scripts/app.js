// örn fiyat 50TL : 50 / 80 * 100 = 62.5TL ödeme

const price = document.getElementById('price');

price.addEventListener('change', handleChange);

function handleChange() {
    
    let price = document.getElementById('price');
    let priceoutput = document.getElementById('priceoutput');

    console.log(price.max <= price.value);
    
    if(price.value < price.min || price.value >= price.max) { price.value = 0; }

    let result = price.value / 80 * 100;
    priceoutput.innerText = Math.ceil(result);
}