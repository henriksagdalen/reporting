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
      
      var linkUpProcedureIndexStart;
      var linkUpProcedureIndexEnd;
      
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
        if (arrayWithoutEmptyElements[i].substring(0, 20) == "OP effective to DTG:") {
          opEffectiveToDTGIndexStart = i;
        }
        if (arrayWithoutEmptyElements[i].substring(0, 12) == "Exfil method:") {
          exfilMethodIndexStart = i;
        }
        if (arrayWithoutEmptyElements[i].substring(0, 6) == "Route:") {
          routeIndexStart = i;
        }
        if (arrayWithoutEmptyElements[i].substring(0, 17) == "Extraction method:") {
          extractionMethodIndexStart = i;
        }
        if (arrayWithoutEmptyElements[i].substring(0, 22) == "Primary pick-up point:") {
          primaryPickUpPointIndexStart = i;
        }
        if (arrayWithoutEmptyElements[i].substring(0, 25) == "Secondary pick-up point:") {
          secondaryPickUpPointIndexStart = i;
        }
        if (arrayWithoutEmptyElements[i].substring(0, 18) == "Primary timeframe:") {
          primaryTimeframeIndexStart = i;
        }
        if (arrayWithoutEmptyElements[i].substring(0, 21) == "Secondary time frame:") {
          secondaryTimeframeIndexStart = i;
        }
        if (arrayWithoutEmptyElements[i].substring(0, 16) == "Link-up procedure:") {
          linkUpProcedureIndexStart = i;
        }
        if (arrayWithoutEmptyElements[i].substring(0, 31) == "Means of communication/freq/callsign:") {
          meansOfCommunicationIndexStart = i;
        }
        if (arrayWithoutEmptyElements[i].substring(0, 8) == "ID long:") {
          idLongIndexStart = i;
        }
        if (arrayWithoutEmptyElements[i].substring(0, 9) == "ID short:") {
          idShortIndexStart = i;
        }
        if (arrayWithoutEmptyElements[i].substring(0, 18) == "Authentication word:") {
          authenticationWordIndexStart = i;
        }
        if (arrayWithoutEmptyElements[i].substring(0, 23) == "Action if link-up failed:") {
          actionIfLinkUpFailedIndexStart = i;
        }
        if (arrayWithoutEmptyElements[i].substring(0, 22) == "Additional information:") {
          additionalInformationIndexStart = i;
        }
      }
     // Get the content for the "OP effective to DTG" field.
    var opEffectiveToDTGContent = "";
    opEffectiveToDTGIndexEnd = exfilMethodIndexStart - 1;
    for (var i = opEffectiveToDTGIndexStart; i <= opEffectiveToDTGIndexEnd; i++) {
      opEffectiveToDTGContent = opEffectiveToDTGContent + arrayWithoutEmptyElements[i] + "\n";
    }
    var opEffectiveToDTGElement = document.getElementById("opeffectivetodtg0");
    opEffectiveToDTGElement.value = opEffectiveToDTGContent.substring(17);

    // Get the content for the "exfil method" field.
    var exfilMethodContent = "";
    exfilMethodIndexEnd = routeIndexStart - 1;
    for (var i = exfilMethodIndexStart; i <= exfilMethodIndexEnd; i++) {
      exfilMethodContent = exfilMethodContent + arrayWithoutEmptyElements[i] + "\n";
    }
    var exfilMethodElement = document.getElementById("exfilmethod0");
    exfilMethodElement.value = exfilMethodContent.substring(13);

    // Get the content for the "route" field.
    var routeContent = "";
    routeIndexEnd = extractionMethodIndexStart - 1;
    for (var i = routeIndexStart; i <= routeIndexEnd; i++) {
      routeContent = routeContent + arrayWithoutEmptyElements[i] + "\n";
    }
    var routeElement = document.getElementById("route0");
    routeElement.value = routeContent.substring(7);

    // Get the content for the "extraction method" field.
    var extractionMethodContent = "";
    extractionMethodIndexEnd = primaryPickUpPointIndexStart - 1;
    for (var i = extractionMethodIndexStart; i <= extractionMethodIndexEnd; i++) {
      extractionMethodContent = extractionMethodContent + arrayWithoutEmptyElements[i] + "\n";
    }
    var extractionMethodElement = document.getElementById("extractionmethod0");
    extractionMethodElement.value = extractionMethodContent.substring(17);

    // Get the content for the "Primary pick-up point" field.
    var primaryPickUpPointContent = "";
    primaryPickUpPointIndexEnd = secondaryPickUpPointIndexStart - 1;
    for (var i = primaryPickUpPointIndexStart; i <= primaryPickUpPointIndexEnd; i++) {
      primaryPickUpPointContent = primaryPickUpPointContent + arrayWithoutEmptyElements[i] + "\n";
    }
    var primaryPickUpPointElement = document.getElementById("primarypickuppoint0");
    primaryPickUpPointElement.value = primaryPickUpPointContent.substring(24);

    // Get the content for the "Secondary Pick Up Point" field.
    var secondaryPickUpPointContent = "";
    secondaryPickUpPointIndexEnd = primaryTimeframeIndexStart - 1;
    for (var i = secondaryPickUpPointIndexStart; i <= secondaryPickUpPointIndexEnd; i++) {
      secondaryPickUpPointContent = secondaryPickUpPointContent + arrayWithoutEmptyElements[i] + "\n";
    }
    var secondaryPickUpPointElement = document.getElementById("secondarypick-uppoint0");
    secondaryPickUpPointElement.value = secondaryPickUpPointContent.substring(24);

    // Get the content for the "Primary Time Frame" field.
    var primaryTimeFrameContent = "";
    primaryTimeframeIndexEnd = secondaryTimeframeIndexStart - 1;
    for (var i = primaryTimeframeIndexStart; i <= primaryTimeframeIndexEnd; i++) {
      primaryTimeFrameContent = primaryTimeFrameContent + arrayWithoutEmptyElements[i] + "\n";
    }
    var primaryTimeFrameElement = document.getElementById("primarytimeframe0");
    primaryTimeFrameElement.value = primaryTimeFrameContent.substring(24);

    // Get the content for the "Secondary Time Frame" field.
    var SecondaryTimeFrameContent = "";
    secondaryTimeframeIndexEnd = linkUpProcedureIndexStart - 1;
    for (var i = secondaryTimeframeIndexStart; i <= secondaryTimeframeIndexEnd; i++) {
      SecondaryTimeFrameContent = SecondaryTimeFrameContent + arrayWithoutEmptyElements[i] + "\n";
    }
    var secondaryTimeframeElement = document.getElementById("seconddarytimeframe0");
    secondaryTimeframeElement.value = SecondaryTimeFrameContent.substring(24);

    // Get the content for the "Link Up Procedure" field.
    var linkUpProcedureContent = "";
    linkUpProcedureIndexEnd = meansOfCommunicationIndexStart - 1;
    for (var i = linkUpProcedureIndexStart; i <= linkUpProcedureIndexEnd; i++) {
      linkUpProcedureContent = linkUpProcedureContent + arrayWithoutEmptyElements[i] + "\n";
    }
    var linkUpProcedureElement= document.getElementById("linkupProcedure");
    linkUpProcedureElement.value = linkUpProcedureContent.substring(24);

    // Get the content for the "Communication means" field.
    var communicationContent = "";
    meansOfCommunicationIndexEnd = idLongIndexStart - 1;
    for (var i = meansOfCommunicationIndexStart; i <= meansOfCommunicationIndexEnd; i++) {
      communicationContent = communicationContent + arrayWithoutEmptyElements[i] + "\n";
    }
    var communicationElement = document.getElementById("primarypickuppoint0");
    communicationElement.value = communicationContent.substring(24);

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
        authenticationWordElement.value = authenticationWordContent.substring(19);
        
        // Get the content for the action if link-up failed field.
        var actionIfLinkUpFailedContent = "";
        actionIfLinkUpFailedIndexEnd = additionalInformationIndexStart - 1;
        for (var i = actionIfLinkUpFailedIndexStart; i <= actionIfLinkUpFailedIndexEnd; i++) {
          actionIfLinkUpFailedContent = actionIfLinkUpFailedContent + arrayWithoutEmptyElements[i] + "\n";
        }
        var actionIfLinkUpFailedElement = document.getElementById("actioniflinkupfailed0");
        actionIfLinkUpFailedElement.value = actionIfLinkUpFailedContent.substring(24);
        
        // Get the content for the additional info field.
        var additionalInfoContent = "";
        additionalInformationIndexEnd = arrayWithoutEmptyElements.length - 1;
        for (var i = additionalInformationIndexStart; i <= additionalInformationIndexEnd; i++) {
          additionalInfoContent = additionalInfoContent + arrayWithoutEmptyElements[i] + "\n";
        }
        var additionalInfoElement = document.getElementById("additionalinfo0");
        additionalInfoElement.value = additionalInfoContent.substring(23);
      
    
}, false);
    if (file) {
        reader.readAsText(file);
    }
}

function uploadFromFileO09() {
    fileContentToArrayO09();
}
