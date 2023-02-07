let uploadedFileAsString = "";

function getReportContentO09(indexStart, indexEnd, content, array, elementID) {
    for (var i = indexStart; i <= indexEnd; i++) {
        content = content + array[i] + "\n";
    }
    var element = document.getElementById(elementID);
    element.value = content;
    return content;
}

function fileContentToArrayO09() {
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
      var opEffectiveToDTGIndexStart;
      var opEffectiveToDTGIndexEnd;
      
      var exfilMethodIndexStart;
      var exfilMethodIndexEnd;
      
      var routeIndexStart;
      var routeIndexEnd;
      
      var extractionMethodIndexStart;
      var extractionMethodIndexEnd;
      
      var primaryPickUpPointIndexStart;
      var primaryPickUpPointIndexEnd;
      
      var secondaryPickUpPointIndexStart;
      var secondaryPickUpPointIndexEnd;
      
      var primaryTimeframeIndexStart;
      var primaryTimeframeIndexEnd;
      
      var secondaryTimeframeIndexStart;
      var secondaryTimeframeIndexEnd;
      
      
      var meansOfCommunicationIndexStart;
      var meansOfCommunicationIndexEnd;
      
      var idLongIndexStart;
      var idLongIndexEnd;
      
      var idShortIndexStart;
      var idShortIndexEnd;
      
      var authenticationWordIndexStart;
      var authenticationWordIndexEnd;
      
      var actionIfLinkUpFailedIndexStart;
      var actionIfLinkUpFailedIndexEnd;
      
      var additionalInformationIndexStart;
      var additionalInformationIndexEnd;
      
      // Iterate through all the elements in the array, and find the starting indexes of all the different contents.
      for (var i = 0; i < arrayWithoutEmptyElements.length; i++) {
        if (arrayWithoutEmptyElements[i].substring(0, 4) == "DTG:") {
          opEffectiveToDTGIndexStart = i;
        }
        if (arrayWithoutEmptyElements[i].substring(0, 13) == "Exfil method:") {
          exfilMethodIndexStart = i;
        }
        if (arrayWithoutEmptyElements[i].substring(0, 12) == "Exfil route:") {
          routeIndexStart = i;
        }
        if (arrayWithoutEmptyElements[i].substring(0, 7) == "Method:") {
          extractionMethodIndexStart = i;
        }
        if (arrayWithoutEmptyElements[i].substring(0, 22) == "Primary pick-up point:") {
          primaryPickUpPointIndexStart = i;
        }
        if (arrayWithoutEmptyElements[i].substring(0, 24) == "Secondary pick-up point:") {
          secondaryPickUpPointIndexStart = i;
        }
        if (arrayWithoutEmptyElements[i].substring(0, 18) == "Primary timeframe:") {
          primaryTimeframeIndexStart = i;
        }
        if (arrayWithoutEmptyElements[i].substring(0, 20) == "Secondary timeframe:") {
          secondaryTimeframeIndexStart = i;
        }
        if (arrayWithoutEmptyElements[i].substring(0, 37) == "Means of communication/freq/callsign:") {
          meansOfCommunicationIndexStart = i;
        }
        if (arrayWithoutEmptyElements[i].substring(0, 8) == "ID long:") {
          idLongIndexStart = i;
        }
        if (arrayWithoutEmptyElements[i].substring(0, 9) == "ID short:") {
          idShortIndexStart = i;
        }
        if (arrayWithoutEmptyElements[i].substring(0, 20) == "Authentication word:") {
          authenticationWordIndexStart = i;
        }
        if (arrayWithoutEmptyElements[i].substring(0, 25) == "Action if link-up failed:") {
          actionIfLinkUpFailedIndexStart = i;
        }
        if (arrayWithoutEmptyElements[i].substring(0, 23) == "Additional information:") {
          additionalInformationIndexStart = i;
        }
      }
     // Get the content for the "OP effective to DTG" field.
    var opEffectiveToDTGContent = "";
    opEffectiveToDTGIndexEnd = exfilMethodIndexStart - 1;
    for (var i = opEffectiveToDTGIndexStart; i <= opEffectiveToDTGIndexEnd; i++) {
      opEffectiveToDTGContent = opEffectiveToDTGContent + arrayWithoutEmptyElements[i] + "\n";
    }
    var opEffectiveToDTGElement = document.getElementById("opeffectivedtg0");
    opEffectiveToDTGElement.value = opEffectiveToDTGContent.substring(5);

    // Get the content for the "exfil method" field.
    var exfilMethodContent = "";
    exfilMethodIndexEnd = routeIndexStart - 1;
    for (var i = exfilMethodIndexStart; i <= exfilMethodIndexEnd; i++) {
      exfilMethodContent = exfilMethodContent + arrayWithoutEmptyElements[i] + "\n";
    }
    var exfilMethodElement = document.getElementById("exfilmethod0");
    exfilMethodElement.value = exfilMethodContent.substring(14);

    // Get the content for the "route" field.
    var routeContent = "";
    routeIndexEnd = extractionMethodIndexStart - 1;
    for (var i = routeIndexStart; i <= routeIndexEnd; i++) {
      routeContent = routeContent + arrayWithoutEmptyElements[i] + "\n";
    }
    var routeElement = document.getElementById("exfilroute0");
    routeElement.value = routeContent.substring(7);

    // Get the content for the "extraction method" field.
    var extractionMethodContent = "";
    extractionMethodIndexEnd = primaryPickUpPointIndexStart - 1;
    for (var i = extractionMethodIndexStart; i <= extractionMethodIndexEnd; i++) {
      extractionMethodContent = extractionMethodContent + arrayWithoutEmptyElements[i] + "\n";
    }
    var extractionMethodElement = document.getElementById("extractionmethod0");
    extractionMethodElement.value = extractionMethodContent.substring(8);

    // Get the content for the "Primary pick-up point" field.
    var primaryPickUpPointContent = "";
    primaryPickUpPointIndexEnd = secondaryPickUpPointIndexStart - 1;
    for (var i = primaryPickUpPointIndexStart; i <= primaryPickUpPointIndexEnd; i++) {
      primaryPickUpPointContent = primaryPickUpPointContent + arrayWithoutEmptyElements[i] + "\n";
    }
    var primaryPickUpPointElement = document.getElementById("primaryexfilpup0");
    primaryPickUpPointElement.value = primaryPickUpPointContent.substring(23);

    // Get the content for the "Secondary Pick Up Point" field.
    var secondaryPickUpPointContent = "";
    secondaryPickUpPointIndexEnd = primaryTimeframeIndexStart - 1;
    for (var i = secondaryPickUpPointIndexStart; i <= secondaryPickUpPointIndexEnd; i++) {
      secondaryPickUpPointContent = secondaryPickUpPointContent + arrayWithoutEmptyElements[i] + "\n";
    }
    var secondaryPickUpPointElement = document.getElementById("secondaryexfilpup0");
    secondaryPickUpPointElement.value = secondaryPickUpPointContent.substring(25);

    // Get the content for the "Primary Time Frame" field.
    var primaryTimeFrameContent = "";
    primaryTimeframeIndexEnd = secondaryTimeframeIndexStart - 1;
    for (var i = primaryTimeframeIndexStart; i <= primaryTimeframeIndexEnd; i++) {
      primaryTimeFrameContent = primaryTimeFrameContent + arrayWithoutEmptyElements[i] + "\n";
    }
    var primaryTimeFrameElement = document.getElementById("primarytimeframe0");
    primaryTimeFrameElement.value = primaryTimeFrameContent.substring(19);

    // Get the content for the "Secondary Time Frame" field.
    var SecondaryTimeFrameContent = "";
    secondaryTimeframeIndexEnd = meansOfCommunicationIndexStart - 1;
    for (var i = secondaryTimeframeIndexStart; i <= secondaryTimeframeIndexEnd; i++) {
      SecondaryTimeFrameContent = SecondaryTimeFrameContent + arrayWithoutEmptyElements[i] + "\n";
    }
    var secondaryTimeframeElement = document.getElementById("secondarytimeframe0");
    secondaryTimeframeElement.value = SecondaryTimeFrameContent.substring(21);

    // Get the content for the "Communication means" field.
    var communicationContent = "";
    meansOfCommunicationIndexEnd = idLongIndexStart - 1;
    for (var i = meansOfCommunicationIndexStart; i <= meansOfCommunicationIndexEnd; i++) {
      communicationContent = communicationContent + arrayWithoutEmptyElements[i] + "\n";
    }
    var communicationElement = document.getElementById("meansofcoms0");
    communicationElement.value = communicationContent.substring(38);

        // Get the content for the ID long field.
        var idLongContent = "";
        idLongIndexEnd = idShortIndexStart - 1;
        for (var i = idLongIndexStart; i <= idLongIndexEnd; i++) {
          idLongContent = idLongContent + arrayWithoutEmptyElements[i] + "\n";
        }
        var idLongElement = document.getElementById("idlong0");
        idLongElement.value = idLongContent.substring(9);
        
        // Get the content for the ID short field.
        var idShortContent = "";
        idShortIndexEnd = authenticationWordIndexStart - 1;
        for (var i = idShortIndexStart; i <= idShortIndexEnd; i++) {
          idShortContent = idShortContent + arrayWithoutEmptyElements[i] + "\n";
        }
        var idShortElement = document.getElementById("idshort0");
        idShortElement.value = idShortContent.substring(10);
        
        // Get the content for the authentication word field.
        var authenticationWordContent = "";
        authenticationWordIndexEnd = actionIfLinkUpFailedIndexStart - 1;
        for (var i = authenticationWordIndexStart; i <= authenticationWordIndexEnd; i++) {
          authenticationWordContent = authenticationWordContent + arrayWithoutEmptyElements[i] + "\n";
        }
        var authenticationWordElement = document.getElementById("authenticationword0");
        authenticationWordElement.value = authenticationWordContent.substring(21);
        
        // Get the content for the action if link-up failed field.
        var actionIfLinkUpFailedContent = "";
        actionIfLinkUpFailedIndexEnd = additionalInformationIndexStart - 1;
        for (var i = actionIfLinkUpFailedIndexStart; i <= actionIfLinkUpFailedIndexEnd; i++) {
          actionIfLinkUpFailedContent = actionIfLinkUpFailedContent + arrayWithoutEmptyElements[i] + "\n";
        }
        var actionIfLinkUpFailedElement = document.getElementById("actioniflupfailed0");
        actionIfLinkUpFailedElement.value = actionIfLinkUpFailedContent.substring(26);
        
        // Get the content for the additional info field.
        var additionalInfoContent = "";
        additionalInformationIndexEnd = arrayWithoutEmptyElements.length - 1;
        for (var i = additionalInformationIndexStart; i <= additionalInformationIndexEnd; i++) {
          additionalInfoContent = additionalInfoContent + arrayWithoutEmptyElements[i] + "\n";
        }
        var additionalInfoElement = document.getElementById("additionalinfo0");
        additionalInfoElement.value = additionalInfoContent.substring(24);
      
    
}, false);
    if (file) {
        reader.readAsText(file);
    }
}

function uploadFromFileO09() {
    fileContentToArrayO09();
}
