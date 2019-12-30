//let { anime } = require('animejs')
import anime from 'animejs'

//module.exports = "Hello world!";
 window.addEventListener("scroll", function(){
  setTimeout( function () {
    // если докрутили до 350 
     if(window.pageYOffset > 350){
        anime({
            targets: '.green',
            translateX: '70rem',
            scale: [1, 1],
            /* delay: function(el, index) {
              return index * 800;
            } */
          });
     }
     setTimeout( function () {
       if(window.pageYOffset > 350){
          anime({
              targets: '.blue',
              translateX: '70rem',
              scale: [1, 1],
              /* delay: function(el, index) {
                return index * 800;
              } */
            });
       }

     setTimeout( function () {
     if(window.pageYOffset > 350){
        anime({
            targets: '.red',
            translateX: '70rem',
            scale: [1, 1],
            /* delay: function(el, index) {
              return index * 800;
            } */
          });
      }
     }, 3000);
    }, 3000);
  }, 3000);
})

//import ('./code');

//let animejs = require('animejs');

/* anime({
    targets: 'div',
    translateX: '13.5rem',
    scale: [.75, .9],
    delay: function(el, index) {
      return index * 80;
    },
    direction: 'alternate',
    loop: true
  }); 
 */

  /* window.addEventListener("scroll", function(){
    let squares = document.querySelectorAll(".square");
        // если докрутили до 300 вылетает alert докрутил
         if(window.pageYOffset > 1100){
            for (let i = 0; i < squares.length; i++) {
                squares[i].style.backgroundColor = "yellow";
                
            }
         }
    }) */
