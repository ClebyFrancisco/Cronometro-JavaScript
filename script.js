var display = document.getElementById('display')

//var horas = document.getElementById('horas')
var minutos = document.getElementById('minutos')
var segundos = document.getElementById('segundos')

var comecar = document.getElementById('comecar')

var cronometroSeg;
//var horaAtual;
var minutoAtual;
var segundoAtual;

var interval;


/*for (var i = 0; i < 24; i++) {
    horas.innerHTML += '<option value="' + i + '"> ' + i + '</option>  ';
}*/
for (var i = 0; i <= 60; i++) {
    minutos.innerHTML += '<option value="' + i + '"> ' + i + '</option>  ';
}
for (var i = 1; i < 60; i++) {
    segundos.innerHTML += '<option value="' + i + '"> ' + i + '</option> ';
}

comecar.addEventListener('click', function() {
    //horaAtual = horas.value;
    minutoAtual = minutos.value;
    segundoAtual = segundos.value;

    display.childNodes[1].innerHTML = minutoAtual + ":" + segundoAtual;


    interval = setInterval(function () {
        segundoAtual--;
        if (segundoAtual <= 0) {
            if (minutoAtual > 0) {
                minutoAtual--;
                segundoAtual = 59;
            } else {
                document.getElementById("sound").play();
                clearInterval(interval);
                // alert("Acabou!");

            }
        }
        display.childNodes[1].innerHTML =  minutoAtual + ":" + segundoAtual;

    }, 1);

});



/*

comecar.addEventListener('click', function () {
    horaAtual = horas.value;
    minutoAtual = minutos.value;
    segundoAtual = segundos.value;

    display.childNodes[1].innerHTML = horaAtual + ":" + minutoAtual + ":" + segundoAtual;
    interval = setInterval(function () {
        segundoAtual--;
        if (segundoAtual <= 0) {
            if (minutoAtual > 0) {
                minutoAtual--;
                segundoAtual = 59;
                if (minutoAtual <= 0) {
                    if (horaAtual > 0) {
                        horaAtual--;
                        minutoAtual = 59;
                        segundoAtual = 59;
                    } else {
                        document.getElementById("sound").play();
                        clearInterval(interval);
                    }
                }
            }
        }

        display.childNodes[1].innerHTML = horaAtual + ":" + minutoAtual + ":" + segundoAtual;

    }, 1000);

});

*/
