function saveToFileO10() {
    // Get the selected classification value for the report.
    var classificationSelect = document.querySelector(".classification select");
    var classification = classificationSelect.options[classificationSelect.selectedIndex].value;
  
    // Get the static values from the input fields in the report.
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
    var writerOperator = document.getElementById("writeroperator").value;
    var ownPosition = document.getElementById("ownposition").value;
    var dtgOfObservation = document.getElementById("dtg0").value;
    var ownSituation = document.getElementById("ownsituation0").value;
    var enemySituation = document.getElementById("enemysituation0").value;
    var enemyCOA = document.getElementById("enemycoa0").value;
    var tempLowHigh = document.getElementById("templowhigh0").value;
    var windLowHigh = document.getElementById("windlowhigh0").value;
    var precipitationLowHigh = document.getElementById("precipitationlowhigh0").value;
    var cloudCoverage = document.getElementById("cloudcoverage0").value;
    var sunriseSunset = document.getElementById("sunrisesunset0").value;
    var opsMessage = document.getElementById("opsmessage0").value;
    var sdaMessage = document.getElementById("sdamessage0").value;
    var reference = document.getElementById("reference0").value;
    var inOtherNews = document.getElementById('inothernews0').value;


    // Create the content for the report.
    var fileContent = "Classification: " + classification + "\n\n"
        + "From: " + from + "\n"
        + "To: " + to + "\n"
        + "Writer/Operator: " + writerOperator + "\n"
        + "Own position: " + ownPosition + "\n"
        + "DTG: " + dtgOfObservation + "\n\n"
        + "Own situation: " + ownSituation + "\n"
        + "Enemy situation: " + enemySituation + "\n"
        + "Enemy COA next 24h: " + enemyCOA + "\n\n"
        + "Weather next 24h:" + "\n"
        + "Temprature low-high:" + tempLowHigh + "\n"
        + "Wind low-high: " + windLowHigh + "\n"
        + "Precipitation low-high" + precipitationLowHigh + "\n"
        + "Cloud coverage: " + cloudCoverage + "\n"
        + "Sunrise/Sunset: " + sunriseSunset + "\n\n"
        + "Message from OPS: " + opsMessage + "\n"
        + "Message from SDA: " + sdaMessage + "\n"
        + "Reference: " + reference + "\n\n"
        + "In other news: " + inOtherNews + "\n"
  
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
        + " O-10 "
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
  }