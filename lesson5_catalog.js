function catalogView() {
   var $mainBlock = document.getElementById('catalog');


   var $containerCatalog = document.createElement('div');
   $containerCatalog.style.position = 'relative';
   $containerCatalog.style.width = '40%';
   $containerCatalog.style.margin = "1px auto";
   $containerCatalog.style.border = "10px solid #ccc";
   document.body.appendChild($containerCatalog);
   var $photoProduct1 = document.getElementById('myImage1');
   $photoProduct1.style.width = '260px';
   $photoProduct1.style.height = '280px';
   $containerCatalog.appendChild($photoProduct1);
   var $desProduct1 = document.createElement('p');
   $desProduct1.textContent = product1.name + '    ' + product1.price;
   $containerCatalog.appendChild($desProduct1);
   var $photoProduct2 = document.getElementById('myImage2');
   var $desProduct2 = document.createElement('p');
   $containerCatalog.appendChild($desProduct2);
   $desProduct2.textContent = product2.name + '    ' + product2.price;
   $photoProduct2.style.width = '260px';
   $photoProduct2.style.height = '280px';
   $containerCatalog.appendChild($photoProduct2);

}

function Product(name, male, price, brand, photo, size) {
   this.name = name;
   this.male = male;
   this.price = price;
   this.brand = brand;
   this.size = size;
}
var product1 = new Product('куртка', 'man', 26, 'WWW', 'L');
var product2 = new Product('платье', 'female', 26, 'PPP', 'S');

catalogView();
