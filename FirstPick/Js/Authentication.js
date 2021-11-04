
//Validar Usuario cadastrado

  var btnLogin = document.querySelector('button#button-login')
  var email = document.querySelector('input#email')
  var senha = document.querySelector('input#senha')

  btnLogin.addEventListener('click',autenticar)
    
  function autenticar(){
    firebase.auth().signInWithEmailAndPassword(email.value, senha.value)
    .then((userCredential) => {
      // Logad
      var user = userCredential.user;
      alert("Logado Com Sucesso")
      //Redirecionamento
      window.location.href = "../Html/FirstPick-Home.html"
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      
      if (email.value == '' && senha.value != '') {
        alert("Campo 'E-mail' vazio.")
      }
      else if (senha.value == '' && email.value != '' ) {
        alert("Campo 'Senha' vazio.")
      }
      else if (email.value == '' && senha.value == '') {
        alert("Ambos os campos estão vazios.")
      }
    });

  }
  function Persistence(){
  irebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(() => {
      // Existing and future Auth states are now persisted in the current
      // session only. Closing the window would clear any existing state even
      // if a user forgets to sign out.
      // ...
      // New sign-in will be persisted with session persistence.
      return firebase.auth().signInWithEmailAndPassword(email.value, senha.value);
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  }






