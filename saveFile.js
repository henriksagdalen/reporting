function saveToFile() {
    // Get the selected classification value
    var classificationSelect = document.querySelector(".classification select");
    var classification = classificationSelect.options[classificationSelect.selectedIndex].value;

    // Get the input values from the text fields
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
    
    for (var i = 0; i < journalNumberFields.length; i++) {
        journalNumbers.push(journalNumberFields[i].value);
    }
    console.log(journalNumberFields)
    // Get the facts, comment, and assessment input fields
    var facts = document.getElementById("facts").value;
    var comment = document.getElementById("comment").value;
    var assessment = document.getElementById("assessment").value;

    // Create the text file content
    var fileContent = "Classification: " + classification + "\n\n"
        + "From: " + from + "\n"
        + "To: " + to + "\n"
        + "Writer/Operator: " + writerOperator + "\n"
        + "Own position: " + ownPosition + "\n\n"
        + "Bottom Line Up Front: " + bluf + "\n\n"
        + "Pattern of life: " + patternOfLife + "\n\n"
        + "Static units in NAI: " + staticUnits + "\n\n";

        for (var i = 0; i < journalNumbers.length; i++) {
        fileContent += "Journal number: " + journalNumbers[i] + "\n"
            + "Facts: " + facts + "\n"
            + "Comment: " + comment + "\n"
            + "Assessment: " + assessment + "\n\n";
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

/*function saveToFile() {
    // Get the values from the text fields
    var classification = document.querySelector("select").value;
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
    var writeroperator = document.getElementById("writeroperator").value;
    var ownposition = document.getElementById("ownposition").value;
    var bluf = document.getElementById("bluf").value;
    var patternoflife = document.getElementById("patternoflife").value;
    var staticunits = document.getElementById("staticunits").value;
    var journalnumber = document.getElementById("journalnumber").value;
    var facts = document.getElementById("facts").value;
    var comment = document.getElementById("comment").value;
    var assessment = document.getElementById("assessment").value;

    // Create an object with the values
    var object = {
        classification: classification,
        from: from,
        to: to,
        writeroperator: writeroperator,
        ownposition: ownposition,
        bluf: bluf,
        patternoflife: patternoflife,
        staticunits: staticunits,
        journalnumber: journalnumber,
        facts: facts,
        comment: comment,
        assessment: assessment
    };

    // Convert the object to a JSON string
    var jsonString = JSON.stringify(object);

    // Create a Blob object with the JSON string and the appropriate MIME type
    var blob = new Blob([jsonString], {type: "application/json"});

    // Create a link element with the blob object as the href
    var link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "data.json";

    // Append the link element to the body and click it to trigger the download
    document.body.appendChild(link);
    link.click();

    // Remove the link element from the body
    document.body.removeChild(link);
}
*/