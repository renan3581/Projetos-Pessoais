var btn = document.querySelector('button.button-compare')

var inputValor1 = document.querySelector('input#input1')
var inputValor2 = document.querySelector('input#input2')
var inputValor3 = document.querySelector('input#input3')

var caract_C1 = []
var caract_C1 = document.querySelectorAll('p#c1-p1,p#c1-p2,p#c1-p3,p#c1-p4,p#c1-p5,p#c1-p6,p#c1-p7,p#c1-p8')

var caract_C2 = []
var caract_C2 = document.querySelectorAll('p#c2-p1,p#c2-p2,p#c2-p3,p#c2-p4,p#c2-p5,p#c2-p6,p#c2-p7,p#c2-p8')

var caract_C3 = []
var caract_C3 = document.querySelectorAll('p#c3-p1,p#c3-p2,p#c3-p3,p#c3-p4,p#c3-p5,p#c3-p6,p#c3-p7,p#c3-p8')



//btn.addEventListener('click',abreCaracteristicas)
btn.addEventListener('click',exibir)


function exibir() {
   
    function carac1(){
        if ( inputValor1.value == 'a'){
            
            document.getElementById("description").style.visibility = "hidden";
            document.getElementById("C1").style.display = "block";
            caract_C1[0].innerHTML = 'Nome: teste'
            caract_C1[1].innerHTML = 'Desenvolvedora: teste1'
            caract_C1[2].innerHTML = 'Distribuidora: teste2'
            caract_C1[3].innerHTML = 'Tempo de Jogo: teste3'
            caract_C1[4].innerHTML = 'Quantidade de Trofeus: teste4'
            caract_C1[5].innerHTML = 'Género: teste5'
            caract_C1[6].innerHTML = 'Cross-play: teste6'
            caract_C1[7].innerHTML = 'Exclusivo: teste7'
            
        }
    }

    function carac2(){
        if ( inputValor2.value == 's'){
            
            document.getElementById("description").style.visibility = "hidden";
            document.getElementById("C2").style.display = "block";
            caract_C2[0].innerHTML = 'Nome: teste'
            caract_C2[1].innerHTML = 'Desenvolvedora: teste1'
            caract_C2[2].innerHTML = 'Distribuidora: teste2'
            caract_C2[3].innerHTML = 'Tempo de Jogo: teste3'
            caract_C2[4].innerHTML = 'Quantidade de Trofeus: teste4'
            caract_C2[5].innerHTML = 'Género: teste5'
            caract_C2[6].innerHTML = 'Cross-play: teste6'
            caract_C2[7].innerHTML = 'Exclusivo: teste7'
        }
    }

    function carac3(){
        if( inputValor3.value == 'd'){
        
            document.getElementById("description").style.visibility = "hidden";
            document.getElementById("C3").style.display = "block";
            caract_C3[0].innerHTML = 'Nome: teste'
            caract_C3[1].innerHTML = 'Desenvolvedora: teste1'
            caract_C3[2].innerHTML = 'Distribuidora: teste2'
            caract_C3[3].innerHTML = 'Tempo de Jogo: teste3'
            caract_C3[4].innerHTML = 'Quantidade de Trofeus: teste4'
            caract_C3[5].innerHTML = 'Género: teste5'
            caract_C3[6].innerHTML = 'Cross-play: teste6'
            caract_C3[7].innerHTML = 'Exclusivo: teste7'
        }
        
    
    }if(inputValor1.value != 'a'||inputValor2.value != 's'||inputValor3.value != 'd'){

        document.getElementById("description").style.visibility = "visible";
        document.getElementById("C1").style.display = "none";
        caract_C1[0].innerHTML = 'Nome: '
        caract_C1[1].innerHTML = 'Desenvolvedora: '
        caract_C1[2].innerHTML = 'Distribuidora: '
        caract_C1[3].innerHTML = 'Tempo de Jogo: '
        caract_C1[4].innerHTML = 'Quantidade de Trofeus: '
        caract_C1[5].innerHTML = 'Género: '
        caract_C1[6].innerHTML = 'Cross-play: '
        caract_C1[7].innerHTML = 'Exclusivo: '
        
        
        document.getElementById("C2").style.display = "none";
        caract_C2[0].innerHTML = 'Nome: '
        caract_C2[1].innerHTML = 'Desenvolvedora: '
        caract_C2[2].innerHTML = 'Distribuidora: '
        caract_C2[3].innerHTML = 'Tempo de Jogo: '
        caract_C2[4].innerHTML = 'Quantidade de Trofeus: '
        caract_C2[5].innerHTML = 'Género: '
        caract_C2[6].innerHTML = 'Cross-play: '
        caract_C2[7].innerHTML = 'Exclusivo: '

        
        document.getElementById("C3").style.display = "none";
        caract_C3[0].innerHTML = 'Nome: '
        caract_C3[1].innerHTML = 'Desenvolvedora: '
        caract_C3[2].innerHTML = 'Distribuidora: '
        caract_C3[3].innerHTML = 'Tempo de Jogo: '
        caract_C3[4].innerHTML = 'Quantidade de Trofeus: '
        caract_C3[5].innerHTML = 'Género: '
        caract_C3[6].innerHTML = 'Cross-play: '
        caract_C3[7].innerHTML = 'Exclusivo: '
    }

    carac1();
    carac2();
    carac3();
}



  







