let uploadedFileAsString = "";

function getReportContentO02(indexStart, indexEnd, content, array, elementID) {
    for (var i = indexStart; i <= indexEnd; i++) {
        content = content + array[i] + "\n";
    }
    var element = document.getElementById(elementID);
    element.value = content;
    return content;
}

function fileContentToArrayO02() {
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
      var dopDTGIndexStart;
      var dopDTGIndexEnd;

      var dopPositionIndexStart;
      var dopPositionIndexEnd;

      var dopOkIndexStart;
      var dopOkIndexEnd;

      var problemsActionIndexStart;
      var problemsActionIndexEnd;


    // Iterate trough all the elements in the array, and find the starting indexes of all the different contents.
      for (var i = 0; i < arrayWithoutEmptyElements.length; i++) {
        if (arrayWithoutEmptyElements[i].substring(0,13) == "Drop off DTG:") {
            dopDTGIndexStart = i;
        }
        if (arrayWithoutEmptyElements[i].substring(0,18) == "Drop off position:") {
            dopPositionIndexStart = i;
        }
        if (arrayWithoutEmptyElements[i].substring(0,39) == "Actions if drop off failed/Drop off OK:") {
            dopOkIndexStart = i;
        }
        if (arrayWithoutEmptyElements[i].substring(0,27) == "Other problems/Own actions:") {
            problemsActionIndexStart = i;
        }
      }
      
      // Get the content for the dopDTG field.
      var dopDtgContent = "";
      dopDTGIndexEnd = dopPositionIndexStart - 1;
      for (var i = dopDTGIndexStart; i <= dopDTGIndexEnd; i++) {
        dopDtgContent = dopDtgContent + arrayWithoutEmptyElements[i] + "\n";
      }
      var dopDTGElement = document.getElementById("dopdtg0");
      dopDTGElement.value = dopDtgContent.substring(14);

      // Get the content for the Dop Position field.
      var dopPositionContent = "";
      dopPositionIndexEnd = dopOkIndexStart - 1;
      for (var i = dopPositionIndexStart; i <= dopPositionIndexEnd; i++) {
        dopPositionContent = dopPositionContent + arrayWithoutEmptyElements[i] + "\n"; 
      }
      var dopPositionElement = document.getElementById("dopposition0");
      dopPositionElement.value = dopPositionContent.substring(19);
      
      // Get the content for the dop OK field.
      var dopOkContent = "";
      dopOkIndexEnd = problemsActionIndexStart - 1;
      for (var i = dopOkIndexStart; i <= dopOkIndexEnd; i++) {
        dopOkContent = dopOkContent + arrayWithoutEmptyElements[i] + "\n"; 
      }
      var dopOkElement = document.getElementById("dopok0");
      dopOkElement.value = dopOkContent.substring(40);

      // Get the content for the suggested DOP field.
      var problemsActionContent = "";
      problemsActionIndexEnd = arrayWithoutEmptyElements.length - 1;
      for (var i = problemsActionIndexStart; i <= problemsActionIndexEnd; i++) {
        problemsActionContent = problemsActionContent + arrayWithoutEmptyElements[i] + "\n"; 
      }
      var problemsActionElement = document.getElementById("problemsaction0");
      problemsActionElement.value = problemsActionContent.substring(28);



    }, false);
    if (file) {
        reader.readAsText(file);
    }
}

function uploadFromFileO02() {
    fileContentToArrayO02();
}
