function saveToFile() {
    // Get the selected classification value for the report.
    var classificationSelect = document.querySelector(".classification select");
    var classification = classificationSelect.options[classificationSelect.selectedIndex].value;

    // Get the static values from the input fields in the report.
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
    var writerOperator = document.getElementById("writeroperator").value;
    var ownPosition = document.getElementById("ownposition").value;
    var bluf = document.getElementById("bluf").value;
    var patternOfLife = document.getElementById("patternoflife").value;
    var staticUnits = document.getElementById("staticunits").value;

    // Get the journal number input fields
    var journalNumberFields = document.querySelectorAll("#journalnumber");

    // Create a empty DTG array
    var arrayOfDTG = [];

    // Create a empty journal numbers array.
    var journalNumbers = [];



    // LEGGE TIL FORKLARENDE KOMMENTAR HER.
    for (var i = 0; i < journalNumberFields.length; i++) {
        journalNumbers.push(journalNumberFields[i].value);

        var DTGValue = document.getElementById('dtg' + i).value;
        arrayOfDTG.push(DTGValue);
    }

    // Create the content for the report.
    var fileContent = "Classification: " + classification + "\n\n"
        + "From: " + from + "\n"
        + "To: " + to + "\n"
        + "Writer/Operator: " + writerOperator + "\n"
        + "Own position: " + ownPosition + "\n\n"
        + "Bottom Line Up Front: " + bluf + "\n\n"
        + "Pattern of life: " + patternOfLife + "\n\n"
        + "Static units in NAI: " + staticUnits + "\n\n";


    for (var i = 0; i < journalNumbers.length; i++) {
        var factsID = 'facts' + i;
        var commentID = 'comment' + i;
        var assessmentID = 'assessment' + i;
        var dtgID = 'dtg' + i;

            var newDTG = document.getElementById(dtgID).value;
            var newFacts = document.getElementById(factsID).value;
            var newComment = document.getElementById(commentID).value;
            var newAssessment = document.getElementById(assessmentID).value;
            

            fileContent += "Journal number: " + journalNumbers[i] + "\n"
            + "DTG: " + newDTG + "\n"
            + "Facts: " + newFacts + "\n"
            + "Comment: " + newComment + "\n"
            + "Assessment: " + newAssessment + "\n\n";
    }

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

    // Create the DTG variable that is used in the end of the filename, and make it ZULU.
    var DTGOfReport = day + "" + hour + "" + minute + "Z";

    // Get the first journal number in the report, to use it in the filename.
    let firstJournalNumber = journalNumberFields[0].value;

    // Get the last journal number in the report, to use it in the filename.
    let lastJournalNumber = journalNumberFields[journalNumberFields.length - 1].value;

    var firstDTG = arrayOfDTG[0];
    var lastDTG = arrayOfDTG[arrayOfDTG.length - 1];

    console.log(firstDTG);
    console.log(lastDTG);

    // Create the filename with the previously declared variables.
    var filename = dateOfReport
        + " " 
        + classification 
        + " MIBN LRRP " 
        + from 
        + " I-02 "
        + "JNR "
        + firstJournalNumber
        + "-"
        + lastJournalNumber
        + " " 
        + firstDTG
        + "-"
        + lastDTG + "Z";

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

