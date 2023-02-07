function saveToFileO04() {
  const oscar04form = document.getElementById("oscar03form");
  if (oscar04form.checkValidity()) {
  // Get the selected classification value for the report.
  var classificationSelect = document.querySelector(".classification select");
  var classification = classificationSelect.options[classificationSelect.selectedIndex].value;

  // Get the static values from the input fields in the report.
  var from = document.getElementById("from").value;
  var to = document.getElementById("to").value;
  var writerOperator = document.getElementById("writeroperator").value;
  var ownPosition = document.getElementById("ownposition").value;
  var dtgOfObservation = document.getElementById("dtg0").value;
  var where = document.getElementById("where0").value;
  var typeOfContact = document.getElementById("typeofcontact0").value;
  var enemyLoss = document.getElementById("enemyloss0").value;
  var ownLoss = document.getElementById("ownloss0").value;
  var enemySize = document.getElementById("enemysize0").value;
  var enemyPosition = document.getElementById("enemypos0").value;
  var enemyVehicles = document.getElementById("enemyvehicles0").value;
  var ownPlanOfAction = document.getElementById("ownplanofaction0").value;
  var needForSupport = document.getElementById("needforsupport0").value;

  // Create the content for the report.
  var fileContent = "Classification: " + classification + "\n\n"
      + "From: " + from + "\n"
      + "To: " + to + "\n"
      + "Writer/Operator: " + writerOperator + "\n"
      + "Own position: " + ownPosition + "\n"
      + "DTG: " + dtgOfObservation + "\n\n"
      + "Where: " + where + "\n"
      + "Type of contact: " + typeOfContact + "\n"
      + "Enemy loss/Casualties: " + enemyLoss + "\n"
      + "Own loss/Casualties: " + ownLoss + "\n\n"
      + "Enemy size: " + enemySize + "\n"
      + "Assumed enemy position now: " + enemyPosition + "\n"
      + "Enemy vehicles, weapons and equipment: " + enemyVehicles + "\n\n"
      + "Own plan of action: " + ownPlanOfAction + "\n"
      + "Need for support: " + needForSupport + "\n"

  // Get the date and time from the local computer.
  var newDate = new Date();
  var year = newDate.getFullYear();
  var month = newDate.getMonth();
  var day = newDate.getDate();
  var hour = newDate.getHours();
  var minute = newDate.getMinutes();

  // Check if values are less than 10, and format them correctly if true.
  if (month < 10) {
    month = "0" +(newDate.getMonth() + 1);
  }
  else {
    month = (newDate.getMonth() + 1);
  }
  if (day < 10) {
    date = "0" + newDate.getDate();
  }
  else {
    date = newDate.getDate();
  }
  if (hour < 10) {
    hour = "0" + newDate.getHours();
  }
  else {
    hour = newDate.getHours();
  }
  if (minute < 10) {
    minute = "0" + newDate.getMinutes();
  }
  else {
    minute = newDate.getMinutes()
  }

  // Create the date variable that is used in the start of the filename.
  var dateOfReport = year + "-" + month + "-" + day;

  var filename = dateOfReport
      + " " 
      + classification 
      + " MIBN LRRP " 
      + from 
      + " O-04 "
      + dtgOfObservation + "Z";

  // Create a Blob object with the file content
  var file = new Blob([fileContent], { type: "text/plain" });

  // Create a download link for the file, and set the filename to the filename variable
  var downloadLink = document.createElement("a");
  downloadLink.href = URL.createObjectURL(file);
  downloadLink.download = filename;
  downloadLink.style.display = "none";

  // Add the download link to the body and click it to start the download
  document.body.appendChild(downloadLink);
  downloadLink.click();
  
  // Remove the link element from the body
  document.body.removeChild(downloadLink);
}else {
  alert("Please fill out all required fields before saving.");
  var requiredFields = document.querySelectorAll("[required]");
  for (var i = 0; i < requiredFields.length; i++) {
      if (!requiredFields[i].checkValidity()) {
          requiredFields[i].style.backgroundColor = "antiquewhite";
      }
  }
}
}