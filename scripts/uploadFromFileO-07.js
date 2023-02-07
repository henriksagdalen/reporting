let uploadedFileAsString = "";

function getReportContentO07(indexStart, indexEnd, content, array, elementID) {
    for (var i = indexStart; i <= indexEnd; i++) {
        content = content + array[i] + "\n";
    }
    var element = document.getElementById(elementID);
    element.value = content;
    return content;
}

function fileContentToArrayO07() {
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
    /*  // Create an array of all available classifications
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
    */  
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
      var positionOfDLBIndexStart;
      var positionOfDLBIndexEnd;

      var descriptionOfDLBIndexStart;
      var descriptionOfDLBIndexEnd;

      var timeFrameOfDLBIndexStart;
      var timeFrameOfDLBIndexEnd;

      var procedureOfDLBIndexStart;
      var procedureOfDLBIndexEnd;

      var authenticationOfDLBIndexStart;
      var authenticationOfDLBIndexEnd;

      var additionalInfoIndexStart;
      var additionalInfoIndexEnd;

    // Iterate through all the elements in the array, and find the starting indexes of all the different contents.
    for (var i = 0; i < arrayWithoutEmptyElements.length; i++) {
      if (arrayWithoutEmptyElements[i].substring(0,20) == "Position of DLB:") {
          positionOfDLBIndexStart = i;
      }
      if (arrayWithoutEmptyElements[i].substring(0,22) == "Description of DLB:") {
          descriptionOfDLBIndexStart = i;
      }
      if (arrayWithoutEmptyElements[i].substring(0,23) == "TimeFrame of DLB (DTG):") {
          timeFrameOfDLBIndexStart = i;
      }
      if (arrayWithoutEmptyElements[i].substring(0,25) == "Procedure of opening DLB:") {
          procedureOfDLBIndexStart = i;
      }
      if (arrayWithoutEmptyElements[i].substring(0,32) == "Authentication of content in DLB:") {
        authenticationOfDLBIndexStart = i;
      }
      if (arrayWithoutEmptyElements[i].substring(0,23) == "Additional information:") {
        additionalInfoIndexStart = i;
      }
    }

    // Get the content for the Position of DLB field.
    var positionOfDLBContent = "";
    positionOfDLBIndexEnd = descriptionOfDLBIndexStart - 1;
    for (var i = positionOfDLBIndexStart; i <= positionOfDLBIndexEnd; i++) {
      positionOfDLBContent = positionOfDLBContent + arrayWithoutEmptyElements[i] + "\n";
    }
    var positionOfDLBElement = document.getElementById("positionofdlb0");
    positionOfDLBElement.value = positionOfDLBContent.substring(20);

    // Get the content for the Description of DLB field.
    var descriptionOfDLBContent = "";
    descriptionOfDLBIndexEnd = timeFrameOfDLBIndexStart - 1;
    for (var i = descriptionOfDLBIndexStart; i <= descriptionOfDLBIndexEnd; i++) {
      descriptionOfDLBContent = descriptionOfDLBContent + arrayWithoutEmptyElements[i] + "\n"; 
    }
    var descriptionOfDLBElement = document.getElementById("descriptionofdlb0");
    descriptionOfDLBElement.value = descriptionOfDLBContent.substring(22);

    // Get the content for the time frame of opening DLB field.
    var timeFrameOpeningDLBContent = "";
    timeFrameOfDLBIndexEnd = procedureOfDLBIndexStart - 1;
    for (var i = timeFrameOfDLBIndexStart; i <= timeFrameOfDLBIndexEnd; i++) {
      timeFrameOpeningDLBContent = timeFrameOpeningDLBContent + arrayWithoutEmptyElements[i] + "\n";
    }
    var timeFrameOfOpeningDLBElement = document.getElementById("timeframeofopeningdlb0");
    timeFrameOfOpeningDLBElement.value = timeFrameOpeningDLBContent.substring(29);

    // Get the content for the procedure of opening DLB field.
    var procedureOfOpeningDLBContent = "";
          procedureOfDLBIndexEnd = authenticationOfDLBIndexStart - 1;
    for (var i = procedureOfDLBIndexStart; i <= procedureOfDLBIndexEnd; i++) {
      procedureOfOpeningDLBContent = procedureOfOpeningDLBContent + arrayWithoutEmptyElements[i] + "\n";
    }
    var procedureOfOpeningDLBElement = document.getElementById("procedureofopeningdlb0");
    procedureOfOpeningDLBElement.value = procedureOfOpeningDLBContent.substring(29);

    // Get the content for the authentication of content in DLB field.
    var authenticationOfContentInDLBContent = "";
          authenticationOfDLBIndexEnd = additionalInfoIndexStart - 1;
    for (var i = authenticationOfDLBIndexStart; i <= authenticationOfDLBIndexEnd; i++) {
      authenticationOfContentInDLBContent = authenticationOfContentInDLBContent + arrayWithoutEmptyElements[i] + "\n";
    }
    var authenticationOfContentInDLBElement = document.getElementById("authenticationofcontentindlb0");
    authenticationOfContentInDLBElement.value = authenticationOfContentInDLBContent.substring(36);

    // Get the content for the additional information field.
    var additionalInformationContent = "";
    additionalInfoIndexEnd = arrayWithoutEmptyElements.length - 1;
    for (var i = additionalInfoIndexStart; i <= additionalInfoIndexEnd; i++) {
      additionalInformationContent = additionalInformationContent + arrayWithoutEmptyElements[i] + "\n";
    }
    var additionalInformationElement = document.getElementById("additionalinformation0");
    additionalInformationElement.value = additionalInformationContent.substring(24);

    }, false);
    if (file) {
        reader.readAsText(file);
    }
}

function uploadFromFileO07() {
    fileContentToArrayO07();
}
