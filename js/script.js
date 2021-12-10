sendButton = document.querySelector(".send-button")
emailField = document.querySelector(".input-email")


sendButton.onclick = (enteredEmail) => {

  var mail_format = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (String(emailField.value).toLowerCase().match(mail_format)) {
    sendEmail()
    alert("E-mail cadastrado! Fique de olho na sua caixa de entrada.")
  }
  else {
    alert("E-mail inválido!")
  }


}


async function sendEmail() {
  let email = emailField.value
  let data = {
    email
  }
  try {
    const response = await fetch('http://localhost:5000/emails', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    console.log(await response)
  } catch (err) {
    console.log({message: err})
  }

  emailField.value = ""

}