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
        if (allClassificationsArray[i] == arrayWithoutEmptyElements[0].slice(16,20)) {
          var classificationSelect = document.getElementById("classification");
          classificationSelect.value = allClassificationsArray[i];
          console.log(classificationSelect.value)
        }
        console.log(allClassificationsArray[i])
      }
      
//#endregion

//#region STATIC VALUES
      // Get the "from" value from the report, and put it in the from-field. 
      var from = document.getElementById("from");
      from.value = arrayWithoutEmptyElements[1].slice(6);

      var to = document.getElementById("to");
      to.value = arrayWithoutEmptyElements[2].slice(4);

      var writerOperator = document.getElementById("writeroperator");
      writerOperator.value = arrayWithoutEmptyElements[3].slice(17);

      var ownPosition = document.getElementById("ownposition");
      ownPosition.value = arrayWithoutEmptyElements[4].slice(14);

      var dtg = document.getElementById("dtg0");
      dtg.value = arrayWithoutEmptyElements[5].slice(5);

      var baseDescriptionIndexStart;
      var baseDescriptionIndexEnd;

      var primaryPUPIndexStart;
      var primaryPUPIndexEnd;

      var secondaryPUPIndexStart;
      var primaryPUPIndexEnd;

      var suggestedDOPIndexStart;
      var suggestedDOPIndexEnd;

      var referencePointIndexStart;
      var referencePointIndexEnd;

      var observationAreaIndexStart;
      var observationAreaIndexEnd;

      var OPEffectiveIndexStart;
      var OPEffectiveIndexEnd;

      var overallCommentIndexStart;
      var overallCommentIndexEnd;

      var overallAssessmentIndexStart;
      var overallAssessmentIndexEnd;

      var referencesIndexStart;
      var referencesIndexEnd;

      for (var i = 0; i < arrayWithoutEmptyElements.length; i++) {
        if (arrayWithoutEmptyElements[i].substring(0,15) == "OP description:") {
            baseDescriptionIndexStart = i;
        }
        if (arrayWithoutEmptyElements[i].substring(0,12) == "Primary PUP:") {
            primaryPUPIndexStart = i;
        }
        if (arrayWithoutEmptyElements[i].substring(0,14) == "Secondary PUP:") {
            secondaryPUPIndexStart = i;
        }
        if (arrayWithoutEmptyElements[i].substring(0,14) == "Suggested DOP:") {
            suggestedDOPIndexStart = i;
        }
        if (arrayWithoutEmptyElements[i].substring(0,16) == "Reference point:") {
            referencePointIndexStart = i;
        }
      }
      console.log(referencePointIndexStart);

    }, false);
    if (file) {
        reader.readAsText(file);
    }
}