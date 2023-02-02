let uploadedFileAsString = "";

function getReportContent(indexStart, indexEnd, content, array, elementID) {
    for (var i = indexStart; i <= indexEnd; i++) {
        content = content + array[i] + "\n";
    }
    var element = document.getElementById(elementID);
    element.value = content;
    return content;
}

function fileContentToArray() {
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

      // Get the "to" value from the report, and put it in the to field.
      var to = document.getElementById("to");
      to.value = arrayWithoutEmptyElements[2].slice(4);

      // Get the writer/operator value from the report, and put it in the writer/operator field.
      var writerOperator = document.getElementById("writeroperator");
      writerOperator.value = arrayWithoutEmptyElements[3].slice(17);

      // Get the own position value from the report, and put it in the own position field.
      var ownPosition = document.getElementById("ownposition");
      ownPosition.value = arrayWithoutEmptyElements[4].slice(14);

      // Get the DTG for the report, and put it in the DTG position field.
      var dtg = document.getElementById("dtg0");
      dtg.value = arrayWithoutEmptyElements[5].slice(5);

      // Declare all the variables that stores the starting and ending indexes for the different content.
      var baseDescriptionIndexStart;
      var baseDescriptionIndexEnd;

      var primaryPUPIndexStart;
      var primaryPUPIndexEnd;

      var secondaryPUPIndexStart;
      var secondaryPUPIndexEnd;

      var suggestedDOPIndexStart;
      var suggestedDOPIndexEnd;

      var referencePointIndexStart;
      var referencePointIndexEnd;

      var observationAreaIndexStart;
      var observationAreaIndexEnd;

      var OPEffectiveIndexStart;
      var OPEffectiveIndexEnd;

      var photosIndexStart;
      var photosIndexEnd;

      var overallCommentIndexStart;
      var overallCommentIndexEnd;

      var overallAssessmentIndexStart;
      var overallAssessmentIndexEnd;

      var referencesIndexStart;
      var referencesIndexEnd;

    // Iterate trough all the elements in the array, and find the starting indexes of all the different contents.
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
        if (arrayWithoutEmptyElements[i].substring(0,17) == "Observation area:") {
            observationAreaIndexStart = i;
        }
        if (arrayWithoutEmptyElements[i].substring(0,14) == "Effective DTG:") {
            OPEffectiveIndexStart = i;
        }
        if (arrayWithoutEmptyElements[i].substring(0,16) == "Photos attached:") {
            photosIndexStart = i;
        }
        if (arrayWithoutEmptyElements[i].substring(0,16) == "Overall comment:") {
            overallCommentIndexStart = i;
        }
        if (arrayWithoutEmptyElements[i].substring(0,19) == "Overall assessment:") {
            overallAssessmentIndexStart = i;
        }
        if (arrayWithoutEmptyElements[i].substring(0,11) == "References:") {
            referencesIndexStart = i;
        }
      }
      
      // Get the content for the OP/Base description field.
      var baseDescriptionContent = "";
      baseDescriptionIndexEnd = primaryPUPIndexStart - 1;
      for (var i = baseDescriptionIndexStart; i <= baseDescriptionIndexEnd; i++) {
        baseDescriptionContent = baseDescriptionContent + arrayWithoutEmptyElements[i] + "\n";
      }
      var baseDescriptionElement = document.getElementById("op-base0");
      baseDescriptionElement.value = baseDescriptionContent.substring(16);

      // Get the content for the Primary PUP field.
      var primaryPUPContent = "";
      primaryPUPIndexEnd = secondaryPUPIndexStart - 1;
      for (var i = primaryPUPIndexStart; i <= primaryPUPIndexEnd; i++) {
        primaryPUPContent = primaryPUPContent + arrayWithoutEmptyElements[i] + "\n"; 
      }
      var primaryPUPElement = document.getElementById("primarypup0");
      primaryPUPElement.value = primaryPUPContent.substring(13);
      
      // Get the content for the secondary PUP field.
      var secondaryPUPContent = "";
      secondaryPUPIndexEnd = suggestedDOPIndexStart - 1;
      for (var i = secondaryPUPIndexStart; i <= secondaryPUPIndexEnd; i++) {
        secondaryPUPContent = secondaryPUPContent + arrayWithoutEmptyElements[i] + "\n"; 
      }
      var secondaryPUPElement = document.getElementById("secondarypup0");
      secondaryPUPElement.value = secondaryPUPContent.substring(15);

      // Get the content for the suggested DOP field.
      var suggestedDOPContent = "";
      suggestedDOPIndexEnd = referencePointIndexStart - 1;
      for (var i = suggestedDOPIndexStart; i <= suggestedDOPIndexEnd; i++) {
        suggestedDOPContent = suggestedDOPContent + arrayWithoutEmptyElements[i] + "\n"; 
      }
      var suggestedDOPElement = document.getElementById("suggesteddop0");
      suggestedDOPElement.value = suggestedDOPContent.substring(15);

      // Get the content for the reference point field.
      var referencePointContent = "";
      referencePointIndexEnd = observationAreaIndexStart - 1;
      for (var i = referencePointIndexStart; i <= referencePointIndexEnd; i++) {
        referencePointContent = referencePointContent + arrayWithoutEmptyElements[i] + "\n"; 
      }
      var referencePointElement = document.getElementById("referencepoint0");
      referencePointElement.value = referencePointContent.substring(17);

      // Get the content for the observation area field.
      var observationAreaContent = "";
      observationAreaIndexEnd = OPEffectiveIndexStart - 1;
      for (var i = observationAreaIndexStart; i <= observationAreaIndexEnd; i++) {
        observationAreaContent = observationAreaContent + arrayWithoutEmptyElements[i] + "\n"; 
      }
      var observationAreaElement = document.getElementById("obsarea0");
      observationAreaElement.value = observationAreaContent.substring(18);

      // Get the content for the suggested DOP field.
      var OPEffectiveContent = "";
      OPEffectiveIndexEnd = photosIndexStart - 1;
      for (var i = OPEffectiveIndexStart; i <= OPEffectiveIndexEnd; i++) {
        OPEffectiveContent = OPEffectiveContent + arrayWithoutEmptyElements[i] + "\n"; 
      }
      var OPEffectiveElement = document.getElementById("effectivedtg0");
      OPEffectiveElement.value = OPEffectiveContent.substring(15);

      // Get the value for "Photos attached". 
      photosContent = "";
      photosIndexEnd = overallCommentIndexStart - 1;
      for (var i = photosIndexStart; i <= photosIndexEnd; i++) {
        photosContent = photosContent + arrayWithoutEmptyElements[i];
      }

      if (photosContent.slice(17) == "Yes") {
        var toggleButton = document.getElementById("toggle");
        toggleButton.checked = true;
      }

      


    }, false);
    if (file) {
        reader.readAsText(file);
    }
}

function uploadFromFile() {
    fileContentToArray();
}
