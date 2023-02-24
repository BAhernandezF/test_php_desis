jQuery(document).ready(function(){
    jQuery('#comunas').html('<option value="0">Seleccionar</option>');
    console.log("jquery funcionando");
    var idComuna = jQuery('#comunas').find(":selected").val();

    //funciones de llamado y relleno de comboboxes
    cargarRegiones();
    cargarCandidatos();
    cargarComunas(idComuna);

    //funcion dependiente del cambio de estado del selector #Regiones, ya que ayuda a poblar en base al ID, el selector de #Comunas.
    jQuery('#regiones').on('change', function() {
        var aux = jQuery('#regiones').val();
        var slcBaseComuna = '<option value="0">Seleccionar</option>';
        jQuery.ajax({
            type: "POST",
            url: "../proyecto/procesosPHP.php",
            data:{
                proceso: 'procesoLlamarComuna',
                idregion: aux
            },
            success: function(response)
            {
                jQuery('#comunas').html(slcBaseComuna + response);
            }
        });
    });


    //evento de click para el submit del form.
    jQuery('#submiButton').on('click', function(e){
        e.preventDefault();

        guardaEncuesta();
    });



})
//funcion que valida el emaile en base a un REGEX.
function validaEmail(email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test( email );
}

//funcion que valida si el string ingresado contiene numeros internos, utilizado para la validacion del alias.
function contieneNumeros(str) {

    return /[0-9]/.test(str);;
}


//funcion principal que genera todo el proceso de validacion y proceso ajax de insert a la base de datos, si alguno de las validaciones no estan correctas no se genera envio a BD y se genera un alert por cada error validado. 
function guardaEncuesta(){
    var nommbreApellido = jQuery("#nombreApellido").val();
    var checked = $("#formInsert input[type=checkbox]:checked").length;
    var isChecked = checked > 1;
    var alias = jQuery("#alias").val();

    //inicio validaciones
    if(nommbreApellido == ""){
        alert("nombre y apellido no debe ir blanco");
        return false;
    }
    if (alias.length < 5) {
        alert("el alias tiene menos de 5 caracteres");
        return false;
    }
    if (contieneNumeros(alias) == false) {
        alert("el alias debe contener numeros");
        return false;
    }
    if(jQuery("#RUT").val() == ""){
        alert("el rut no debe estar vacio");
        return false;
    }
    if (Fn.validaRut( jQuery("#RUT").val())== false ){
        alert("el rut ingresado es invalido");
        return false;
    }else{
        var rutValidado = jQuery("#RUT").val();
    }
    if (jQuery("input[type='email']").val() == false ){
        alert("el email ingresado es invalido");
        return false;
    }
    if(isChecked){
        if (jQuery('#tv').is(':checked')) {
            jQuery('#tv').val('1');
            var esTv = jQuery('#tv').val();
        }else{
            jQuery('#tv').val('0');
            var esTv = jQuery('#tv').val();
        }
        if (jQuery('#web').is(':checked')) {
            jQuery('#web').val('1');
            var esWeb = jQuery('#web').val();
        }else{
            jQuery('#web').val('');
            var esWeb = jQuery('#web').val();
        }
        if (jQuery('#redsocial').is(':checked')) {
            jQuery('#redsocial').val('1');
            var esRedsocial = jQuery('#redsocial').val();
        }else{
            jQuery('#redsocial').val('0');
            var esRedsocial = jQuery('#redsocial').val();
        }
        if (jQuery('#amigo').is(':checked')) {
            jQuery('#amigo').val('1');
            var esAmigo = jQuery('#amigo').val();
        }else{
            jQuery('#amigo').val('0');
            var esAmigo = jQuery('#amigo').val();
        }
    }else{
        alert("debe seleccionar al menos 2 opciones finales");
        return false;
    }
        //validacion para nombre y apellido que separa por espacios y se insertan los primeros 2, caso contrario no se inserta, siendo obligatorio solo el nombre dentro de la bd.
    var separados = nommbreApellido.split(" ");
    if(separados[0] == undefined){
        separados[0] = " ";
    }
    if(separados[1] == undefined){
        separados[1] = " ";
    }
    //fin validaciones.
    //inicio de llamada ajax
    console.log(separados[0], separados[1]);
    jQuery.ajax({
        type: "POST",
        url: "../proyecto/procesosPHP.php",
        data: {
            proceso: 'procesoInsertEncuesta',
            nombre: separados[0],
            apellido: separados[1],
            alias: alias,
            rut: rutValidado,
            email: jQuery("#email").val(),
            region: jQuery("#regiones option:selected").text(),
            comuna: jQuery("#comunas option:selected").text(),
            candidato: jQuery("#candidatos option:selected").text(),
            web: parseInt(esWeb),
            tv: parseInt(esTv),
            redsocial: parseInt(esRedsocial),
            amigo: parseInt(esAmigo),

        },
        success: function(response){
            alert(response);
            limpiaInputs();
        }
    });
    //fin de llamada ajax

    return false;
}

//funcion basica que limpia los inputs ingresados una vez se proceso la informacion actual.
function limpiaInputs(){
    jQuery("#nombreApellido").val("");
    jQuery("#alias").val("");
    jQuery("#RUT").val("");
    jQuery("#email").val("");
    jQuery('#regiones').val(0);
    jQuery('#comunas').val(0);
    jQuery('#candidatos').val(0);
    jQuery( "#web" ).prop( "checked", false );
    jQuery( "#tv" ).prop( "checked", false );
    $jQuery( "#redsocial" ).prop( "checked", false );
    jQuery( "#amigo" ).prop( "checked", false );

}
//funcion que carga los selectores de regiones
function cargarRegiones(){
    var slcBaseRegion = '<option value="0">Seleccionar</option>';
    jQuery('#regiones').html(slcBaseRegion);
    jQuery.ajax({
        type: "POST",
        url: "../proyecto/procesosPHP.php",
        data:{
            proceso: 'procesoLlamarRegion',
        },
        success: function(response)
        {
            jQuery('#regiones').html(slcBaseRegion + response);
        }
    });
}
//funcion que carga los selectores de candidatos
function cargarCandidatos(){
    var slcBaseCandidato = '<option value="0">Seleccionar</option>';
    jQuery('#candidatos').html(slcBaseCandidato);
    jQuery.ajax({
        type: "POST",
        url: "../proyecto/procesosPHP.php",
        data:{
            proceso: 'procesoLlamarCandidato',
        },
        success: function(response)
        {
            jQuery('#candidatos').html(slcBaseCandidato + response);
        }
    });
}
//funcion que carga los selectores de comunas
function cargarComunas(id){

    if(id != 0){
        console.log('no hay ID');
    }else{
        console.log('hay un 0');
    }

}

//funcion que valida el rut ingresado completo 1-9
var Fn = {
	// Valida el rut con su cadena completa "XXXXXXXX-X"
	validaRut : function (rutCompleto) {
		rutCompleto = rutCompleto.replace("‐","-");
		if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rutCompleto ))
			return false;
		var tmp 	= rutCompleto.split('-');
		var digv	= tmp[1]; 
		var rut 	= tmp[0];
		if ( digv == 'K' ) digv = 'k' ;
		
		return (Fn.dv(rut) == digv );
	},
	dv : function(T){
		var M=0,S=1;
		for(;T;T=Math.floor(T/10))
			S=(S+T%10*(9-M++%6))%11;
		return S?S-1:'k';
	}
}