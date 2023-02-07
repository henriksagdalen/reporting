let uploadedFileAsString = "";

function getReportContentO04(indexStart, indexEnd, content, array, elementID) {
    for (var i = indexStart; i <= indexEnd; i++) {
        content = content + array[i] + "\n";
    }
    var element = document.getElementById(elementID);
    element.value = content;
    return content;
}

function fileContentToArrayO04() {
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
/*
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
      var whereIndexStart;
      var whereIndexEnd;

      var typeOfContactIndexStart;
      var typeOfContactIndexEnd;

      var enemyLossIndexStart;
      var enemyLossIndexEnd;

      var ownLossIndexStart;
      var ownLossIndexEnd;

      var enemySizeIndexStart;
      var enemySizeIndexEnd;

      var enemyPositionIndexStart;
      var enemyPositionIndexEnd;

      var enemyVehiclesIndexStart;
      var enemyVehiclesIndexEnd;

      var ownPlanOfActionIndexStart;
      var ownPlanOfActionIndexEnd;

      var needforsupportIndexstart;
      var needforsupportIndexEnd;


    // Iterate trough all the elements in the array, and find the starting indexes of all the different contents.
      for (var i = 0; i < arrayWithoutEmptyElements.length; i++) {
        if (arrayWithoutEmptyElements[i].substring(0,6) == "Where:") {
            whereIndexStart = i;
        }
        if (arrayWithoutEmptyElements[i].substring(0,16) == "Type of contact:") {
            typeOfContactIndexStart = i;
        }
        if (arrayWithoutEmptyElements[i].substring(0,22) == "Enemy loss/Casualties:") {
            enemyLossIndexStart = i;
        }
        if (arrayWithoutEmptyElements[i].substring(0,20) == "Own loss/Casualties:") {
            ownLossIndexStart = i;
        }
        if (arrayWithoutEmptyElements[i].substring(0,11) == "Enemy size:") {
            enemySizeIndexStart = i;
        }
        if (arrayWithoutEmptyElements[i].substring(0,27) == "Assumed enemy position now:") {
            enemyPositionIndexStart = i;
        }
        if (arrayWithoutEmptyElements[i].substring(0,38) == "Enemy vehicles, weapons and equipment:") {
            enemyVehiclesIndexStart = i;
        }
        if (arrayWithoutEmptyElements[i].substring(0,19) == "Own plan of action:") {
            ownPlanOfActionIndexStart = i;
        }
        if (arrayWithoutEmptyElements[i].substring(0,17) == "Need for support:") {
            needforsupportIndexstart = i;
        }
      }
      
      // Get the content for the Where field.
      var whereContent = "";
      whereIndexEnd = typeOfContactIndexStart - 1;
      for (var i = whereIndexStart; i <= whereIndexEnd; i++) {
        whereContent = whereContent + arrayWithoutEmptyElements[i] + "\n";
      }
      var whereElement = document.getElementById("where0");
      whereElement.value = whereContent.substring(7);

      // Get the content for the type of contact field.
      var TOCContent = "";
      typeOfContactIndexEnd = enemyLossIndexStart - 1;
      for (var i = typeOfContactIndexStart; i <= typeOfContactIndexEnd; i++) {
        TOCContent = TOCContent + arrayWithoutEmptyElements[i] + "\n"; 
      }
      var TOCElement = document.getElementById("typeofcontact0");
      TOCElement.value = TOCContent.substring(17);
      
      // Get the content for the enemy loss field.
      var enemyLossContent = "";
      enemyLossIndexEnd = ownLossIndexStart - 1;
      for (var i = enemyLossIndexStart; i <= enemyLossIndexEnd; i++) {
        enemyLossContent = enemyLossContent + arrayWithoutEmptyElements[i] + "\n"; 
      }
      var enemyLosselement = document.getElementById("enemyloss0");
      enemyLosselement.value = enemyLossContent.substring(23);

      // Get the content for the own loss field.
      var ownLossContent = "";
      ownLossIndexEnd = enemySizeIndexStart - 1;
      for (var i = ownLossIndexStart; i <= ownLossIndexEnd; i++) {
        ownLossContent = ownLossContent + arrayWithoutEmptyElements[i] + "\n"; 
      }
      var ownLossElement = document.getElementById("ownloss0");
      ownLossElement.value = ownLossContent.substring(21);

      // Get the content for the enemy size field.
      var enemySizeContent = "";
      enemySizeIndexEnd = enemyPositionIndexStart - 1;
      for (var i = enemySizeIndexStart; i <= enemySizeIndexEnd; i++) {
        enemySizeContent = enemySizeContent + arrayWithoutEmptyElements[i] + "\n"; 
      }
      var enemySizeElement = document.getElementById("enemysize0");
      enemySizeElement.value = enemySizeContent.substring(12);

      // Get the content for the enemy position field.
      var enemyPosContent = "";
      enemyPositionIndexEnd = enemyVehiclesIndexStart - 1;
      for (var i = enemyPositionIndexStart; i <= enemyPositionIndexEnd; i++) {
        enemyPosContent = enemyPosContent + arrayWithoutEmptyElements[i] + "\n"; 
      }
      var enemyPosElement = document.getElementById("enemypos0");
      enemyPosElement.value = enemyPosContent.substring(28);

      // Get the content for the enemy vehicles field.
      var enemyVehicleContent = "";
      enemyVehiclesIndexEnd = ownPlanOfActionIndexStart - 1;
      for (var i = enemyVehiclesIndexStart; i <= enemyVehiclesIndexEnd; i++) {
        enemyVehicleContent = enemyVehicleContent + arrayWithoutEmptyElements[i] + "\n"; 
      }
      var enemyVehicleElement = document.getElementById("enemyvehicles0");
      enemyVehicleElement.value = enemyVehicleContent.substring(39);

      // Get the content for the own plan of action field.
      var ownPlanOfActionContent = "";
      ownPlanOfActionIndexEnd = needforsupportIndexstart - 1;
      for (var i = ownPlanOfActionIndexStart; i <= ownPlanOfActionIndexEnd; i++) {
        ownPlanOfActionContent = ownPlanOfActionContent + arrayWithoutEmptyElements[i] + "\n"; 
      }
      var ownPlanofActionElement = document.getElementById("ownplanofaction0");
      ownPlanofActionElement.value = ownPlanOfActionContent.substring(20);

      // Get the content for the need for support field.
      var needForSupportContent = "";
      needforsupportIndexEnd = arrayWithoutEmptyElements.length - 1;
      for (var i = needforsupportIndexstart; i <= needforsupportIndexEnd; i++) {
        needForSupportContent = needForSupportContent + arrayWithoutEmptyElements[i] + "\n"; 
      }
      var needForSupportElement = document.getElementById("needforsupport0");
      needForSupportElement.value = needForSupportContent.substring(18);

    }, false);
    if (file) {
        reader.readAsText(file);
    }
}

function uploadFromFileO04() {
    fileContentToArrayO04();
}
