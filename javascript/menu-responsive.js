var cerrar= document.getElementById('cerrarMenu');
var casilla=document.getElementById('abrirMenu');
var bloqueo=document.getElementById('bloqueo');
function cerrarMenu(){
    if(casilla.checked==true){
        casilla.checked=false;
    }

}
function cerrarMenubloqueo(){
    casilla.checked=false;
}
cerrar.addEventListener('click',cerrarMenu);
bloqueo.addEventListener('click',cerrarMenubloqueo);