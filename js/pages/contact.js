function sendMail() {
  let parms = {
    prenom: document.getElementById("prenom").value,
    nom: document.getElementById("nom").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  }

  emailjs.send("service_s0svdtb", "template_tg5wztu", parms).then(alert("Email envoyé!!"))
}