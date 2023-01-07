(function(){

    /*variables para poder manipular los elementos de la calculadora:*/
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');
    let color = document.querySelector('.btn-color');
    let calc = document.querySelector('.calculator');

    //mostrar los valores clickeados en la pantalla:
    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num; 
            //e.target detecta el botón completo
            screen.value += value;      
         })
    })

    //e is an object that contains information of the event that occurs
    equal.addEventListener('click', function(e){
        if(screen.value === ''){
            screen.value === "Please enter";
        }else{
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })

    clear.addEventListener('click', function(e){
        screen.value = "";
    });

    //funcion para que los numeros cambien de forma random y poder cambiar los colores de fondo
    function random(number) {
        return Math.floor(Math.random() * (number+1));
  }
  
    color.addEventListener('click', function(){
    
        const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    
        //dentro de cada color hay una funcion random que me permitirá cambiar los valores de los colores de forma aleatoria
        calc.style.backgroundColor = rndCol;

    });

})();
