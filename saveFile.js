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
    var journalNumbers = [];
    
    // LEGGE TIL FORKLARENDE KOMMENTAR HER.
    for (var i = 0; i < journalNumberFields.length; i++) {
        journalNumbers.push(journalNumberFields[i].value);
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

            var newFacts = document.getElementById(factsID).value;
            var newComment = document.getElementById(commentID).value;
            var newAssessment = document.getElementById(assessmentID).value;

            fileContent += "Journal number: " + journalNumbers[i] + "\n"
            + "Facts: " + newFacts + "\n"
            + "Comment: " + newComment + "\n"
            + "Assessment: " + newAssessment + "\n\n";
    }

    // Create a Blob object with the file content
    var file = new Blob([fileContent], { type: "text/plain" });

    // Create a download link for the file
    var downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(file);
    downloadLink.download = "report.txt";
    downloadLink.style.display = "none";

    // Add the download link to the body and click it to start the download
    document.body.appendChild(downloadLink);
    downloadLink.click();
    
    // Remove the link element from the body
    document.body.removeChild(downloadLink);
}
