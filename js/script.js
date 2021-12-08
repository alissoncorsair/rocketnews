sendButton = document.querySelector(".send-button")
emailField = document.querySelector(".input-email")


sendButton.onclick = (enteredEmail) => {

    var mail_format =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    enteredEmail = emailField.value

    // if (enteredEmail.value.match(mail_format)) {
    if(String(enteredEmail).toLowerCase().match(mail_format)) {
        alert("E-mail cadastrado! Fique de olho na sua caixa de entrada.")
    }
    else {
      alert("E-mail inválido!")
    }
}
