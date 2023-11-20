function toggleContatoDevs() {
    var x = document.getElementById("contato-devs-absolute");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  
  function validarEmail() {
    const emailInput = document.getElementById('mail');
  
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (emailInput.value === null || !regexEmail.test(emailInput.value)) {
      alert("E-mail inválido")    
    } 
  }
