//Funciones para validar los campos del formulario.
function validarNombre()
{
    var campoNombre = document.getElementById("first_name").value;

    var campoValido = false;

    if(String(campoNombre) == "" || String(campoNombre) == " ")
    {
        alert("Your name is empty");
    }
    else
    {
        campoValido = true;
    }

    return campoValido;
}

function validarApellido()
{
    var campoApellido = document.getElementById("last_name").value;
    var campoValido = false;

    if(String(campoApellido) == "" || String(campoApellido) == " ")
    {
        alert("Your lastname is empty");
    }
    else
    {
        campoValido = true;
    }

    return campoValido;
}

function validarEmail()
{
    var email = document.getElementById("email").value;
    var campoValido = false;

    if(String(email) == "" || String(email) == " ")
    {
        alert("Your email is empty");
    }
    else
    {
        campoValido = true;
    }

    return campoValido;
}

function ValidarstreetAddress()
{
    var streetAddress = document.getElementById("street_address").value;
    var campoValido = false;

    if(String(streetAddress) == "" || String(streetAddress) == " ")
    {
        alert("Your street address is empty");
    }
    else
    {
        campoValido = true;
    }

    return campoValido;
}

function validarZipCode()
{
    var zip_code = document.getElementById("zip_code").value;
    var campoValido = false;

    if(String(zip_code) == "" || String(zip_code) == " ")
    {
        alert("Your zip code is empty");
    }
    else
    {
        campoValido = true;
    }

    return campoValido;
}

function validarParentSignature()
{
    var parentSignature = document.getElementById("parent_guardian_signature").value;
    var campoValido = false;

    if(String(parentSignature) == "" ||String(parentSignature) == " ")
    {
        alert("Your signature is empty")
    }
    else
    {
        campoValido = true;
    }

    return campoValido;
}