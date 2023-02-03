let uploadedFileAsString = "";

function uploadFromFile() {
    // const content = document.querySelector('.content');
    const [file] = document.querySelector('input[type=file]').files;
    const reader = new FileReader();

    reader.addEventListener("load", () => {
        // this will then display a text file
        //content.innerText = reader.result;
        uploadedFileAsString = reader.result;

        // Split the string into an array, separated by line breaks.
        var stringSplittedToArray = uploadedFileAsString.split(/\r?\n/);
        console.log(stringSplittedToArray);

        // Search trough the array and remove every item that has a empty string value. Return it as a new array.
        var arrayWithoutEmptyElements = [];
        for (var i = 0; i < stringSplittedToArray.length; i++) {
            if (stringSplittedToArray[i] !== "") {
                arrayWithoutEmptyElements.push(stringSplittedToArray[i])
            }
        }

        // Write the new array without empty elements to console.
        console.log(arrayWithoutEmptyElements);
//#region CLASSIFICATIONS
      // Create an array of all available classifications
      var allClassifications = document.querySelector(".classification select");
      var allClassificationsArray = [];
      // Push all the values from the query selector as string values to an array.
      for (var i = 1; i < allClassifications.length; i++) {
        allClassificationsArray.push(allClassifications.options[i].value);
      }

      // Check if the classification from the report matches one of the possible classifications, and set the report classification to the matched value.
      for (var i = 0; i < allClassificationsArray.length; i++) {
        if (allClassificationsArray[i] == arrayWithoutEmptyElements[0].substring(16,19)) {
          var classificationSelect = document.getElementById("classification");
          classificationSelect.value = allClassificationsArray[i];
        }
        console.log(allClassificationsArray[i]);
      }

//#endregion

//#region STATIC VALUES
      // Get the "from" value from the report, and put it in the from-field. 
      var from = document.getElementById("from");
      from.value = arrayWithoutEmptyElements[1].slice(6);

      // Get the "to" value from the report, and put it in the to-field.
      var to = document.getElementById("to");
      to.value = arrayWithoutEmptyElements[2].slice(4);

      // Get the "writer/operator" from the report, and put it in the writer/operator field.
      var writerOperator = document.getElementById("writeroperator");
      writerOperator.value = arrayWithoutEmptyElements[3].slice(17);

      // Get the "own position" from the report, and put it in the "own position" field.
      var ownPosition = document.getElementById("ownposition");
      ownPosition.value = arrayWithoutEmptyElements[4].slice(14);

      // Get the NAI/TAI from the report, and put it in the NAI/TAI position field.
      var naitai = document.getElementById("naitai");
      naitai.value = arrayWithoutEmptyElements[5].slice(9);

      // Get the journal number from the report, and put it in the journal number field.
      var journalNumber = document.getElementById("journalnumber");
      journalNumber.value = arrayWithoutEmptyElements[6].slice(16);

      // Get the DTG for the observation, and put it in the DTG field.
      var dtg = document.getElementById("dtg0");
      dtg.value = arrayWithoutEmptyElements[7].slice(5);

//#endregion
      // Declare the variables to store the indexes for facts, comment and assessment.
      var factsIndexStart;
      var factsIndexEnd;
      var commentIndexStart;
      var commentIndexEnd;
      var assessmentIndexStart;
      var assessmentIndexEnd;

      // Iterate trough all the elements in the array, to find where the indexes start.
      for (var i = 0; i < arrayWithoutEmptyElements.length; i++) {
        if (arrayWithoutEmptyElements[i].substring(0,6) == "Facts:") {
          factsIndexStart = i;
        } 
        if (arrayWithoutEmptyElements[i].substring(0,8) == "Comment:") {
          commentIndexStart = i;
        }
        if (arrayWithoutEmptyElements[i].substring(0,11) == "Assessment:") {
          assessmentIndexStart = i;
        }
      }

      // Set the variables for where the indexes end. 
      factsIndexEnd = commentIndexStart - 1;
      commentIndexEnd = assessmentIndexStart - 1;
      assessmentIndexEnd = arrayWithoutEmptyElements.length - 1;

      // Retrieve the content for the facts field.
      var factsContent = "";
      for (var i = factsIndexStart; i <= factsIndexEnd; i++) {
        factsContent = factsContent + arrayWithoutEmptyElements[i] + "\n";
      }
      var factsElement = document.getElementById("facts0");
      factsElement.value = factsContent.substring(7);

      // Retrieve the content for the comment field.
      var commentContent = "";
      for (var i = commentIndexStart; i <= commentIndexEnd; i++) {
        commentContent = commentContent + arrayWithoutEmptyElements[i] + "\n";
      }
      var commentElement = document.getElementById("comment0");
      commentElement.value = commentContent.substring(9);

      // Retrieve the content for the assessment field.
      var assessmentContent = "";
      for (var i = assessmentIndexStart; i <= assessmentIndexEnd; i++) {
        assessmentContent = assessmentContent + arrayWithoutEmptyElements[i] + "\n";
      }
      var assessmentElement = document.getElementById("assessment0");
      assessmentElement.value = assessmentContent.substring(12);

    }, false);
    if (file) {
        reader.readAsText(file);
    }
}