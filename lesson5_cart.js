var shirt01 = {
   price: 24,
   quant: 5,
};
var shirt02 = {
   price: 30,
   quant: 12,
};

var shirt03 = {
   price: 40,
   quant: 15,
};

var basket = [
   shirt01,
   shirt02,
   shirt03,
];

function sumBasket() {
   sum = 0;
   quantSum = 0;
   for (var i = 0; i < basket.length; i++) {
      sum += (basket[i].price * basket[i].quant);
      quantSum += basket[i].quant;
   }
   return sum, quantSum;
}
var basketNull = 'Корзина пуста';
var sum;
var quantSum;
sumBasket();

var $basket = document.getElementById('cart');
$basket.style.width = '300px';
$basket.style.height = '200px';
$basket.style.border = '2px solid #ccc';
$basket.style.margin = '300px auto';
document.body.appendChild($basket);
var $title = document.createElement('p');
if (sum == 0) $title.textContent = basketNull
else {
   $title.textContent = ' В корзине   ' + quantSum + '  товара  на  ' + sum + '  рублей.'
}
$title.style.textAlign = 'center';
$title.style.fontStretch = 'expanded';
$title.style.fontSize = '20px';

$basket.appendChild($title);
