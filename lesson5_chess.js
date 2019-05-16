function drawChess() {
   var $mainBlock = document.getElementById('main-block');
   var $block;
   var flag = true;
   var $container = document.createElement('div');
   $container.style.position = "relative";
   $container.style.width = "660px";
   $container.style.height = "660px";
   $container.style.margin = "1px auto";
   $container.style.border = "1px solid #ccc";
   document.body.appendChild($container);

   $mainBlock.style.width = "480px";
   $mainBlock.style.height = "480px";
   $mainBlock.style.margin = "1px auto";
   $mainBlock.style.border = "15px solid #ccc";
   $container.appendChild($mainBlock);

   var $abc = document.createElement('p');
   $abc.textContent = 'ABCDEFGH';
   $abc.style.textAlign = "center";
   $abc.style.letterSpacing = "51px";
   $abc.style.paddingLeft = "40px";
   $abc.style.fontSize = "20px";
   var $num = document.createElement('p');

   $num.style.fontSize = '25px';
   $num.style.position = 'absolute';
   $num.style.top = '70px';
   $num.style.left = '40px';
   var $num7 = $num.cloneNode(true);
   var $num6 = $num.cloneNode(true);
   var $num5 = $num.cloneNode(true);
   var $num4 = $num.cloneNode(true);
   var $num3 = $num.cloneNode(true);
   var $num2 = $num.cloneNode(true);
   var $num1 = $num.cloneNode(true);
   $num1.textContent = '1';
   $num2.textContent = '2';
   $num3.textContent = '3';
   $num4.textContent = '4';
   $num5.textContent = '5';
   $num6.textContent = '6';
   $num7.textContent = '7';
   $num.textContent = '8';
   $num7.style.top = '130px';
   $num6.style.top = '190px';
   $num5.style.top = '250px';
   $num4.style.top = '310px';
   $num3.style.top = '370px';
   $num2.style.top = '430px';
   $num1.style.top = '490px';

   $container.insertBefore($num1, $mainBlock);
   $container.insertBefore($num2, $mainBlock);
   $container.insertBefore($num3, $mainBlock);
   $container.insertBefore($num4, $mainBlock);
   $container.insertBefore($num5, $mainBlock);
   $container.insertBefore($num6, $mainBlock);
   $container.insertBefore($num7, $mainBlock);
   $container.insertBefore($num, $mainBlock);
   var $copyAbc = $abc.cloneNode(true);
   $container.appendChild($copyAbc);
   $container.insertBefore($abc, $mainBlock);


   for (var i = 0; i < 8; i++) {
      for (var j = 0; j < 8; j++) {
         if (j == 0) flag = !flag;

         $block = document.createElement('div');
         if (flag) {
            $block.className = 'block black'
         } else $block.className = 'block white';
         $mainBlock.appendChild($block);
         flag = !flag;
      }
   }

}

drawChess();
