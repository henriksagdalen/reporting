
let count = 0;
// Get values from local storage and set to respective fields
document.addEventListener('DOMContentLoaded', function() {
const journalnumber = localStorage.getItem("journalnumber");
if (journalnumber) {
document.getElementById("journalnumber").value = journalnumber;
}

for (let i = 0; i < localStorage.length; i++) {
  if (localStorage.key(i).startsWith('facts')) {
    count++;
  }
}

for (var i = 0; i < count; i++) {
addJournalNumber();
const dtg = localStorage.getItem('dtg' + i);
const facts = localStorage.getItem('facts' + i);
const comment = localStorage.getItem('comment' + i);
const assessment = localStorage.getItem('assessment' + i);

if (dtg && facts && comment && assessment) {
  document.getElementById(`dtg` + i).value = dtg;
  document.getElementById(`facts` + i).value = facts;
  document.getElementById(`comment` + i).value = comment;
  document.getElementById(`assessment` + i).value = assessment;
} 
}
});

// Save values to local storage
const form = document.querySelector("form");
const saveButton = document.getElementById("saveButton");

function setLocalobservations(){
const journalnumber = document.getElementById("journalnumber").value;
localStorage.setItem("journalnumber", journalnumber);


var journalNumberFields = document.querySelectorAll("#journalnumber");



for(var i=0; i< journalNumberFields.length; i++){
const dtg = document.getElementById('dtg'+ i).value;
const facts = document.getElementById('facts'+ i).value;
const comment = document.getElementById('comment' + i).value;
const assessment = document.getElementById('assessment' + i).value;


if (dtg && facts && comment && assessment) {
  localStorage.setItem(`dtg` + i, dtg);
  localStorage.setItem(`facts` + i, facts);
  localStorage.setItem(`comment` + i, comment);
  localStorage.setItem(`assessment` + i, assessment);
}
}
};




