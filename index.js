
  
  var db = firebase.firestore(); 
  const uid= document.getElementById('userid');
  const pwd= document.getElementById('password');
  const login= document.getElementById('loginbtn');
  const userid=uid.value;
  const password=pwd.value;
  
  
  
  
login.addEventListener('click', e => {
  e.preventDefault();

  db.collection(uid.value).doc(pwd.value)
    .get()
    .then(function(doc) {
    if (doc.exists)
    { 
        window.location.replace("window.html");
        sessionStorage.esuvalue=uid.value;
        sessionStorage.espvalue=pwd.value;
    } else {
      console.log("wrong credentials ");
      document.getElementById("notification").innerHTML="Check your user-id and password.";
    }}).catch(function(error) {
      document.getElementById("notification").innerHTML="Contact Admin.";
    });


});

  
  
  



