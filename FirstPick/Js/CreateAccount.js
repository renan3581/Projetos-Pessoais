//Autenticação com E-mail e Senha
{
  var btnCC = document.querySelector('button#button-CC')
  var CCemail = document.querySelector('input#CCemail')
  var CCsenha = document.querySelector('input#CCsenha')

  btnCC.addEventListener('click', CriarConta)

  function CriarConta(){
  firebase.auth().createUserWithEmailAndPassword(CCemail.value, CCsenha.value)
    
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
      alert("Conta criada com sucesso!!!")
      window.location.href = "../Html/FirstPick-Login.html"
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
      if (CCemail.value == '' && CCsenha.value != '') {
        alert("Campo 'E-mail' vazio.")
      }
      else if (CCsenha.value == '' && CCemail.value != '' ) {
        alert("Campo 'Senha' vazio.")
      }
      else if (CCemail.value == '' && CCsenha.value == '') {
        alert("Ambos os campos estão vazios.")
      }
    });
  }
}