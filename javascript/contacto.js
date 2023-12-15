
//---------------funcion de validacion de formulario-------//

var formulario= document.getElementById('formulario');
    nombre=formulario.nombre;
    correo=formulario.email;
    message=formulario.mensaje;

    function validarNombre(e){
        if(nombre.value=='' || nombre==null){
            error.style.display='block';
            error.innerHTML=error.innerHTML+'<li>Por favor completa el nombre</li>'
			e.preventDefault();
        }
    }
    function validarCorreo(e){
        if(correo.value=='' || correo==null){
            error.style.display='block';
            error.innerHTML=error.innerHTML+'<li>Por favor completa el correo</li>'
			e.preventDefault();
        }
    }
    function mensaje(e){
        if(message.value=='' || message==null){
            error.style.display='block';
            error.innerHTML=error.innerHTML+'<li>Por favor escribe algo en mensaje</li>'
			e.preventDefault();
        }
    }
    function validarFormulario(e){
        error.innerHTML='';
        validarNombre(e);
        validarCorreo(e);
        mensaje(e);

    }


    formulario.addEventListener('submit',validarFormulario);