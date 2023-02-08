let uploadedFileAsString = "";

function getReportContentO08(indexStart, indexEnd, content, array, elementID) {
    for (var i = indexStart; i <= indexEnd; i++) {
        content = content + array[i] + "\n";
    }
    var element = document.getElementById(elementID);
    element.value = content;
    return content;
}

function fileContentToArrayO08() {
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
var GridPrimaryLinkUpPointIndexStart;
var GridPrimaryLinkUpPointIndexEnd;

var GridSecondaryLinkUpPointIndexStart;
var GridSecondaryLinkUpPointIndexEnd;

var DirectionIntoLinkUpPointIndexStart;
var DirectionIntoLinkUpPointIndexEnd;

var DTGLinkUpIndexStart;
var DTGLinkUpIndexEnd;

var WhoIsHostPatrolIndexStart;
var WhoIsHostPatrolIndexEnd;

var MeansOfCommunicationIndexStart;
var MeansOfCommunicationIndexEnd;

var IDLongIndexStart;
var IDLongIndexEnd;

var IDShortIndexStart;
var IDShortIndexEnd;

var authenticationWordIndexStart;
var authenticationWordIndexEnd;

var actionIfLinkUpFailedIndexStart;
var actionIfLinkUpFailedIndexEnd;

var additionalInfoIndexStart;
var additionalInfoIndexEnd;


// Iterate through all the elements in the array, and find the starting indexes of all the different contents.
for (var i = 0; i < arrayWithoutEmptyElements.length; i++) {
  if (arrayWithoutEmptyElements[i].substring(0, 27) == "Grid primary link-up point:") {
    GridPrimaryLinkUpPointIndexStart = i;
  }
  if (arrayWithoutEmptyElements[i].substring(0, 29) == "Grid secondary link-up point:") {
    GridSecondaryLinkUpPointIndexStart = i;
  }
  if (arrayWithoutEmptyElements[i].substring(0, 29) == "Direction into link-up point:") {
    DirectionIntoLinkUpPointIndexStart = i;
  }
  if (arrayWithoutEmptyElements[i].substring(0, 12) == "DTG link-up:") {
    DTGLinkUpIndexStart = i;
  }
  if (arrayWithoutEmptyElements[i].substring(0, 19) == "Who is host patrol:") {
    WhoIsHostPatrolIndexStart = i;
  }
  if (arrayWithoutEmptyElements[i].substring(0, 37) == "Means of communication/freq/Callsign:") {
    MeansOfCommunicationIndexStart = i;
  }
  if (arrayWithoutEmptyElements[i].substring(0, 8) == "ID Long:") {
    IDLongIndexStart = i;
  }
  if (arrayWithoutEmptyElements[i].substring(0, 9) == "ID Short:") {
    IDShortIndexStart = i;
  }
  if (arrayWithoutEmptyElements[i].substring(0, 20) == "Authentication word:") {
    authenticationWordIndexStart = i;
  }
  if (arrayWithoutEmptyElements[i].substring(0, 25) == "Action if link-up failed:") {
    actionIfLinkUpFailedIndexStart = i;
  }
  if (arrayWithoutEmptyElements[i].substring(0, 23) == "Additional information:") {
    additionalInfoIndexStart = i;
  }
}

// Get the content for the Grid Primary Link Up Point field.
var GridPrimaryLinkUpPointContent = "";
GridPrimaryLinkUpPointIndexEnd = GridSecondaryLinkUpPointIndexStart - 1;
for (var i = GridPrimaryLinkUpPointIndexStart; i <= GridPrimaryLinkUpPointIndexEnd; i++) {
  GridPrimaryLinkUpPointContent = GridPrimaryLinkUpPointContent + arrayWithoutEmptyElements[i] + "\n"; 
}
var GridPrimaryLinkUpPointElement = document.getElementById("gridprimarylup0");
GridPrimaryLinkUpPointElement.value = GridPrimaryLinkUpPointContent.substring(28);

// Get the content for the Grid Secondary Link Up Point field.
var GridSecondaryLinkUpPointContent = "";
GridSecondaryLinkUpPointIndexEnd = DirectionIntoLinkUpPointIndexStart - 1;
for (var i = GridSecondaryLinkUpPointIndexStart; i <= GridSecondaryLinkUpPointIndexEnd; i++) {
  GridSecondaryLinkUpPointContent = GridSecondaryLinkUpPointContent + arrayWithoutEmptyElements[i] + "\n"; 
}
var GridSecondaryLinkUpPointElement = document.getElementById("gridsecondarylup0");
GridSecondaryLinkUpPointElement.value = GridSecondaryLinkUpPointContent.substring(30);

// Get the content for the Direction into Link Up Point field.
var DirectionIntoLinkUpPointContent = "";
DirectionIntoLinkUpPointIndexEnd = DTGLinkUpIndexStart - 1;
for (var i = DirectionIntoLinkUpPointIndexStart; i <= DirectionIntoLinkUpPointIndexEnd; i++) {
  DirectionIntoLinkUpPointContent = DirectionIntoLinkUpPointContent + arrayWithoutEmptyElements[i] + "\n"; 
}
var DirectionIntoLinkUpPointElement = document.getElementById("directionintolup0");
DirectionIntoLinkUpPointElement.value = DirectionIntoLinkUpPointContent.substring(30);

// Get the content for the DTG Link Up field.
var DTGLinkUpContent = "";
DTGLinkUpIndexEnd = WhoIsHostPatrolIndexStart - 1;
for (var i = DTGLinkUpIndexStart; i <= DTGLinkUpIndexEnd; i++) {
  DTGLinkUpContent = DTGLinkUpContent + arrayWithoutEmptyElements[i] + "\n"; 
}
var DTGLinkUpElement = document.getElementById("dtglup0");
DTGLinkUpElement.value = DTGLinkUpContent.substring(13);

// Get the content for the Who is Host Patrol field.
var WhoIsHostPatrolContent = "";
WhoIsHostPatrolIndexEnd = MeansOfCommunicationIndexStart - 1;
for (var i = WhoIsHostPatrolIndexStart; i <= WhoIsHostPatrolIndexEnd; i++) {
  WhoIsHostPatrolContent = WhoIsHostPatrolContent + arrayWithoutEmptyElements[i] + "\n"; 
}
var WhoIsHostPatrolElement = document.getElementById("hostpatrol0");
WhoIsHostPatrolElement.value = WhoIsHostPatrolContent.substring(20);

// Get the content for the Means of Communication/Frequency/Callsign field.
var MeansOfCommunicationContent = "";
MeansOfCommunicationIndexEnd = IDLongIndexStart - 1;
for (var i = MeansOfCommunicationIndexStart; i <= MeansOfCommunicationIndexEnd; i++) {
MeansOfCommunicationContent = MeansOfCommunicationContent + arrayWithoutEmptyElements[i] + "\n";
}
var MeansOfCommunicationElement = document.getElementById("meansofcoms0");
MeansOfCommunicationElement.value = MeansOfCommunicationContent.substring(38);

// Get the content for the ID Long field
var IDLongContent = "";
IDLongIndexEnd = IDShortIndexStart - 1;
for (var i = IDLongIndexStart; i <= IDLongIndexEnd; i++) {
IDLongContent = IDLongContent + arrayWithoutEmptyElements[i] + "\n";
}
var IDLongElement = document.getElementById("idlong0");
IDLongElement.value = IDLongContent.substring(9);

// Get the content for the ID Short field
var IDShortContent = "";
IDShortIndexEnd = authenticationWordIndexStart - 1;
for (var i = IDShortIndexStart; i <= IDShortIndexEnd; i++) {
IDShortContent = IDShortContent + arrayWithoutEmptyElements[i] + "\n";
}
var IDShortElement = document.getElementById("idshort0");
IDShortElement.value = IDShortContent.substring(10);


// Get the content for the Authentication Word field.
var authenticationWordContent = "";
authenticationWordIndexEnd = actionIfLinkUpFailedIndexStart - 1;
for (var i = authenticationWordIndexStart; i <= authenticationWordIndexEnd; i++) {
authenticationWordContent = authenticationWordContent + arrayWithoutEmptyElements[i] + "\n";
}
var authenticationWordElement = document.getElementById("authenticationword0");
authenticationWordElement.value = authenticationWordContent.substring(21);

// Get the content for the Action if Link Up Failed field.
var actionIfLinkUpFailedContent = "";
actionIfLinkUpFailedIndexEnd = additionalInfoIndexStart - 1;
for (var i = actionIfLinkUpFailedIndexStart; i <= actionIfLinkUpFailedIndexEnd; i++) {
actionIfLinkUpFailedContent = actionIfLinkUpFailedContent + arrayWithoutEmptyElements[i] + "\n";
}
var actionIfLinkUpFailedElement = document.getElementById("actioniflupdfailed0");
actionIfLinkUpFailedElement.value = actionIfLinkUpFailedContent.substring(26);

// Get the content for the Additional Info field.
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

function uploadFromFileO08() {
    fileContentToArrayO08();
}
