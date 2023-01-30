
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
        if (allClassificationsArray[i] == arrayWithoutEmptyElements[0].slice(16,19)) {
          var classificationSelect = document.getElementById("klasser");
          classificationSelect.value = allClassificationsArray[i];
        }
      }

//#endregion

//#region STATIC VALUES
      // Get the "from" value from the report, and put it in the from-field. 
      var from = document.getElementById("from");
      from.value = arrayWithoutEmptyElements[1].slice(6,100);

      // Get the "to" value from the report, and put it in the to-field.
      var to = document.getElementById("to");
      to.value = arrayWithoutEmptyElements[2].slice(4,100);

      // Get the "writer/operator" from the report, and put it in the writer/operator field.
      var writerOperator = document.getElementById("writeroperator");
      writerOperator.value = arrayWithoutEmptyElements[3].slice(17,100);

      // Get the "own position" from the report, and put it in the "own position" field.
      var ownPosition = document.getElementById("ownposition");
      ownPosition.value = arrayWithoutEmptyElements[4].slice(14,100);

      // Get the NAI/TAI from the report, and put it in the NAI/TAI position field.
      var naitai = document.getElementById("naitai");
      naitai.value = arrayWithoutEmptyElements[5].slice(9,100);

      // Get the "DTG from" the report, and put it in the DTG-from field.
      var dtgFrom = document.getElementById("dtgfrom");
      dtgFrom.value = arrayWithoutEmptyElements[6].slice(9,100);

      // Get the "DTG to" the report, and put it in the DTG-to field.
      var dtgTo = document.getElementById("dtgto");
      dtgTo.value = arrayWithoutEmptyElements[7].slice(9,100);
//#endregion

//#region BLUF
      // Find the array elements that contains the BLUF information. Probably excessive because bluf will always start at array-index 8 for now.
      var blufStartsAtIndex = "";
      for (var i = 0; i < arrayWithoutEmptyElements.length; i++) {
        if (arrayWithoutEmptyElements[i] == "Bottom Line Up Front:") {
          blufStartsAtIndex = i + 1;
        }
      }
      
      // Find the array element that contains pattern of life. This will indicate where the BLUF information ends.
      var blufEndsAtIndex = "";
      for (var i = 0; i < arrayWithoutEmptyElements.length; i++) {
        if (arrayWithoutEmptyElements[i] == "Pattern of life:") {
          blufEndsAtIndex = i;
        }
      }
      
      // Iterate trough the elements in the array that contains the BLUF information, and write it to a string. 
      var blufContent = "";
      for (var i = blufStartsAtIndex; i < blufEndsAtIndex; i++) {
        blufContent = blufContent + arrayWithoutEmptyElements[i];
        blufContent = blufContent + "\n";
      }

      // Input the string in the BLUF-field in the report.
      var bluf = document.getElementById("bluf");
      bluf.value = blufContent;
//#endregion

//#region PATTERN OF LIFE
      // Find the array element that contains "Pattern of life"-string value. This will indicate the start of "Pattern of life"-information.
      var polStartsAtIndex = blufEndsAtIndex + 1;

      // Find the array element that contains "static units in NAI".
      var polEndsAtIndex = "";
      for (var i = 0; i < arrayWithoutEmptyElements.length; i++) {
        if (arrayWithoutEmptyElements[i] == "Static units in NAI:") {
          polEndsAtIndex = i;
        }
      }

      // Iterate trough the elements in the array that contains the POL information, and write it to a string.
      var polContent = "";
      for (var i = polStartsAtIndex; i < polEndsAtIndex; i++) {
        polContent = polContent + arrayWithoutEmptyElements[i];
        polContent = polContent + "\n";
      }
      
      // Input the string in the POL-field in the report. 
      var patternOfLife = document.getElementById("patternoflife");
      patternOfLife.value = polContent;
//#endregion

//#region STATIC UNITS IN NAI
      // Find the start of the elements that belongs to "Static Units in NAI".
      var staticUnitsStartsAtIndex = polEndsAtIndex + 1;

      // Find the array element that contains "Overall comment".
      var staticUnitsEndsAtIndex = "";
      for (var i = 0; i < arrayWithoutEmptyElements.length; i++) {
        if (arrayWithoutEmptyElements[i] == "Overall comment:") {
          staticUnitsEndsAtIndex = i;
        }
      }

      // Iterate trough the elements in the array that contains information about static units, and write it to the table in the report.
      var staticUnits = [];

      // Calculate how many rows that are needed in the table
      var tableRowCounter = staticUnitsEndsAtIndex - staticUnitsStartsAtIndex;

      // Split each of the strings into separate arrays, to make it easier to extract the text we need.
      for (var i = staticUnitsStartsAtIndex; i < staticUnitsEndsAtIndex; i++) {
        staticUnits.push(arrayWithoutEmptyElements[i].split(" "));
      }
      
      // Get the table from the HTML-document
      var staticUnitsTable = document.getElementById("staticunits");

      // Create the needed amount of rows and cells, based on the row counter.
      for (var i = 0; i < tableRowCounter; i++) {

        // Create a table row.
        var row = document.createElement("tr");
        
        // Create the cells that store the input fields.
        var cell1 = document.createElement("td");
        var cell2 = document.createElement("td");

        // Create the input fields, and make an incremental id-value
        var input1 = document.createElement("input");
        input1.id = 'staticunit' + (i + 1);
        var input2 = document.createElement("input");
        input2.id = 'staticdtg' + (i + 1);

        // Append the input-fields to the cells
        cell1.appendChild(input1);
        cell2.appendChild(input2);

        // Append the cells to the new row.
        row.appendChild(cell1);
        row.appendChild(cell2);

        // Append the row to the table
        staticUnitsTable.appendChild(row);
        // Repeat the process for all rows of static units.
      }

      // Declare a variable to store the value for static unit, and dtg.
      var staticUnitValue;
      var staticDTGValue;

      // Iterate trough all array elements that contain static units, and input the values in the table cells.
      for (var i = 0; i < tableRowCounter; i++) {
        var staticUnitID = "staticunit" + i;
        var staticDTGID = "staticdtg" + i;
          staticUnitValue = document.getElementById(staticUnitID);
          staticDTGValue = document.getElementById(staticDTGID);

          // Only extract the "Unit" and the "DTG" from the array.
          staticUnitValue.value = staticUnits[i][0];
          staticDTGValue.value = staticUnits[i][3];
      }

//#endregion

//#region OVERALL COMMENT

      // Find the array index of where "Overall comment"-content is stored
      var overallCommentStartsAtIndex;
      for (var i = 0; i < arrayWithoutEmptyElements.length; i++) {
        if (arrayWithoutEmptyElements[i] == "Overall comment:") {
          overallCommentStartsAtIndex = i + 1;
        }
      }

      // Find the array index of where "Overall comment"-content ends.
      var overallCommentEndsAtIndex;
      for (var i = 0; i < arrayWithoutEmptyElements.length; i++) {
        if (arrayWithoutEmptyElements[i] == "Overall assessment:") {
          overallCommentEndsAtIndex = i;
        }
      }

      // Declare a variable for storing the content of the "Overall comment".
      var overallCommentContent = "";

      // Iterate trough the elements that belongs to "Overall comment", and assign them to the "Overall comment"-field.
      for (var i = overallCommentStartsAtIndex; i < overallCommentEndsAtIndex; i++) {
        overallCommentContent = overallCommentContent + arrayWithoutEmptyElements[i];
        overallCommentContent = overallCommentContent + "\n";
      }

      // Get the element that will display the overall comment
      var overallCommentElement = document.getElementById("overallcomment");

      // Set the value of the element equal to the content of the "Overall comment"-array elements. 
      overallCommentElement.value = overallCommentContent;
//#endregion

//#region OVERALL ASSESSMENT
      // Get the index of where the content for "Overall assessment" starts.
      var overallAssessmentStartsAtIndex = overallCommentEndsAtIndex + 1;
      
      // Search for the first element that contains the string "Journal number:". Break the loop when it finds the first string that matches the value. 
      // Set the "Overall assessment"-end index equal to the index given from the match above.
      var overallAssessmentEndsAtIndex;
      for (var i = 0; i < arrayWithoutEmptyElements.length; i++) {
        if (arrayWithoutEmptyElements[i].substring(0,15) == "Journal number:") {
          overallAssessmentEndsAtIndex = i;
          break;
        }
      }

      // Iterate trough all the elements that contains content for the Overall assessment, and append them to the string. 
      var overallAssessmentContent = "";
      for (var i = overallAssessmentStartsAtIndex; i < overallAssessmentEndsAtIndex; i++) {
        overallAssessmentContent = overallAssessmentContent + arrayWithoutEmptyElements[i];
        overallAssessmentContent = overallAssessmentContent + "\n";
      }

      var overallAssessmentValue = document.getElementById("overallassessment");
      overallAssessmentValue.value = overallAssessmentContent;


    }, false);
    if (file) {
      reader.readAsText(file);
    }
}
