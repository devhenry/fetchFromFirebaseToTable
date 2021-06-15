var firebaseConfig = {
  apiKey: "AIzaSyBv-XluD3Ba5tWl10yfjMJqXCZfyXivW6g",
  authDomain: "mycrud-5369e.firebaseapp.com",
  databaseURL: "https://mycrud-5369e-default-rtdb.firebaseio.com",
  projectId: "mycrud-5369e",
  storageBucket: "mycrud-5369e.appspot.com",
  messagingSenderId: "727341125909",
  appId: "1:727341125909:web:06bd30ee2423fb72a2191c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Get all data

function SelectAllData(){

      firebase.database().ref('student').on('value',
      function(AllRecords){
        AllRecords.forEach(
          function(CurrentRecord){
                var name = CurrentRecord.val().NameOfStudent;
                var roll = CurrentRecord.val().RollNumber;
                var sec = CurrentRecord.val().Section;
                var gen = CurrentRecord.val().Gender;
                AddItemsToTable(name ,roll ,sec ,gen);
          }
        );
      });

}
window.onload = SelectAllData;

//Filling the table
var stdNo = 0;

function AddItemsToTable(names ,rolls ,secs ,gens){
var tbody = document.getElementById('tbody1');
var trow = document.createElement('tr');
var td1 = document.createElement('td');
var td2 = document.createElement('td');
var td3 = document.createElement('td');
var td4 = document.createElement('td');
var td5 = document.createElement('td');

td1.innerHTML = ++stdNo;
td2.innerHTML = names;
td3.innerHTML = rolls;
td4.innerHTML = secs;
td5.innerHTML = gens;

trow.appendChild(td1);
trow.appendChild(td2);
trow.appendChild(td3);
trow.appendChild(td4);
trow.appendChild(td5);
tbody.appendChild(trow);

}