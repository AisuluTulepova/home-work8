let san1 = +prompt('Бірінші санды енгізіңіз:')
let san2 = +prompt('Екінші санды енгізіңіз:')
let san3 = +prompt('Үшінші санды енгізіңіз:')
let EnUlken = 0;

switch(true){
    case (san1 > san2 && san1 > san3) :
    EnUlken = san1;
    break;
    case (san2 > san1 && san2 > san3):
    EnUlken = san2;
    break;
    case (san3 > san1 && san3 > san2):
    EnUlken = san3;
    break;

}
alert(EnUlken);