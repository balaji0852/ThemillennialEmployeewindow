
const Newsheadline = document.getElementById('headline');
const Newsimage = document.getElementById('image');
const Newscategory = document.getElementById('category');
const Newsdate = document.getElementById('date');
const Newsaid = document.getElementById('authorid');
const Newspo = document.getElementById('processedo');
const newsdata = document.getElementById('textnews');
const upload = document.getElementById('uploadnews');

var did=sessionStorage.espvalue;
var cid=sessionStorage.esuvalue;
var num = 0.000;
var like =0.000;
var plike =0.000;
var currentscore;
var updatedscore;
var finalscore;
var docref;
var lastup;
var secondaryAppConfig = {
    apiKey: "AIzaSyAxu03EljyfdxsYmapiD47DNeqVymelND0",
    authDomain: "themillennialenewspaper-c24d3.firebaseapp.com",
    databaseURL: "https://themillennialenewspaper-c24d3.firebaseio.com",
    storageBucket: "gs://themillennialenewspaper-c24d3.appspot.com"
   };
firebase.initializeApp(secondaryAppConfig, "secondary");


var db= firebase.firestore();
upload.addEventListener('click',e=>{
	e.preventDefault();
	var file=document.getElementById('image').files[0];
    var storageRef = firebase.storage().ref();
    var uploadtask= storageRef.child(file.name);
    uploadtask.put(file).then(function(snapshot) {


    	                uploadtask.getDownloadURL().then(function(url){
                               lastup = new Date();
							        db.collection(cid)
										  .doc(did)
										  .get().then(function(doc){
										  currentscore=doc.data();
										  updatedscore=parseInt(currentscore.score);
									      finalscore= updatedscore+1;
										  });
							    db.collection(date.value).doc(category.value).collection("news").doc().set({
									headline:Newsheadline.value,
									category:Newscategory.value,
									date:Newsdate.value,
									aid:Newsaid.value,
									image:url,
									views:num,
									likes:like,
									plike:plike,
									poname:Newspo.value,
									textualdata:newsdata.value
						    		}).then(function(){
						                      db.collection(cid).doc(did).set({
											  score: finalscore,
											  lastupload:lastup
											  },{ merge: true });
										      location.reload();  
										      alert("News added succcessfully.");
							    	}).catch(function(error){
							    	   console.log("error in adding the data",error);
							           db.collection(cid).doc(did).set({
									              score: finalscore,
									              lastupload:lastup
												  },{ merge: true });
							                      location.reload();  
							                      alert("News added succcessfully.");
						    		});
    	               			 });
    	               
				        }).catch(function(error)
						 {
				         alert("Error, while uploading. Contact Admin.",error)
				         });
  					

  					
	
});