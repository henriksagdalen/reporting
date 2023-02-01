function saveToFileO02() {
  const oscar02form = document.getElementById("oscar02form");
    if (oscar02form.checkValidity()) {
    // Get the selected classification value for the report.
    var classificationSelect = document.querySelector(".classification select");
    var classification = classificationSelect.options[classificationSelect.selectedIndex].value;
  
    // Get the static values from the input fields in the report.
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
    var writerOperator = document.getElementById("writeroperator").value;
    var ownPosition = document.getElementById("ownposition").value;
    var dtgOfObservation = document.getElementById("dtg0").value;
    var dopdtg = document.getElementById("dopdtg0").value;
    var dopPosition = document.getElementById("dopposition0").value;
    var dopOk = document.getElementById("dopok0").value;
    var problemsAction = document.getElementById("problemsaction0").value;
  
    // Create the content for the report.
    var fileContent = "Classification: " + classification + "\n\n"
        + "From: " + from + "\n"
        + "To: " + to + "\n"
        + "Writer/Operator: " + writerOperator + "\n"
        + "Own position: " + ownPosition + "\n"
        + "DTG: " + dtgOfObservation + "\n\n"
        + "Drop off DTG: " + dopdtg + "\n"
        + "Drop off position: " + dopPosition + "\n"
        + "Actions if drop off failed/Drop off OK: " + dopOk + "\n"
        + "Other problems/Own actions: " + problemsAction + "\n"
  
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
        + " O-02 "
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