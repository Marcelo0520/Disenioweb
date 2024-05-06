function validarUsuario() {
    let user = document.querySelector("#user");
    if(user.value.length >= 6){
        user.classList.add("correct");
        user.classList.remove("incorrect");
        document.querySelector("#error-user").innerHTML = "&nbsp;";
    }else{
        user.classList.add("incorrect");
        user.classList.remove("correct");
        document.querySelector("#error-user").innerHTML = "Error, ingrese minimo 6 caracteres!.";
    }
}
