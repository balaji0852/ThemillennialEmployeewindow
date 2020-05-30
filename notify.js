var did=sessionStorage.espvalue;
var cid=sessionStorage.esuvalue;
var db= firebase.firestore();

  db.collection(cid)
  .doc(did)
  .get()
  .then(function(doc) {
    if (doc.exists)
    { 
     const name= doc.data();
     document.getElementById("Ename").innerHTML=name.Employeename;
     document.getElementById('escore').innerHTML="Your Score:"+name.score;
     document.getElementById('enotification').innerHTML="Notification for you:"+name.notification;
     document.getElementById("fields").innerHTML= "Categories assigned :"+name.categories;
     document.getElementById("update").innerHTML="Your last news upload was at:"+name.lastupload.toDate();

    }else{
   document.getElementById("Ename").innerHTML="Your Name";

    }
}).catch(function(error) {
     console.log("value exists");
    });


 