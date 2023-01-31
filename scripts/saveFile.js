function saveToFile() {
    var keysToRemove = [];
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        if (key.startsWith('facts') || key.startsWith('comment') || key.startsWith('assessment') || key.startsWith('dtg')) {
            keysToRemove.push(key);
        }
    }

    for (var i = 0; i < keysToRemove.length; i++) {
        localStorage.removeItem(keysToRemove[i]);
    }


    const india02form = document.getElementById("india02form");
    if (india02form.checkValidity()) {

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
        //var staticUnits = document.getElementById("staticunits").value;
        var overallComment = document.getElementById("overallcomment").value;
        var overallAssessment = document.getElementById("overallassessment").value;

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

        // Get the input fields for the static units table
        var tableLength = document.getElementById("staticunits").rows.length - 1;
        var staticUnits = "";

        for (var i = 0; i < tableLength; i++) {
            var staticUnitID = 'staticunit' + i;
            var staticDTGID = 'staticdtg' + i;

            var staticUnit = document.getElementById(staticUnitID).value;
            var staticDTG = document.getElementById(staticDTGID).value;
            if (staticUnit != "") {
                staticUnits += "\n" + staticUnit + " static since " + staticDTG + "Z";
            }
        }


        // Create the content for the report.
        var fileContent = "Classification: " + classification + "\n\n" +
            "From: " + from + "\n" +
            "To: " + to + "\n" +
            "Writer/Operator: " + writerOperator + "\n" +
            "Own position: " + ownPosition + "\n\n" +
            "Bottom Line Up Front: " + bluf + "\n\n" +
            "Pattern of life: " + patternOfLife + "\n\n" +
            "Static units in NAI: " + staticUnits + "\n\n" +
            "Overall comment: " + overallComment + "\n\n" +
            "Overall assessment: " + overallAssessment + "\n\n";


        for (var i = 0; i < journalNumbers.length; i++) {
            var factsID = 'facts' + i;
            var commentID = 'comment' + i;
            var assessmentID = 'assessment' + i;
            var dtgID = 'dtg' + i;

            var newDTG = document.getElementById(dtgID).value;
            var newFacts = document.getElementById(factsID).value;
            var newComment = document.getElementById(commentID).value;
            var newAssessment = document.getElementById(assessmentID).value;

            fileContent += "Journal number: " + journalNumbers[i] + "\n" +
                "DTG: " + newDTG + "Z" + "\n" +
                "Facts: " + newFacts + "\n" +
                "Comment: " + newComment + "\n" +
                "Assessment: " + newAssessment + "\n\n";
        }

        // Get the date and time from the local computer.
        var newDate = new Date();
        var year = newDate.getFullYear();
        var month = newDate.getMonth();
        var day = newDate.getDate();
        var hour = newDate.getHours();
        var minute = newDate.getMinutes();
        //FIKS DEN HER, DEN ER NASTY.
        // Check if values are less than 10, and format them correctly if true.
        if (month < 10) {
            month = "0" + (newDate.getMonth() + 1);
        } else {
            month = (newDate.getMonth() + 1);
        }
        if (day < 10) {
            date = "0" + newDate.getDate();
        } else {
            date = newDate.getDate();
        }
        if (hour < 10) {
            hour = "0" + newDate.getHours();
        } else {
            hour = newDate.getHours();
        }
        if (minute < 10) {
            minute = "0" + newDate.getMinutes();
        } else {
            minute = newDate.getMinutes()
        }

        // Create the date variable that is used in the start of the filename.
        var dateOfReport = year + "-" + month + "-" + day;

        // Get the first and last journal number in the report, to use it in the filename.
        let firstJournalNumber = journalNumberFields[0].value;
        let lastJournalNumber = journalNumberFields[journalNumberFields.length - 1].value;

        if (firstJournalNumber < 10) {
            firstJournalNumber = "00" + firstJournalNumber;
        } else if (firstJournalNumber < 100) {
            firstJournalNumber = "0" + firstJournalNumber;
        }
        if (lastJournalNumber < 10) {
            lastJournalNumber = "00" + lastJournalNumber;
        } else if (lastJournalNumber < 100) {
            lastJournalNumber = "0" + lastJournalNumber;
        }

        // Get the reporting window to use it in the filename.
        var firstDTG = document.getElementById("dtgfrom").value;
        var lastDTG = document.getElementById("dtgto").value;

        // Create the filename with the previously declared variables.
        var filename = dateOfReport +
            " " +
            classification +
            " MIBN LRRP " +
            from +
            " I-02 " +
            "JNR " +
            firstJournalNumber +
            "-" +
            lastJournalNumber +
            " " +
            firstDTG + "Z" +
            "-" +
            lastDTG + "Z";

        // Create a Blob object with the file content
        var file = new Blob([fileContent], {
            type: "text/plain"
        });

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
    } else {
        alert("Please fill out all required fields before saving.")
        var requiredFields = document.querySelectorAll("[required]");
        for (var i = 0; i < requiredFields.length; i++) {
            if (!requiredFields[i].checkValidity()) {
                requiredFields[i].style.backgroundColor = "antiquewhite";
            }
        }
    }
}