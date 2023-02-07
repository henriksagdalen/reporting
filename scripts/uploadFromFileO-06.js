let uploadedFileAsString = "";

function getReportContentO06(indexStart, indexEnd, content, array, elementID) {
    for (var i = indexStart; i <= indexEnd; i++) {
        content = content + array[i] + "\n";
    }
    var element = document.getElementById(elementID);
    element.value = content;
    return content;
}

function fileContentToArrayO06() {
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
      var timeframeIndexStart;
      var timeframeIndexEnd;

      var locationAgtConIndexStart;
      var locationAgtConIndexEnd;

      var descriptionofAgentIndexStart;
      var descriptionofAgentIndexEnd;

      var contactProcedureIndexStart;
      var contactProcedureIndexEnd;
      
      var additionalInfoIndexStart;
      var additionalInfoIndexEnd;


    // Iterate trough all the elements in the array, and find the starting indexes of all the different contents.
      for (var i = 0; i < arrayWithoutEmptyElements.length; i++) {
        if (arrayWithoutEmptyElements[i].substring(0,24) == "Timeframe from-to (DTG):") {
            timeframeIndexStart = i;
        }
        if (arrayWithoutEmptyElements[i].substring(0,16) == "Location AGTCON:") {
            locationAgtConIndexStart = i;
        }
        if (arrayWithoutEmptyElements[i].substring(0,21) == "Description of agent:") {
            descriptionofAgentIndexStart = i;
        }
        if (arrayWithoutEmptyElements[i].substring(0,18) == "Contact procedure:") {
            contactProcedureIndexStart = i;
        }
        if (arrayWithoutEmptyElements[i].substring(0,23) == "Additional information:") {
          additionalInfoIndexStart = i;
      }
      }
      
      // Get the content for the Timeframe field.
      var timeFrameContent = "";
      timeframeIndexEnd = locationAgtConIndexStart - 1;
      for (var i = timeframeIndexStart; i <= timeframeIndexEnd; i++) {
        timeFrameContent = timeFrameContent + arrayWithoutEmptyElements[i] + "\n";
      }
      var timeframeElement = document.getElementById("timeframe0");
      timeframeElement.value = timeFrameContent.substring(25);

      // Get the content for the Location AGTCON field.
      var locationAGTConContent = "";
      locationAgtConIndexEnd = descriptionofAgentIndexStart - 1;
      for (var i = locationAgtConIndexStart; i <= locationAgtConIndexEnd; i++) {
        locationAGTConContent = locationAGTConContent + arrayWithoutEmptyElements[i] + "\n"; 
      }
      var locationAgtConElement = document.getElementById("locationagtcon0");
      locationAgtConElement.value = locationAGTConContent.substring(17);
      
      // Get the content for the description of agent field.
      var descriptionOfAgentContent = "";
      descriptionofAgentIndexEnd = contactProcedureIndexStart - 1;
      for (var i = descriptionofAgentIndexStart; i <= descriptionofAgentIndexEnd; i++) {
        descriptionOfAgentContent = descriptionOfAgentContent + arrayWithoutEmptyElements[i] + "\n"; 
      }
      var descriptionOfAgentElement = document.getElementById("descriptionofagent0");
      descriptionOfAgentElement.value = descriptionOfAgentContent.substring(22);

      // Get the content for the contact procedure field.
      var contactProcedureContent = "";
      contactProcedureIndexEnd = additionalInfoIndexStart - 1;
      for (var i = contactProcedureIndexStart; i <= contactProcedureIndexEnd; i++) {
        contactProcedureContent = contactProcedureContent + arrayWithoutEmptyElements[i] + "\n"; 
      }
      var contactProcedureElement = document.getElementById("contactprocedure0");
      contactProcedureElement.value = contactProcedureContent.substring(19);

      // Get the content for the additional info field.
      var additionalInfoContent = "";
      additionalInfoIndexEnd = arrayWithoutEmptyElements.length - 1;
      for (var i = additionalInfoIndexStart; i <= additionalInfoIndexEnd; i++) {
        additionalInfoContent = additionalInfoContent + arrayWithoutEmptyElements[i] + "\n"; 
      }
      var additionalInfoElement = document.getElementById("additionalinfo0");
      additionalInfoElement.value = additionalInfoContent.substring(24);



    }, false);
    if (file) {
        reader.readAsText(file);
    }
}

function uploadFromFileO06() {
    fileContentToArrayO06();
}
