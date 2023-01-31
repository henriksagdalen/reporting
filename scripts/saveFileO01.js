function saveToFileO01() {
  const oscar01form = document.getElementById("oscar01form");
    if (oscar01form.checkValidity()) {
  // Get the selected classification value for the report.
  var classificationSelect = document.querySelector(".classification select");
  var classification = classificationSelect.options[classificationSelect.selectedIndex].value;

  // Get the static values from the input fields in the report.
  var from = document.getElementById("from").value;
  var to = document.getElementById("to").value;
  var writerOperator = document.getElementById("writeroperator").value;
  var ownPosition = document.getElementById("ownposition").value;
  var dtgOfObservation = document.getElementById("dtg0").value;
  var opBase = document.getElementById("op-base0").value;
  var primaryPUP = document.getElementById("primarypup0").value;
  var secondaryPUP = document.getElementById("secondarypup0").value;
  var suggestedDOP = document.getElementById("suggesteddop0").value;
  var referencePoint = document.getElementById("referencepoint0").value;
  var obsArea = document.getElementById("obsarea0").value;
  var effectiveDTG = document.getElementById("effectivedtg0").value;
  var overallComment = document.getElementById("overallcomment0").value;
  var overallAssessment = document.getElementById("overallassessment0").value;
  var references = document.getElementById("references0").value;

  // Create the content for the report.
  var fileContent = "Classification: " + classification + "\n\n"
      + "From: " + from + "\n"
      + "To: " + to + "\n"
      + "Writer/Operator: " + writerOperator + "\n"
      + "Own position: " + ownPosition + "\n"
      + "DTG: " + dtgOfObservation + "\n\n"
      + "OP description: " + opBase + "\n"
      + "Primary PUP: " + primaryPUP + "\n"
      + "Secondary PUP: " + secondaryPUP + "\n"
      + "Suggested DOP: " + suggestedDOP + "\n"
      + "Referance point: " + referencePoint + "\n"
      + "Observation area: " + obsArea + "\n"
      + "Effective DTG: " + effectiveDTG + "\n\n"
      + "Overall comment: " + overallComment + "\n"
      + "Overall assessment " + overallAssessment + "\n"
      + "References: " + references + "\n\n";

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
      + " O-01 "
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