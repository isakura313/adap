//module.exports = "Hello world!";
 window.addEventListener("scroll", function(){

    // если докрутили до 250 
     if(window.pageYOffset > 250){
        anime({
            targets: 'div',
            translateX: '70rem',
            scale: [1, 1],
            delay: function(el, index) {
              return index * 1000;
            },
            
            
          });
     }
})

//import 'anime.js';
//const animejs = require('animejs');



  //exports.module = alert("Hello")