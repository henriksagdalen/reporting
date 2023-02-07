function saveToFileO09() {
  const oscar09form = document.getElementById("oscar09form");
  if (oscar09form.checkValidity()) {
  // Get the selected classification value for the report.
  var classificationSelect = document.querySelector(".classification select");
  var classification = classificationSelect.options[classificationSelect.selectedIndex].value;

  // Get the static values from the input fields in the report.
  var from = document.getElementById("from").value;
  var to = document.getElementById("to").value;
  var writerOperator = document.getElementById("writeroperator").value;
  var ownPosition = document.getElementById("ownposition").value;
  var dtgOfObservation = document.getElementById("dtg0").value;
  var opEffectiveDtg = document.getElementById("opeffectivedtg0").value;
  var exfilMethod = document.getElementById("exfilmethod0").value;
  var exfilRoute = document.getElementById("exfilroute0").value;
  var extractionMethod = document.getElementById("extractionmethod0").value;
  var primaryExfilPup= document.getElementById("primaryexfilpup0").value;
  var secondaryExfilPup = document.getElementById("secondaryexfilpup0").value;
  var primaryTimeframe = document.getElementById("primarytimeframe0").value;
  var secondaryTimeframe = document.getElementById("secondarytimeframe0").value;
  var meansOfComs = document.getElementById("meansofcoms0").value;
  var idLong = document.getElementById("idlong0").value;
  var idShort = document.getElementById("idshort0").value;
  var authenticationWord = document.getElementById("authenticationword0").value;
  var actionIfLupFailed = document.getElementById("actioniflupfailed0").value;
  var additionalInfo = document.getElementById("additionalinfo0").value;


  // Create the content for the report.
  var fileContent = "Classification: " + classification + "\n\n"
      + "From: " + from + "\n"
      + "To: " + to + "\n"
      + "Writer/Operator: " + writerOperator + "\n"
      + "Own position: " + ownPosition + "\n"
      + "DTG: " + opEffectiveDtg + "\n\n"
      + "Exfil method: " + exfilMethod + "\n"
      + "Exfil route: " + exfilRoute + "\n\n"
      + "Extraction" + "\n" 
      + "Method: " + extractionMethod + "\n"
      + "Primary pick-up point: " + primaryExfilPup + "\n"
      + "Secondary pick-up point: " + secondaryExfilPup + "\n"
      + "Primary timeframe: " + primaryTimeframe + "\n"
      + "Secondary timeframe: " + secondaryTimeframe + "\n\n"
      + "Link-up procedure" + "\n"
      + "Means of communication/freq/callsign: " + meansOfComs + "\n"
      + "ID Long: " + idLong + "\n"
      + "ID Short: " + idShort + "\n"
      + "Autentication word: " + authenticationWord + "\n"
      + "Action if link-up failed: " + actionIfLupFailed + "\n"
      + "Additional information: " + additionalInfo + "\n"

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
      + " O-09 "
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