window.addEventListener("scroll", function(){
let squares = document.querySelectorAll(".square");
    // если докрутили до 300 вылетает alert докрутил
     if(window.pageYOffset > 1100){
        for (let i = 0; i < squares.length; i++) {
            squares[i].style.backgroundColor = "yellow";
            
        }
     }
})